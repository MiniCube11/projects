import React from 'react'
import styled from 'styled-components'

import github from './icons/github.svg'
import link from './icons/link.svg'

const ProjectContainer = styled.div`
    background-color: #FCFCFC;
    border: 1px solid #C4C7D2;
    border-radius: 17px;
    padding: 35px;
`

const Name = styled.h2`
    font-weight: bold;
    margin-bottom: 20px;
`

const Description = styled.p`
    height: 40px;
    margin-bottom: 40px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`

`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Tech = styled.span`
    color: #797979;
    margin-right: 20px;
`

const Link = styled.a`
    margin-left: 10px;
`

function Project({ project }) {
    return (
        <ProjectContainer>
            <Name>{project.name}</Name>
            <Description>{project.description}</Description>
            <Bottom>
                <Left>
                    {project.tech.map((tech) => 
                        <Tech>{tech}</Tech>
                    )}
                </Left>
                <Right>
                    {project.link && 
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={link} alt="link"></img>
                        </Link>
                    }
                    {project.github && 
                        <Link href={"https://github.com/MiniCube11/" + project.github} target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github"></img>
                        </Link>
                    }
                </Right>
            </Bottom>
        </ProjectContainer>
    )
}

export default Project
