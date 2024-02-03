import React, { useState } from "react";
import styled from "styled-components";

interface CardProps{
    imageUrl: string;
    title: string;
    description: string;
    preferiti: boolean;
    addPreferiti: ()=>void;
    
}
const CardContainer = styled.div(()=>({
    display: 'inline-block',
    padding:'20px'
}))

const CardStyle = styled.div(()=>({
    border: '1px solid',
    padding: '25px 12px 18px',
    borderColor: 'black',
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: '5px',
}))

const H5 = styled.h5(()=>({
    backgroundColor: 'whitesmoke',
    textAlign: 'center'
}))

const H6 = styled.h6(()=>({
    fontFamily: 'cursive'
}))

const DivPreferito = styled.div(()=>({
    display: 'flex',
    justifyContent: 'center'
}))

const PPreferito = styled.button<{preferiti: boolean}>((props)=>({
    cursor: 'pointer',
    color: props.preferiti ? 'red' : 'grey',                                      //da sistemare 
    fontSize: '25px'
}))

const StyleImg = styled.img(()=>({
    width: 'fit-content',
    height: 'fit-content',
    objectFit: 'cover',
    borderRadius: '5px'
}))


function Card({imageUrl,title,description,preferiti,addPreferiti}:CardProps):JSX.Element {


    return(
        <CardContainer>
        <CardStyle>
            <StyleImg src={imageUrl}></StyleImg>
            <H5>{title}</H5>
            <H6>{description}</H6>
            <DivPreferito>
                <PPreferito onClick={addPreferiti} preferiti={preferiti}>♥</PPreferito>
            </DivPreferito>
        </CardStyle>
        
        </CardContainer>

    )
}

export default Card;