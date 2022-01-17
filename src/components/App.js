import { useReducer, createContext } from 'react';
import { sortByName, sortByDate, sortByComplexity } from '../utils/sort'
import { projects } from '../data/projectsData';

import Nav from './Nav';
import Heading from './Heading';

import Project from './Project';
import Footer from './Footer';

import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from '../styles/Themes'
import { GlobalStyle } from '../styles/GlobalStyle'

const ProjectsContainer = styled.div`
  width: 80vw;
  margin-left: 9vw;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
  grid-gap: 20px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`

const initialState = {
  darkMode: false,
  sortBy: "Complexity",
  sortDescending: true,
  filters: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleDarkMode":
      return { ...state, darkMode: !state.darkMode }
    case "setSortBy":
      return { ...state, sortBy: action.payload, sortDescending: true }
    case "setSortDescending":
      return { ...state, sortDescending: action.payload }
    case "toggleFilter":
      if (state.filters.includes(action.payload)) {
        return { ...state, filters: state.filters.filter(value => action.payload !== value)}
      } else {
        return { ...state, filters: [...state.filters, action.payload] };
      }
    default:
      return state
  }
}

export const ProjectsContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sortProjects = (projects) => {
    if (state.sortBy === "Name") return sortByName(projects, state.sortDescending);
    else if (state.sortBy === "Date") return sortByDate(projects, state.sortDescending);
    else if (state.sortBy === "Complexity") return sortByComplexity(projects, state.sortDescending);
  }

  const filterProjects = (projects) => {
    const filteredProjects = [];
    if (state.filters.length === 0) return projects;
    for (const project of projects) {
      let include = false;
      for (const filter of state.filters) {
        if (project.tech.includes(filter)) {
          include = true;
        }
      }
      if (include) filteredProjects.push(project);
    }
    return filteredProjects;
  }

  return (
    <ProjectsContext.Provider value={{state, dispatch }}>
      <ThemeProvider theme={state.darkMode ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <Heading />
        <Nav />
        <ProjectsContainer dark={state.darkMode}>
          {filterProjects(sortProjects(projects)).map((project) => 
            <Project project={project} key={project.name}/>
          )}
        </ProjectsContainer>
        <Footer />
      </ThemeProvider>
    </ProjectsContext.Provider>
  );
}

export default App;
