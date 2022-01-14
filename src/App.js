import { useState } from 'react';
import Project from './Project';
import { projects } from './projectsData';
import Footer from './Footer';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { LightTheme, DarkTheme } from './Themes'

import { ReactComponent as LightSvg } from './icons/light.svg' 
import { ReactComponent as DarkSvg } from './icons/dark.svg' 

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, h1, h2, p, div, a {
    transition: all 0.2s ease;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: ${props => props.theme.background};
  }
`

const HeadingContent = styled.div`
  margin: 125px 0;
`

const DarkModeButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

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

const Title = styled.h1`
  margin-left: 10vw;
  margin-bottom: 25px;
  font-size: 2.7em;
  color: ${props => props.theme.textColor};
`

const Description = styled.p`
  margin-left: 10vw;
  font-size: 1.2em;
  color: ${props => props.theme.textColor};
`

function sortProjects(projects, sortBy) {
  if (sortBy === "date") {
    projects.sort((a, b) => {
      let res = b.year - a.year;
      if (res === 0) {
        res = b.month - a.month;
      }
      return res;
    });
  }
  return projects;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(x => !x)
  }

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <HeadingContent>
        <Title>Projects</Title>
        <Description>A collection of projects that I've worked on.</Description>
      </HeadingContent>
      <DarkModeButton onClick={toggleDarkMode}>
        {darkMode ?
          <DarkSvg stroke="#D5D5D5" /> : <LightSvg stroke="black" />
        }
      </DarkModeButton>
      <ProjectsContainer dark={darkMode}>
        {sortProjects(projects, null).map((project) => 
          <Project project={project} key={project.name}/>
        )}
      </ProjectsContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
