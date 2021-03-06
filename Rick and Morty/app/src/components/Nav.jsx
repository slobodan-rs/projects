import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = styled.nav`
    display: ${({login}) => login ? 'none' : 'block'};
    padding: 2rem;
    font-size: 1.6rem;
    background-color: #202223;

    @media (max-width: 768px) {
        height: 3em;
        height: ${({burger}) => burger ? '10em' : '3em'};
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    float: right;
    padding: 1.5rem;
    border-radius: 1rem;
    
    &:hover {
        color: ${props => props.primary ? '#56A14B' : '#7EBABD'};
        border: 2px solid ${props => props.primary ? '#56A14B' : '#7EBABD'};
        
    }

    @media (max-width: 768px) {
        display: none;

        ${({burger}) => burger && css`
            text-align: center;
            float: none;
            display: block;
        `}
    }
`
const FontAwesome = styled(FontAwesomeIcon)`
    display:none;

    @media (max-width: 768px) {
    display: block;
    padding-top: 10px;
    float: right;
    }
`


export { Nav, StyledLink, FontAwesome }