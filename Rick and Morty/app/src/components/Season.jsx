import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

const Season = ({ season, seasonFilter }) => {

    return (
        <>
        <StyledLoader type="Rings" color="#56A14B" height={80} width={80} timeout={1000}/>
        <StyledSeason>
            {season.filter(episode => episode.episode.includes(seasonFilter)).map(episode =>
                <Flippy style={{ width: '320px', height: '440px', padding: '30px' }} key={episode.id} flipOnHover={true}>
                    <FrontSide episode={episode}>
                        <img src={episode.img} width="200px" alt={episode.name} />
                        <p>{episode.episode}</p>
                        <p>{episode.name}</p>
                    </FrontSide>
                    <StyledBackSide>
                        <h2>Description</h2>
                        <div>{episode.description}</div>
                    </StyledBackSide>
                </Flippy>)}
        </StyledSeason>
        </>
    )
}
const StyledLoader = styled(Loader)`
    padding-top: 15%;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: #E7E8E9;
`
const StyledSeason = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    font-size: 2rem;
    padding: 5rem 0;
    background-color: #E7E8E9;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 800px;

`
const StyledBackSide = styled(BackSide)`
    background-color: #202223;
    color: #E7E8E9;
    text-align: left;
    padding-top: 70px;
    font-size: 1.8rem;
    justify-content: justify;

`
export default Season
