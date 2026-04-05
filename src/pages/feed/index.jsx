// import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
// import { Button } from '../../components/Button';
// import bannerImage from '../../assets/banner.png';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={90} name="Victor Reis" image="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
                <UserInfo percentual={87} name="Victor Reis" image="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
                <UserInfo percentual={61} name="Victor Reis" image="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
                <UserInfo percentual={54} name="Victor Reis" image="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
                <UserInfo percentual={32} name="Victor Reis" image="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
            </Column>
        </Container>
    </> )
}

export { Feed }