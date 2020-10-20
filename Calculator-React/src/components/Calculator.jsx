import React, { useState } from 'react'
import styled from 'styled-components'


const Calculator = () => {
    const [currentNum, setCurrentNum] = useState('')
    const [prevNum, setPrevNum] = useState(0)
    const [operator, setOperator] = useState('')

    const handleNum = (e) => {
        const number = isNaN(currentNum) ? '' : currentNum;
        setCurrentNum(number + e.target.textContent)
    }
    const handleOperator = (e) => {
        if (operator) {
            calculate(operator)
        }
        else {
            setPrevNum(parseFloat(currentNum))
            setCurrentNum('')
        }
        setOperator(e.target.textContent)
    }
    const handleSum = () => {
        calculate(operator)
        setOperator('')
    }
    const handleClear = () => {
        setCurrentNum('')
        setPrevNum(0)
        setOperator('')
    }

    const calculate = (operator) => {
        if (operator === '+') {
            setPrevNum(prevNum + parseFloat(currentNum))
            setCurrentNum('')
        }
        else if (operator === '-') {
            setPrevNum(prevNum - parseFloat(currentNum))
            setCurrentNum('')
        }
        else if (operator === 'x') {
            setPrevNum(prevNum * parseFloat(currentNum))
            setCurrentNum('')
        }
        else {
            setPrevNum(prevNum / parseFloat(currentNum))
            setCurrentNum('')
        }
    }


    return (
        <Wrapper>
            <CalculatorSum>
                <div>{currentNum}</div>
                <p>{prevNum}</p>
            </CalculatorSum>
            <CalculatorKey onClick={handleNum}>7</CalculatorKey>
            <CalculatorKey onClick={handleNum}>8</CalculatorKey>
            <CalculatorKey onClick={handleNum}>9</CalculatorKey>
            <CalculatorKey onClick={handleOperator}>/</CalculatorKey>
            <CalculatorKey onClick={handleNum}>4</CalculatorKey>
            <CalculatorKey onClick={handleNum}>5</CalculatorKey>
            <CalculatorKey onClick={handleNum}>6</CalculatorKey>
            <CalculatorKey onClick={handleOperator}>x</CalculatorKey>
            <CalculatorKey onClick={handleNum}>1</CalculatorKey>
            <CalculatorKey onClick={handleNum}>2</CalculatorKey>
            <CalculatorKey onClick={handleNum}>3</CalculatorKey>
            <CalculatorKey onClick={handleOperator}>-</CalculatorKey>
            <CalculatorKey onClick={handleNum}>.</CalculatorKey>
            <CalculatorKey onClick={handleNum}>0</CalculatorKey>
            <CalculatorKey onClick={handleSum} color={true ? 1 : 0}>=</CalculatorKey>
            <CalculatorKey onClick={handleOperator}>+</CalculatorKey>
            <CalculatorClear onClick={handleClear}>Clear</CalculatorClear>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin: 10% auto;
    width: 40rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #32373C;
    
`
const CalculatorSum = styled.div`
    background-color: #32373C;
    color: #FFF;
    width: 40rem;
    height: 15rem;
    font-size: 3rem;
    text-align: right;
    padding-right: 2rem;
    border-bottom: 1px solid #C5C5C5;

    div {
        padding-top: 2.5rem;
        width: 100%;
        height: 40px;
    }
    p {
        font-size: 2.4rem;
    }
`
const CalculatorKey = styled.button`
    width: 8rem;
    height: 8rem;
    margin: 1rem;
    background-color: ${({ color }) => color ? '#FB7300' : '#C5C5C5'};
    color: #32373C;
    border-radius: 50%;
    border: none;
    font-size: 3.5rem;

    &:hover {
        background-color: ${({ color }) => color ? '#CE112D' : '#3275B5'};
        transition: background-color 0.3s;
    }
`
const CalculatorClear = styled.button`
    width: 40rem;
    height: 5rem;
    font-size: 1.6rem;
    background-color:gray;
    border: none;

    &:hover {
        background-color: #CE112D;
        transition: background-color 0.3s;
    }
`

export default Calculator

