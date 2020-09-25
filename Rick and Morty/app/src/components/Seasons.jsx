import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Flippy, { FrontSide } from 'react-flippy';
import Loader from 'react-loader-spinner'

import season1 from '../resources/images/seasons/season-1.png'
import season2 from '../resources/images/seasons/season-2.png'
import season3 from '../resources/images/seasons/season-3.png'
import season4 from '../resources/images/seasons/season-4.png'
import portal from '../resources/images/portal.png'

const Seasons = ({ setSeasonFilter, setTitle }) => {
    const history = useHistory()

    return (
        <>
        <StyledLoader type="Rings" color="#56A14B" height={80} width={80} timeout={500}/>
        <StyledSeasons>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223'}}>
                <FrontSide onClick={() => {history.push(`/seasons/${1}`); setSeasonFilter('S01'); setTitle('Season One'); window.scrollTo(0, 0)}} >
                    <img src={season1} alt="season-1" />
                    <p>Season One</p>
                </FrontSide>
            </Flippy>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223' }}>
                <FrontSide onClick={() => {history.push(`/seasons/${2}`); setSeasonFilter('S02'); setTitle('Season Two'); window.scrollTo(0, 0)}} >
                    <img src={season2} alt="season-2" />
                    <p>Season Two</p>
                </FrontSide>
                
            </Flippy>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223' }}>
                <FrontSide onClick={() => {history.push(`/seasons/${3}`); setSeasonFilter('S03'); setTitle('Season Three'); window.scrollTo(0, 0)}} >
                    <img src={season3} alt="season-3"  width="293px" height="341"/>
                    <p>Season Three</p>
                </FrontSide>
                
            </Flippy>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223' }}>
                <FrontSide onClick={() => {history.push(`/seasons/${4}`); setSeasonFilter('S04'); setTitle('Season Four'); window.scrollTo(0, 0)}} >
                    <img src={season4} alt="season-4" width="293px" height="341" />
                    <p>Season Four</p>
                </FrontSide>
            </Flippy>
        </StyledSeasons>
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
const StyledSeasons = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    padding-top: 20rem;
    font-size: 1.6rem;
    color: #E7E8E9;
    background-color: #E7E8E9;
    background-image: url(${portal});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 800px;

    @media(max-width: 768px){
        height: 100%;
        padding: 20px 0;
        
    }
`

export default Seasons