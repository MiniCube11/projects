import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    
`

const Copyright = styled.p`
    margin-left: 10vw;
    margin-bottom: 60px;
`

const WebsiteLink = styled.a`
    margin: 0 4px;
    color: black;
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.hoverColor};
    }
`

const SourceLink = styled.a`
    margin: 0 4px;
    color: #b3b3b3;
    text-decoration: none;

    &:hover {
        color: grey;
    }
`

function Footer() {
    return (
        <FooterContainer>
            <Copyright>© 2022
                <WebsiteLink href="https://minicube11.github.io/">Ching Lam Lau</WebsiteLink> /
                <SourceLink href="#">Source Code</SourceLink>
            </Copyright>
        </FooterContainer>
    )
}

export default Footer
