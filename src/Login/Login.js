import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; // Import the useUser hook
import "./Login.css";

export default function Login() {
    const { login } = useUser();
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const users = useLoaderData();

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let user = users.find(
            (user) => user.email === loginData.email && user.password === loginData.password
        );

        if (user) {
            login(user);
            navigate(`/host/van`);
        } else {
            alert("User not defined!!");
            setLoginData({ email: "", password: "" });
        }
    }

    return (
        <div className="login-container">
            <h1>Log in to your account</h1>

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email address"
                    value={loginData.email}
                />
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={loginData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    );
}
