import React from "react"

export default function Card(props) {


    return(
        <div className="card--container">
            <img src={`./images/${props.item.imageUrl}`} className="card--image"/>
            <div className="card--text">
                <img src="./images/location-icon.png" className="card--locationimg"/>
                <span className="card--location">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} target="_blank">
                    <small className="card--googlelink">
                        View on Google Maps
                    </small>
                </a>
                <h1 className="card--title">{props.item.title}</h1>
                <span className="card--startDate">{props.item.startDate} - </span>
                <span className="card--endDate">{props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}