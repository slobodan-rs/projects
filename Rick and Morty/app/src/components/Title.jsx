import React from 'react'
import styled from 'styled-components'

const Title = ({title}) => {
    return (
        <StyledTitle>{title}</StyledTitle>
    )
}
const StyledTitle = styled.h1`
    font-size: 5rem;
    text-align: center;
    background-color: #E7E8E9;
    color: #202223;
    margin: 0;
    padding: 5rem;
`

export default Title