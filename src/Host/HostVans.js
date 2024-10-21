import { Link } from 'react-router-dom';
import { useUser } from '../UserContext';

export default function HostVans() {
    const { user } = useUser();

    return (
        <>
            {user ? (
                <>
                    <h1>Your List Goes Here</h1>
                    {user.vans.map(van => (
                        <Link
                            to={`${van.id}`}
                            key={van.id}
                            className="host-van-link-wrapper"
                        >
                            <div className="host-van-single" key={van.id}>
                                <img src={van.imageUrl} alt='host-van-detail' />
                                <div className="host-van-info">
                                    <h3>{van.name}</h3>
                                    <p>${van.price}/day</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            ) : (
                <div className='host-van-login'>
                    <h1>Login to get your listed vans</h1>
                    <Link to="/login">Login</Link>
                </div>
            )}
        </>
    );
}
