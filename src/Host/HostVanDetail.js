import { Outlet, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function HostVanDetail({data}) {
    const {id} = useParams()
    const van = data.find(el => el.id === id)
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} alt="van-image" />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <nav style={{marginBlock: '10px'}}>
                    <Link to='.'>detail</Link>
                    <Link to='pricing'>pricing</Link>
                    <Link to='photos'>photos</Link>
                </nav>
                <Outlet context={van} />
            </div>
        </section>
    )
}