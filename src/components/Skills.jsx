import { styled } from "styled-components";

const SkillsStyle = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;
  background-color: #fafafa;
`;

const Skills = () => {
  return (
    <>
      <SkillsStyle>
        <div className="container">
          <h3>Skills</h3>
          <div className="wrapper">
            <div className="info frontend"></div>
            <div className="info backend"></div>
            <div className="info collab"></div>
            <div className="info Deploy"></div>
          </div>
        </div>
      </SkillsStyle>
    </>
  );
};
export default Skills;
