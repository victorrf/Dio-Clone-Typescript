import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://imgs.search.brave.com/H5f7tVUU7cOJ-BMw8RLR7V4WfzcvtuBmnEkWC0ypvRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9haW90/YnJhc2lsLmNvbS5i/ci9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9haW90YnJhc2ls/LmNvbS5ici9kYXNo/Ym9hcmQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDcvaVN0/b2NrLTExNDI1Mzk4/NTguanBnJnc9Mzg0/MCZxPTc1" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/14025583?s=400&u=672d7306f90cef64fcff65d1eb107d4988af2d29&v=4" />
                    <div>
                        <h4>Victor Reis</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de HTML e CSS no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
    </CardContainer>
  )
}

export { Card }
