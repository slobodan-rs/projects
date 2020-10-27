import React from 'react'
import styled from 'styled-components'

// Heder section for web page
const Header = () => {
    return (
        <Wrapper>
            <div>- Select zero to N Datasources</div>
            <div>- Select zero to N Campaigns</div>
            <p>(where zero means "All")</p>
            <div>Hitting "Apply", filters the chart to show a timeseries for both <em>Click</em> and <em>Impressions</em> for given Datasource and Campaigns - logical AND</div>
        </Wrapper>
    )
}
// Styled Components
const Wrapper = styled.header`
    font-size: 1.6rem;
    height: 10rem;
    border: 1px solid whitesmoke;
    margin: 2rem;
    padding: 2rem;

    div {
        padding: 0.2rem;
    }
    p {
        font-size: 1rem;
    }
    @media(max-width: 768px){
        font-size: 1.3em;
        height: 10em;ž
        
        p{
            font-size: 0.8em;
        }
    }
`

export default Header