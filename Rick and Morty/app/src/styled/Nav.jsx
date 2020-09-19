import styled from 'styled-components'
import { Link } from 'react-browser-router'

const Nav = styled.nav`
    padding: 2rem;
    font-size: 2rem;
    background-color: #202223;

    @media (max-width: 768px) {
        height: 3em;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    float: right;
    padding: 2rem;

    &:hover {
        color: ${props => props.primary ? '#56A14B' : '#7EBABD'};
        border-radius: 1rem;

    }

    @media (max-width: 768px) {
        padding-right: 0;
    }
`

export { Nav, StyledLink }