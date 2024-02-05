import { url } from "inspector";
import { title } from "process";
import React, { useState } from "react";
import styled from "styled-components";

interface ICard {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    preferiti: boolean;
}
interface FormProps {
    addCard: (c: ICard) => void;
}


const FormContainer = styled.div(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
}))

const CampiForm = styled.div(() => ({
    marginRight: '10px'
}))

const ButtonCrea = styled.button((props) => ({
    color: props.disabled ? 'grey' : 'green',
    fontSize: '1em',
    margin: '1em',
    padding: '0.25em 1em',
    border: props.disabled ? '2px solid grey' : '2px solid green',
    borderRadius: '3px',
    cursor: props.disabled ? 'default' : 'pointer'
}))

const DivButton = styled.div(() => ({
    position: 'absolute',
    height: '0px',
    width: '100px'
}))

function Form({ addCard }: FormProps): JSX.Element {
    const [titolo, setTitolo] = useState<string>("")
    const [immagine, setImmagine] = useState<string>("")
    const [descrizione, setDescrizione] = useState<string>("")
    const arrayCard = localStorage.getItem("card") ?
        JSON.parse(localStorage.getItem("card")!) :
        []
    //const [cards, setCards] = useState<Array<ICard>>(arrayCard)

    function createCard() {
        
        const newCard = {
            id: Math.floor(Math.random() * 1000000),
            title: titolo,
            imageUrl: immagine,
            description: descrizione,
            preferiti: false,
        }
        addCard(newCard)
        setTitolo("");
        setDescrizione("");
        setImmagine("");
    }

    function isValidTitle(title: string): boolean {
        return title.trim() !== ""; 
      }

      function isValidDescription(description: string): boolean {
        return description.trim() !== ""; 
      }

      const isValidUrl = (url: string): boolean => {
        try {
          new URL(url);
          return true;
        } catch (error) {
          return false;
        }
      };
      const isButtonDisabled = !isValidDescription(descrizione) || !isValidTitle(titolo) || !isValidUrl(immagine);

    return (
        <FormContainer>
            <CampiForm>
                <input type="text" placeholder="Inserisci titolo" value={titolo} onChange={(e) => { setTitolo(e.target.value) }}></input>
            </CampiForm>
            <CampiForm>
                <input type="text" placeholder="Inserisci descrizione" value={descrizione} onChange={(e)=> { setDescrizione(e.target.value) }}></input>
            </CampiForm>
            <CampiForm>
                <input type="text" placeholder="Inserisci Url dell'immagine" value={immagine} onChange={(e) => { setImmagine(e.target.value) }}></input>
            </CampiForm>
            <DivButton>
                <ButtonCrea onClick={createCard} disabled={ isButtonDisabled }>Crea card</ButtonCrea>
            </DivButton>
        </FormContainer>
    )
}
export default Form;