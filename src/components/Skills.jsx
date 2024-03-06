import { styled } from "styled-components";
import html5 from "../images/skills/fe_html5.png";
import css3 from "../images/skills/fe_css3.png";
import javascript from "../images/skills/fe_javascript.png";
import jquery from "../images/skills/fe_jquery.jpg";
import reactlogo from "../images/skills/fe_react.png";
import sass from "../images/skills/fe_sass.png";
import springboot from "../images/skills/be_springboot.jpg";
import jpa from "../images/skills/be_jpa.png";
import jdbc from "../images/skills/be_jdbc.png";
import oracle from "../images/skills/be_oracle.png";
import mysql from "../images/skills/be_mysql.png";
import flask from "../images/skills/be_flask.png";
import github from "../images/skills/collab_github.png";
import figma from "../images/skills/collab_figma.png";
import aws from "../images/skills/deploy_aws.png";
import netlify from "../images/skills/deploy_netlify.png";

const SkillsStyle = styled.section`
  padding-top: 60px;
  padding-bottom: 80px;
  /* background-color: #fafafa; */
  background-color: royalblue;
  .container {
    h2 {
      margin-bottom: 60px;
      color: #fff;
    }
    .wrapper {
      .wrap {
        display: flex;
        justify-content: space-between;
        .info {
          width: 48%;
          background-color: #fff;
          border-radius: 5px;
          padding: 20px;
          margin-bottom: 30px;
          h3 {
            font-size: 1.4em;
            font-weight: 600;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 3px solid royalblue;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li {
              height: 120px;
              width: 30%;
              border-radius: 5px;
              border: 2px solid #ddd;
              padding: 10px;
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              overflow: hidden;
              img {
                height: 100%;
                max-width: 100%;
                display: block;
                transition: all.8s;
                &:hover {
                  transform: scale(1.2);
                }
              }
            }
          }
        }
        @media only screen and (max-width: 980px) {
          &.top {
            flex-direction: column;
            .info {
              width: 100%;
            }
          }
        }
        &.bottom {
          .info {
            ul {
              li {
                width: 48%;
                img {
                  height: auto;
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Skills = () => {
  return (
    <>
      <SkillsStyle>
        <div className="container">
          <h2>Skills</h2>
          <div className="wrapper">
            <div className="wrap top">
              <div className="info frontend">
                <h3>Frontend</h3>
                <ul>
                  <li>
                    <img src={html5} alt="html5" />
                  </li>
                  <li>
                    <img src={css3} alt="css3" />
                  </li>
                  <li>
                    <img src={javascript} alt="javascript" />
                  </li>
                  <li>
                    <img src={jquery} alt="jquery" />
                  </li>
                  <li>
                    <img src={sass} alt="sass" />
                  </li>
                  <li>
                    <img src={reactlogo} alt="react" />
                  </li>
                </ul>
              </div>
              <div className="info backend">
                <h3>Backend</h3>
                <ul>
                  <li>
                    <img src={springboot} alt="springboot" />
                  </li>
                  <li>
                    <img src={jpa} alt="jpa" />
                  </li>
                  <li>
                    <img src={jdbc} alt="jdbc" />
                  </li>
                  <li>
                    <img src={oracle} alt="oracle" />
                  </li>
                  <li>
                    <img src={mysql} alt="mysql" />
                  </li>
                  <li>
                    <img src={flask} alt="flask" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrap bottom">
              <div className="info collab">
                <h3>Collaboration</h3>
                <ul>
                  <li>
                    <img src={github} alt="github" />
                  </li>
                  <li>
                    <img src={figma} alt="figma" />
                  </li>
                </ul>
              </div>
              <div className="info Deploy">
                <h3>Deploy</h3>
                <ul>
                  <li>
                    <img src={aws} alt="aws" />
                  </li>
                  <li>
                    <img src={netlify} alt="netlify" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SkillsStyle>
    </>
  );
};
export default Skills;
