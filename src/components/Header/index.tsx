import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuExit,
    MenuImg,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import { useAuth } from '../../hooks/useAuth'

const Header = () => {

    const { user, handleSignOut } = useAuth();

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

    const handleClickFeed = () => {
        navigate('/feed')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <MenuImg src={logo} alt="Logo da dio" onClick={handleClickHome} />
                {user.id ? (
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
                {user.id ? (
                    <>
                        <UserPicture onClick={handleClickFeed} src="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
                        <MenuExit onClick={handleSignOut}>Sair</MenuExit>
                    </>
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