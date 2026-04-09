import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import { IHeader } from './types'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuImg,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}: IHeader) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    const handleClickSignUp = () => {
        navigate('/cadastro')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <MenuImg src={logo} alt="Logo da dio" onClick={handleClickHome} />
                {autenticado ? (
                    <>                
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>                    
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
                ) : (
                    <>                
                        <MenuRight onClick={handleClickHome}>Home</MenuRight>
                        <Button title ="Entrar" onClick={handleClickSignIn} />
                        <Button title="Cadastrar" onClick={handleClickSignUp} />               
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }