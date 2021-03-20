import React from 'react';
import Card from './Card';

const CardList = ({wine}) =>  {

    const wineArray = wine.map((item,i) => {
        return <Card 
                    key={i} 
                    name={wine[i].name} 
                    pairs={wine[i].pairs} 
                    colour={wine[i].colour}
                    types={wine[i].types}  
                />
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
              {wineArray}
            </div>
        </div>
    )
}

export default CardList