import React from 'react'
import styled from 'styled-components'

import { ReactComponent as GithubSvg } from '../icons/github.svg'
import { ReactComponent as LinkSvg } from '../icons/link.svg'


const ProjectContainer = styled.div`
    background-color: ${props => props.theme.cardBackground};
    border: ${props => props.theme.cardBorder};
    border-radius: 17px;
    padding: 35px;
`

const Name = styled.h2`
    color: ${props => props.theme.textColor};
    font-weight: bold;
    margin-bottom: 20px;
`

const Description = styled.p`
    color: ${props => props.theme.textColor};
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

const LinkIcon = styled(LinkSvg)`
    width: 30px;
    stroke: ${props => props.theme.iconColor};
    transition: stroke 0.2s ease;

    &:hover {
        stroke: ${props => props.theme.hoverColor};
        transition: stroke 0.2s ease;
    }
`

const GithubIcon = styled(GithubSvg)`
    width: 30px;
    stroke: ${props => props.theme.iconColor};
    transition: stroke 0.2s ease;

    &:hover {
        stroke: ${props => props.theme.hoverColor};
        transition: stroke 0.2s ease;
    }
`

function Project({ project }) {
    return (
        <ProjectContainer>
            <Name>{project.name}</Name>
            <Description>{project.description}</Description>
            <Bottom>
                <Left>
                    {project.tech.map((tech) => 
                        <Tech key={tech}>{tech}</Tech>
                    )}
                </Left>
                <Right>
                    {project.link && 
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <LinkIcon />
                        </Link>
                    }
                    {project.github && 
                        <Link href={"https://github.com/MiniCube11/" + project.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon />
                        </Link>
                    }
                </Right>
            </Bottom>
        </ProjectContainer>
    )
}

export default Project
