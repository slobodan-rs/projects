import React from 'react'
import styled from 'styled-components'

const Temperature = ({ temperature, setTemperature }) => {

    return (
        <Wrapper>
            <Status color={temperature > 15 ? 1 : 0}>
                <p>{temperature}°C</p>
            </Status>
            <TempControl onClick={() => setTemperature(temperature === 30 ? 30 : temperature + 1)} >
                <p>+</p>
            </TempControl>
            <TempControl onClick={() => setTemperature(temperature === 0 ? 0 : temperature - 1)} >
                <p>-</p>
            </TempControl>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 10% auto;
    width: 370px;
    height: 500px;
    background-color: #4B6F85;
    border-radius: 30px;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.75);
    padding-top: 50px;
`
const Status = styled.div`
    display: flex;
	border-radius: 50%;
	color: #ffffff;
	height: 220px;
	width: 220px;
	text-align: center;
	justify-content: center;
	align-items: center;
	font-size: 48px;
	border: 3px #ffffff solid;
    margin-left: 20%;
    background-color: ${({color}) => color ? '#FB7300' : '#3275B5'};
    transition: background 0.5s;
`
const TempControl = styled.div`
    display: inline-block;
    border-radius: 100px;
	height: 80px;
	width: 80px;
	font-size: 25px;
	color: #ffffff;
	background: rgb(105, 104, 104);
	border: 2px #ffffff solid;
    margin: 100px 50px;
    justify-content: space-evenly;

    &:hover {
        background-color: #C5C5C5;
    }
    
`

export default Temperature