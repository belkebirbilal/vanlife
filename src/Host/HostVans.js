import { Link , useLoaderData } from 'react-router-dom'
import { useState , useEffect } from 'react'
export default function HostVans() {
    const data = useLoaderData()
    const hostvans = [data[0] , data[1] , data[2]]
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        if (data.length > 0) {
            setLoading(false);
        }
    }, [data]);
    return (
        <>
            <h1>Your List Goes Here</h1>
            {loading ?
            <h1>loading..</h1> :
            hostvans.map(van => {
                return (
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
                )
            })}
        </>
    )
}