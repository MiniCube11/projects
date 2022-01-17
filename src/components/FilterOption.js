import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProjectsContext } from './App'

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

function FilterOption({ name }) {
    const { state, dispatch } = useContext(ProjectsContext)
    return (
        <OptionContainer onClick={() => dispatch({ type: "toggleFilter", payload: name })}>
            <Name active={state.filters.includes(name)}>{name}</Name>
        </OptionContainer>
    )
}

export default FilterOption
