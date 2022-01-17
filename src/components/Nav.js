import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ProjectsContext } from './App'

import SortOption from './SortOption';
import FilterOption from './FilterOption';

import { ReactComponent as LightSvg } from '../icons/light.svg' 
import { ReactComponent as DarkSvg } from '../icons/dark.svg'
import { ReactComponent as SortSvg } from '../icons/sort.svg'
import { ReactComponent as FilterSvg } from '../icons/filter.svg'
import { ReactComponent as UpSvg } from '../icons/up.svg'
import { ReactComponent as DownSvg } from '../icons/down.svg'

const IconButton = styled.button`
  position: absolute;
  top: 20px;
  right: ${props => props.right}px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const NavIcon = styled.svg`
  stroke: ${props => props.theme.textColor};
`

const Options = styled.div`
  position: absolute;  
  top: 70px;
  right: 20px;
  padding: 10px 20px;
  padding-left: 5px;
  border: ${props => props.theme.cardBorder};
  border-radius: 5px;
  background-color: ${props => props.theme.cardBackground};
`

const ArrowIcon = styled.svg`
  cursor: pointer;
  margin-top: 5px;
  margin-left: 11px;
  padding-left: 2px;
  stroke: ${props => props.active ? props.theme.activeColor : props.theme.textColor};

  &:hover {
    stroke: ${props => props.theme.hoverColor};
  }
`

function Nav() {
    const {state, dispatch} = useContext(ProjectsContext)
    const [sortOpen, setSortOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    const toggleSortOpen = () => {
        setSortOpen(x => !x)
        setFilterOpen(false)
    }

    const toggleFilterOpen = () => {
        setFilterOpen(x => !x)
        setSortOpen(false)
    }

    return (
        <>
            <IconButton onClick={toggleFilterOpen} right={120}>
                <NavIcon as={FilterSvg}/>
            </IconButton>
            <IconButton onClick={toggleSortOpen} right={70}>
                <NavIcon as={SortSvg}/>
            </IconButton>
            <IconButton onClick={() => dispatch({ type: "toggleDarkMode" })} right={20}>
                {state.darkMode ?
                    <LightSvg stroke="#D5D5D5" /> : <DarkSvg stroke="black" />
                }
            </IconButton>
            
            {sortOpen &&
                <Options>
                    <SortOption name={"Name"} />
                    <SortOption name={"Date"} />
                    <SortOption name={"Complexity"} />
                    <ArrowIcon as={UpSvg}
                        onClick={() => dispatch({ type: "setSortDescending", payload: false })}
                        active={!state.sortDescending} />
                    <ArrowIcon as={DownSvg} style={{ marginLeft: 0 }}
                        onClick={() => dispatch({ type: "setSortDescending", payload: true })}
                        active={state.sortDescending} />
                </Options>
            }
            {filterOpen &&
                <Options>
                    <FilterOption name={"Python"} />
                    <FilterOption name={"JavaScript"} />
                    <FilterOption name={"HTML+CSS"} />
                    <FilterOption name={"Scratch"} />
                </Options>
            }
        </>
    )
}

export default Nav
