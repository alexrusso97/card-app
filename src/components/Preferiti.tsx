import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

interface CardProps{
    id:number;
    imageUrl: string;
    title: string;
    description: string;
    preferiti: boolean;
}

function Preferiti(): JSX.Element{
    const [arrayCards, setArrayCards] = useState<CardProps[]>(()=>{return localStorage.getItem("card") ?
    JSON.parse(localStorage.getItem("card")!) :
    [] })

    function addFavorite(id:number){
        const favorite = arrayCards.map(fav=>fav.id ===id ? {...fav, preferiti: !fav.preferiti} : fav)
        setArrayCards(favorite)
        localStorage.setItem("card", JSON.stringify(favorite))
    }
    
    return(
        <>
        
        {arrayCards.filter(pre=>pre.preferiti === true).map((prefe:CardProps)=>(
            <Card key={prefe.id} imageUrl={prefe.imageUrl} title={prefe.title} description={prefe.description} preferiti={prefe.preferiti} addPreferiti={()=>addFavorite(prefe.id)}></Card>
        ))
        
}
        </>
    )
}

export default Preferiti;