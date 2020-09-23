import React from 'react'
import styled from 'styled-components'

import background from '../resources/images/landing-background.png'

const LandingSection = () => {
    return (
        <StyledLandingSection>
            <h1>All about your favorite show!</h1>
        </StyledLandingSection>
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
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: #202223;
    background-position: center; 

@media (max-width: 768px) {
    height: 80vh;
    font-size: 2.4em;
    background-size: 300%;
    background-position: center; 
    line-height: 1.6em;
}
`
export default LandingSection