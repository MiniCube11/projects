import React from 'react'
import styled from "styled-components"

const HeadingContent = styled.div`
  margin: 125px 0;
`

const Title = styled.h1`
  margin-left: 10vw;
  margin-bottom: 25px;
  font-size: 2.7em;
  color: ${props => props.theme.textColor};
`

const Description = styled.p`
  margin: 0 10vw;
  font-size: 1.2em;
  color: ${props => props.theme.textColor};
`


function Heading() {
    return (
        <HeadingContent>
            <Title>Projects</Title>
            <Description>A collection of projects that I've worked on.</Description>
        </HeadingContent>
    )
}

export default Heading
