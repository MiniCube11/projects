import Project from './Project';
import { projects } from './projectsData';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Lato', sans-serif;
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 20px;
`

const Title = styled.h1`
  font-size: 2.5em;
`

const Description = styled.p`
  font-size: 1.2em;
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
  return (
    <AppContainer>
      <Title>Projects</Title>
      <Description>A collection of projects that I've worked on.</Description>
      <ProjectsContainer>
        {sortProjects(projects, null).map((project) => 
          <Project project={project}/>
        )}
      </ProjectsContainer>
    </AppContainer>
  );
}

export default App;
