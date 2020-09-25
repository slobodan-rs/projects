import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import background from '../resources/images/landing-background.png'

const LandingSection = () => {
    return (
        <>
        <StyledLoader type="Rings" color="#7EBABD" height={80} width={80} timeout={1000}/>
        <StyledLandingSection>
            <h1>All about your favorite show!</h1>
        </StyledLandingSection>
        </>
    )
}
const StyledLoader = styled(Loader)`
    padding-top: 15%;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color:  #202223;

    @media (max-width: 768px) {
        height: 700px;
    }
`
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