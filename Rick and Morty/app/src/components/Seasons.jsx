import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import season1 from '../resources/images/seasons/season-1.png'
import season2 from '../resources/images/seasons/season-2.png'
import season3 from '../resources/images/seasons/season-3.png'
import season4 from '../resources/images/seasons/season-4.png'
import portal from '../resources/images/portal.png'




const Seasons = () => {
    const history = useHistory()


    return (
        <StyledSeasons>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223' }} flipOnHover={true}>
                <FrontSide>
                    <img src={season1} alt="season-1" />
                    <p>Season One</p>
                </FrontSide>
                <StyledBackSide style={{ backgroundColor: '#E7E8E9', color: '#202223' }} onClick={() => history.push('/seasons/season1')}>
                    <p>Season One</p>
                </StyledBackSide>
            </Flippy>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223' }} flipOnHover={true}>
                <FrontSide>
                    <img src={season2} alt="season-2" />
                    <p>Season Two</p>
                </FrontSide>
                <StyledBackSide style={{ backgroundColor: '#E7E8E9', color: '#202223' }} onClick={() => history.push('/seasons/season2')}>
                    <p>Season Two</p>
                </StyledBackSide>
            </Flippy>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223' }} flipOnHover={true}>
                <FrontSide>
                    <img src={season3} alt="season-3"  width="293px" height="341"/>
                    <p>Season Three</p>
                </FrontSide>
                <StyledBackSide style={{ backgroundColor: '#E7E8E9', color: '#202223' }} onClick={() => history.push('/seasons/season3')}>
                    <p>Season Three</p>
                </StyledBackSide>
            </Flippy>
            <Flippy style={{ width: '320px', height: '420px', backgroundColor: '#202223' }} flipOnHover={true}>
                <FrontSide>
                    <img src={season4} alt="season-4" width="293px" height="341" />
                    <p>Season Four</p>
                </FrontSide>
                <StyledBackSide style={{ backgroundColor: '#E7E8E9', color: '#202223' }} onClick={() => history.push('/seasons/season4')}>
                    <p>Season Four</p>
                </StyledBackSide>
            </Flippy>
        </StyledSeasons>
    )
}

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
        padding: 20px 5px;
    }
`
const StyledBackSide = styled(BackSide)`
    padding-top: 50%;
    font-size: 3rem;
`

export default Seasons