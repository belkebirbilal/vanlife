import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
export default function Dashbord({data}) {
    const [newData , setnewData] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        async function getnewData() {
            const newData = await fetch('https://api.jsonbin.io/v3/b/670aa770ad19ca34f8b73e1b')
            const res = await newData.json()
            setnewData(res.record)
            setLoading(false)
        }
        getnewData()
    }, [])
    return (
        <div className="dashbord">
            <div className="welcome">
                <h2>Welcome!</h2>
                <p>income last <span style={{textDecoration: 'underline'}}>30 days</span></p>
                <h1>$2,260</h1>
            </div>
            <div className="review">
                <h3>Review score 5.0/5</h3>
            </div>
            <div className="listedVans" >
            {loading ?
            <h1>loading...</h1> :
            newData.map(van => {
                return (
                    <Link
                        to={`../vans/${van.id}`}
                        relative="path"
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
                )
            })}
            </div>
        </div>
    )
}