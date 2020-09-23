import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'

import title from '../resources/images/title.png'
import { getUsers, postUsers } from '../services'


const Login = ({ setLogin }) => {
    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState('')
    const [userPassword, setPassword] = useState('')
    const [error, setError] = useState('')

    // Sign Up / Login
    const [formType, setFormType] = useState('Login')
    const [formPar, setFormPar] = useState('Need and account? Join now!')
    
    const history = useHistory()
    
    useEffect(() => {
        getUsers().then(res => {
            setUsers(res.data)
        })
    },[userName, userPassword])


    const handleLogin = (e) =>{
        e.preventDefault()
        users.filter(user => {
            if(user.name.includes(userName) && user.password.includes(userPassword) && userName !== '' && userPassword !== ''){
                setLogin(false)
                history.push('/')
            }
            else{
                setError('Error')
                setFormType('Login')
            }
        })
        setTimeout(() => setError(''), 2000)
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        let tmp = {
            name: userName,
            password : userPassword
        }
        users.filter(user => {
            if(user.name !== userName && userName !== '' && userPassword !== ''){
                postUsers(tmp)
                setFormType('Login')
            }
            else {
                setError('Error')
                setFormType('Sign Up')  
            }
        })
        setTimeout(() => setError(''), 2000)        
    }
    
    const handleSwitch = () => {
        setFormType(formType ==='Sign Up' ? 'Login' : 'Sign Up')
        setFormPar(formPar === 'Already on R&M? Login' ? 'Need and account? Join now!' : 'Already on R&M? Login')
    }
    return (
        <StyledLogin>
            <StyledForm onSubmit={(e) => { formType === 'Login' ? handleLogin(e) : handleSignUp(e)}}>
                <h2>{formType}</h2>
                <InputText type="text" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} required/>
                <InputPassword type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                <InputSubmit type="submit" value={formType} />
                <SignUp onClick={() => handleSwitch()} color={formType}>{formPar}</SignUp>
                <Error>{error}</Error>
            </StyledForm>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    width: 100vw;
    height: 90vh;
    text-align: center;
    background-color: #202223;
    background-image: url(${title});
    background-size: 50%;
    background-repeat: no-repeat;
    background-color: #202223;
    background-position: top;

    @media (max-width: 768px){
        background-size: 70%;
    }
`
const StyledForm = styled.form`
    text-align: center;
    margin-top: 10%;
    width: 40rem;
    display: inline-block;
    font-size: 1.6rem;
    padding: 5rem;
    border-radius: 5rem;
    background-color: rgba(48, 53, 54, 0.58);
    color: white;

    @media (max-width: 768px) {
        width: 15em;
        margin-top: 10em;
    }
`
const InputText = styled.input.attrs({ type: 'text' })`
    margin-bottom: 1rem;
    width: 80%;
`
const InputPassword = styled.input.attrs({ type: 'password' })`
    margin-bottom: 2rem;
    width: 80%;
`
const InputSubmit = styled.input.attrs({ type: 'submit' })`
    padding: 1rem;
    margin-bottom: 1rem;
    width: 85%;
    border-radius: 10rem;
    border: none;
    
    &:hover {
        background-color: ${({value}) => value === 'Login' ? '#56A14B' : '#7EBABD'}
    }
`
const Error = styled.h2`
    color: red;
`
const SignUp = styled.p`
    &:hover {
        text-decoration: underline;
        color: ${({color}) => color === 'Login' ? '#7EBABD' : '#56A14B'};
    }
`

export default Login