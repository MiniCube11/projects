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

function FilterOption({ name, filters, toggleFilter }) {
    return (
        <OptionContainer onClick={() => toggleFilter(name)}>
            <Name active={filters.includes(name)}>{name}</Name>
        </OptionContainer>
    )
}

export default FilterOption
