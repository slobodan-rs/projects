import React from 'react'
import styled from 'styled-components'

import background from '../resources/images/landing-background.png'
// import title from '../resources/images/title.png'

const LandingSection = () => {
    return (
        <>
            <h1>All about your favorite show!</h1>
            {/* <img src={title} alt="title"  width="30%"/> */}
        </>
    )
}
const StyledLandingSection = styled.section`
    width: 100%;
    height: 863px;
    font-size: 5rem;
    text-align: center;
    padding-top: 2rem;
    color: #D8E7ED;
    background-image: url(${background});
    background-size: 90%;
    background-repeat: no-repeat;
    background-color: #202223;

@media (max-width: 768px) {
    height: 80vh;
    font-size: 2.4em;
    background-size: 300%;
    background-position: center; 
    line-height: 1.6em;
}
`
export { LandingSection, StyledLandingSection, }