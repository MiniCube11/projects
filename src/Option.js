import React from 'react'
import styled from 'styled-components'

const Name = styled.p`
    color: ${props => props.active ? props.theme.activeColor : props.theme.textColor};
`

const OptionContainer = styled.div`
    padding: 6px 15px;
    font-size: 1.1em;
    cursor: pointer;
    
    &:hover > * {
        color: ${props => props.theme.hoverColor};
    }
`

function Option({ name, sortBy, setSortBy }) {
    return (
        <OptionContainer onClick={() => setSortBy(name)}>
            <Name active={sortBy === name}>{name}</Name>
        </OptionContainer>
    )
}

export default Option
