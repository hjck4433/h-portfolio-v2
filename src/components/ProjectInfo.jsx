import { styled } from "styled-components";
const InfoStyle = styled.div`
  width: 100%;
  box-shadow: 1px 2px 3px 3px #eee;
  padding: 50px;
  border-radius: 10px;
  .name {
    margin-bottom: 30px;
    h3 {
      font-size: 1.6em;
      font-weight: 600;
      margin-bottom: 8px;
    }
    p {
      color: #777;
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    .slideArea {
      width: 45%;
      min-height: 500px;
      background-color: pink;
    }
    .desc {
      width: 50%;
      outline: 1px solid pink;
      .txt {
        min-height: 340px;
        background-color: aliceblue;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
      }
      .box {
        .info {
          display: flex;
          margin-bottom: 20px;
          .title {
            width: 20%;
            position: relative;
            margin-right: 10px;
            &::after {
              display: block;
              content: "";
              height: 100%;
              width: 3px;
              position: absolute;
              top: 0;
              right: 0;
              background-color: #ccc;
            }
          }
          .content {
            width: 80%;
          }
          &.skills {
            .skillList {
              li {
                display: inline-block;
                line-height: 1.4;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
    @media only screen and (max-width: 980px) {
      flex-direction: column;
      .slideArea {
        width: 100%;
      }
      .desc {
        width: 100%;
      }
    }
  }
`;

const ProjectInfo = () => {
  return (
    <>
      <InfoStyle>
        <div className="name">
          <h3 className="projectName">RepairRun</h3>
          <p>2023.11.1 ~ 2023.12.1 (5人)</p>
        </div>

        <div className="wrapper">
          <div className="slideArea"></div>
          <div className="desc">
            <div className="txt"></div>
            <div className="box">
              <div className="info function">
                <p className="title">주요 기능</p>
                <p className="content">내용내용</p>
              </div>
              <div className="info link">
                <p className="title">URL</p>
                <div className="links content">
                  <a href="javascript:(0)">링크링크</a>
                </div>
              </div>
              <div className="info skills">
                <p className="title">주요 기술</p>
                <ul className="skillList content">
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                  <li>기술</li>
                </ul>
              </div>
              <div className="info notion">
                <p className="title">Notion</p>
                <div className="notion">
                  <a href="javascript:(0)">링크링크</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InfoStyle>
    </>
  );
};
export default ProjectInfo;
