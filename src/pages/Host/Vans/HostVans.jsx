import React from "react"
import { Link } from "react-router-dom"

export default function HostVans(){
    const [hostVans , setHostVans] = React.useState(null)
    React.useEffect(()=>{
        fetch("/api/host/vans")
            .then(response => response.json())
            .then(data => setHostVans(data.vans))
    },[]) 
    const hostVansElement = hostVans && hostVans.map(vanObj => (
        <div key={vanObj.id} >
            <Link
                to={`/host/vans/${vanObj.id}`}
                key={vanObj.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={vanObj.id}>
                    <img src={vanObj.imageUrl} alt="" />
                    <div className="host-van-info">
                        <h3>{vanObj.name}</h3>
                        <p>${vanObj.price}/day</p>
                    </div>
                </div>
            </Link>
        </div>
    )) 
    return (
        <>
            <h1>Your Listed Vans</h1>
            {hostVans ? hostVansElement : "loading......"}
        </>
    )
}