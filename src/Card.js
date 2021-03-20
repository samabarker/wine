import React from 'react';

const Card = (props) => {
    
    const myCol = {
        backgroundImage: `linear-gradient(to right,rgba(255,0,0,0), ${props.colour}, rgba(255,0,0,0))`,
        height: "20px",
        opacity: "50%"
    }
    
    return (
        <div className="text-center col-11 col-md-5 col-xl-3 border border-2 m-3 p-3 rounded sb-hover">
            <div style={myCol} className="rounded mb-2"></div>
            <div>
                <h2>{ props.name }</h2><br />
                <strong>Types</strong><br />{ props.types }<br /><br />
                <strong>Pairs With</strong><br /> { props.pairs }
            </div>
        </div>
    )
}

export default Card;