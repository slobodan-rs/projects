import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getAllCaracters } from '../services'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';

const Caracters = () => {
    const [caracters, setCaracters] = useState({})
    const [page, setPage] = useState(1)
    const [counter, setCounter] = useState(0)
    const [newCounter, setNewCounter] = useState(1)

    const { id } = useParams()
    
    const history = useHistory()
    let results = caracters.results
    let pages = [...Array(counter).keys()]
    


    useEffect(() => {
        getAllCaracters(page).then(res => {
            setCaracters(res.data)
            setCounter(res.data.info.pages)
        })
    }, [page])

    const handleClick = (id) => {
        history.push(`/characters/${id}`)
        setPage(id)
    }
    const handlePagesPlus = () => {
        setNewCounter(newCounter === counter ? null : newCounter + 6)
    }
    const handlePagesMinus = () => {
        setNewCounter(newCounter === counter ? null : newCounter - 6)
    }
    
    return (
        <>
        <StyledCaracters>
            {results ? results.map(caracter =>
                <StyledFlippy flipOnHover={true} key={caracter.id}>
                    <FrontSide>
                        <div>
                            <img src={caracter.image} alt={caracter.name} width="293px" />
                            <h3>{caracter.name}</h3>
                        </div>
                    </FrontSide>
                    <StyledBackSide>
                        <div>
                            <Name>{caracter.name}</Name>
                        </div>
                        <div>Status: 
                            <StatusSpan color={caracter.status === 'Alive' ? 1 : 0}>{caracter.status}</StatusSpan>
                        </div>
                        <p>Species: 
                            <RightSpan>{caracter.species}</RightSpan>
                        </p>
                        <p>Type: 
                            <RightSpan>{caracter.type ? caracter.type : '/'}</RightSpan>
                        </p>
                        <p>Origin: 
                            <RightSpan>{caracter.origin.name}</RightSpan>
                        </p>
                        <p>Location: 
                            <RightSpan>{caracter.location.name}</RightSpan>
                        </p>
                    </StyledBackSide>
                </StyledFlippy>
            )
            : null}
        </StyledCaracters>
        <Pages>
            <Page disabled={newCounter === 1} onClick={() =>  handlePagesMinus()}>Prev</Page>
               {pages.splice(newCounter, 6).map(page => 
            
                        <Page onClick={ () => handleClick(page)} key={page} backgroundColor={+id === page}>{page}</Page>
                    )}
            <Page disabled={newCounter > 30 }onClick={() => handlePagesPlus()}>Next</Page>
        </Pages>
        </>
    )
}

const StyledCaracters = styled.section`
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: 2rem;
    padding: 4rem 0;
    background-color: #E7E8E9;
`
const StyledFlippy = styled(Flippy)`

    width: 340px;
    height: 400px;
    color: #202223;

`
const StyledBackSide = styled(BackSide)`
    background-color: #202223;
    color: #E7E8E9;
    text-align: left;
    padding-top: 50px;
    font-size: 1.6rem; 
`
const StatusSpan = styled.span`
    color: ${props => props.color ? '#56A14B' : '#CE112D'};
    float: right;

`
const Name = styled.p`
/* -webkit-transform: rotate(-15deg);  */
    font-size: 4rem;
    text-align: center;
    margin-top: 0px;
`
const RightSpan = styled.span`
    float: right;
`

const Pages = styled.section`
    width: 100%;
    height: 5rem;
    background-color: #E7E8E9;
    text-align: center;
    font-size: 2rem;

    @media (max-width: 768px) {
        height: 8rem;
    }
   
`
const Page = styled.button`
    display: inline;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: ${props => props.backgroundColor ? '#7EBABD' : null};

    &:hover {
        background-color: #56A14B; 
    }
    @media (max-width: 768px){
        padding: 5px;
    }

`

export default Caracters