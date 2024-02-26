import { styled } from "styled-components";
import ProjectInfo from "./ProjectInfo";

const ProjectsStyle = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;
  .container {
    h2 {
      margin-bottom: 60px;
    }
  }
`;

const Projects = () => {
  return (
    <>
      <ProjectsStyle>
        <div className="container">
          <h2>Projects</h2>

          <div className="projectWrapper">
            <ProjectInfo />
          </div>
        </div>
      </ProjectsStyle>
    </>
  );
};
export default Projects;
