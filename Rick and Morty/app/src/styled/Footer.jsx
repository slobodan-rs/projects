import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterDiv = () => {
    return (
        <div>
            <p>Developed By: <span Style="color:white"> Slobodan</span></p>
            <a href="mailto:mr.slobodan@hotmail.rs">
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
            </a>
            <p>All Rights Belongs To: TM & © 2020 Turner Broadcasting System, Inc. A WarnerMedia Company</p>
        </div>
    )
}
const Footer = styled.footer`
    text-align: center;
    font-size: 1.7rem;
    height: 10rem;
    background-color:#303435;
    padding: 5rem;
`
export { Footer, FooterDiv}