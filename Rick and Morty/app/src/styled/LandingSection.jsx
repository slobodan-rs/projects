import styled from 'styled-components'
import background from '../resources/images/landing-background.png'

const LandingSection = styled.section`
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
    padding-top: 3em;
    height: 768px;
    font-size: 3em;
    background-size: 400%;
    background-position: center; 
    line-height: 1.6em;
}
`
export default LandingSection