import React from 'react'
import styled from 'styled-components'

import season1 from '../resources/images/seasons/season-1.png'
import season2 from '../resources/images/seasons/season-2.png'
import season3 from '../resources/images/seasons/season-3.png'
import season4 from '../resources/images/seasons/season-4.png'
import portal from '../resources/images/portal.png'

const Seasons = () => {
    return (
    <>
    <StyledImg>
        <img src={season1} alt="season-1" />
    </StyledImg>
    <StyledImg>
        <img src={season2} alt="season-1" />
    </StyledImg>
    <StyledImg>
        <img src={season3} alt="season-1" />
    </StyledImg>
    <StyledImg>
        <img src={season4} alt="season-1" />
    </StyledImg>
    </>
    )
}

const StyledSeasons = styled.section`
    width: 100%;
    height: 863px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    background-color: #E7E8E9;
    background-image: url(${portal});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 800px;
`
const StyledImg = styled.div`
    flex: 1;
    max-width: 330px;
    height: 450px;
    padding: 10px;
    margin-top: 12%;
    box-sizing: border-box;
    transition: transform .2s;
    background-color: #202223;
    border-radius: 20px;

    &:hover{
    transform: scale(1.05);
}
`

export { Seasons, StyledSeasons }