import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <p>Developed By: <span style={{color:"#E7E8E9"}}> Slobodan</span></p>
            <a href="mailto:mr.slobodan@hotmail.rs">
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="#E7E8E9" />
            </a>
            <p>All Rights Belongs To: TM & © 2020 Turner Broadcasting System, Inc. A WarnerMedia Company</p>
        </div>
    )
}
const StyledFooter = styled.footer`
    text-align: center;
    font-size: 1.3rem;
    height: 12rem;
    background-color: #303435;
    padding: 2rem;

    @media(max-width: 768px) {
        font-size: 1.2em;
        padding: 10px;
        height: 100%;
    }
`
export { Footer, StyledFooter}