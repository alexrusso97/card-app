import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Card from "./Card";
import { title } from "process";
interface CardProps{
    id:number;
    imageUrl: string;
    title: string;
    description: string;
    preferiti: boolean;
}

function Home(): JSX.Element {
    const [arrayCards, setArrayCards] = useState<CardProps[]>(()=>{return localStorage.getItem("card") ?
    JSON.parse(localStorage.getItem("card")!) :
    [] })

const addCard = (c:CardProps)=>{
    const newArrayCard = [...arrayCards, c]
    setArrayCards(newArrayCard)
    localStorage.setItem("card", JSON.stringify(newArrayCard))
}

function addFavorite(id:number){
    const favorite = arrayCards.map(fav=>fav.id ===id ? {...fav, preferiti: !fav.preferiti} : fav)
    setArrayCards(favorite)
    localStorage.setItem("card", JSON.stringify(favorite))
}
    return(
        <>
        
        <Form addCard={addCard}></Form>
        {arrayCards.map((el:CardProps)=>(
            <Card key={el.id} imageUrl={el.imageUrl} title={el.title} description={el.description} preferiti={el.preferiti} addPreferiti={()=>addFavorite(el.id)}></Card>
        ))}
        </>
    )
}

export default Home;