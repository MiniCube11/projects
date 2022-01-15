import { useState } from 'react';
import Option from './Option';
import Project from './Project';
import { projects } from './projectsData';
import Footer from './Footer';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { LightTheme, DarkTheme } from './Themes'

import { ReactComponent as LightSvg } from './icons/light.svg' 
import { ReactComponent as DarkSvg } from './icons/dark.svg'
import { ReactComponent as SortSvg } from './icons/sort.svg'
import { ReactComponent as UpSvg } from './icons/up.svg'
import { ReactComponent as DownSvg } from './icons/down.svg'


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

const IconButton = styled.button`
  position: absolute;
  top: 20px;
  right: ${props => props.right}px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const SortIcon = styled(SortSvg)`
  stroke: ${props => props.theme.textColor};
`

const SortOptions = styled.div`
  position: absolute;  
  top: 70px;
  right: 20px;
  padding: 10px 20px;
  padding-left: 5px;
  border: ${props => props.theme.cardBorder};
  border-radius: 5px;
  background-color: ${props => props.theme.cardBackground};
`

const UpIcon = styled(UpSvg)`
  cursor: pointer;
  margin-top: 5px;
  margin-left: 11px;
  padding-left: 2px;
  stroke: ${props => props.active ? props.theme.activeColor : props.theme.textColor};

  &:hover {
    stroke: ${props => props.theme.hoverColor};
  }

`

const DownIcon = styled(DownSvg)`
  cursor: pointer;
  margin-top: 5px;
  padding-left: 2px;
  stroke: ${props => props.active ? props.theme.activeColor : props.theme.textColor};

  &:hover {
    stroke: ${props => props.theme.hoverColor};
  }

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

function sortByName(projects, descending) {
  projects.sort((a, b) => {
    let res = 0;
    if (a.name > b.name) res = 1;
    if (b.name > a.name) res = -1;
    if (descending) return -res;
    return res;
  })
  return projects;
}

function sortByDate(projects, descending) {
  projects.sort((a, b) => {
    let res = a.year - b.year;
    if (res === 0) res = a.month - b.month;
    if (descending) return -res;
    return res;
  })
  return projects;
}

function sortByComplexity(projects, descending) {
  projects.sort((a, b) => {
    let res = a.id - b.id;
    if (descending) return -res;
    return res;
  })
  return projects;
}

function App() {
  const [sortBy, setSortBy] = useState("Complexity");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortDescending, setSortDescending] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(x => !x)
  }

  const toggleSortOpen = () => {
    setSortOpen(x => !x)
  }

  const setSort = (sortBy) => {
    setSortBy(sortBy);
    setSortDescending(true);
  }

  const sortProjects = (projects) => {
    if (sortBy === "Name") return sortByName(projects, sortDescending);
    else if (sortBy === "Date") return sortByDate(projects, sortDescending);
    else if (sortBy === "Complexity") return sortByComplexity(projects, sortDescending);
  }

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <HeadingContent>
        <Title>Projects</Title>
        <Description>A collection of projects that I've worked on.</Description>
      </HeadingContent>
      <IconButton onClick={toggleDarkMode} right={20}>
        {darkMode ?
          <LightSvg stroke="#D5D5D5" /> : <DarkSvg stroke="black" />
        }
      </IconButton>
      <IconButton onClick={toggleSortOpen} right={70}>
        <SortIcon />
      </IconButton>
      {sortOpen &&
        <SortOptions>
          <Option name={"Name"} sortBy={sortBy} setSortBy={setSort} />
          <Option name={"Date"} sortBy={sortBy} setSortBy={setSort} />
          <Option name={"Complexity"} sortBy={sortBy} setSortBy={setSort} />
          <UpIcon onClick={() => setSortDescending(false)} active={!sortDescending} />
          <DownIcon onClick={() => setSortDescending(true)} active={sortDescending} />
        </SortOptions>
      }
      <ProjectsContainer dark={darkMode}>
        {sortProjects(projects).map((project) => 
          <Project project={project} key={project.name}/>
        )}
      </ProjectsContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
