import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    padding: 2rem;
    font-size: 1.6rem;
    background-color: #202223;

    @media (max-width: 768px) {
        height: 3em;
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
        padding-right: 0;
    }
`

export { Nav, StyledLink }