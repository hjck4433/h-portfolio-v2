import { styled } from "styled-components";
import Modal from "./Modal";
import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const InfoStyle = styled.div`
  width: 100%;
  box-shadow: 1px 2px 3px 3px #eee;
  padding: 50px;
  border-radius: 10px;
  margin-bottom: 80px;
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
      .swiper {
        .swiper-wrapper {
          .slide {
            .imgBox {
              position: relative;
              width: 100%;
              padding-bottom: 100%;
            }
          }
        }
      }
    }
    .desc {
      width: 50%;
      .txt {
        min-height: 340px;
        /* background-color: aliceblue; */
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        p {
          line-height: 1.6;
          margin-bottom: 10px;
          b {
            font-weight: 600;
          }
        }
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
            line-height: 1.4;
            a,
            .qr {
              color: royalblue;
              font-weight: 600;
              &:hover {
                color: orange;
              }
            }
            .qr {
              cursor: pointer;
              margin-top: 5px;
            }
          }
          &.skills {
            .skillList {
              li {
                display: inline-block;
                line-height: 1.6;
                margin-left: 5px;
              }
            }
          }
          &.git {
            li {
              line-height: 1.6;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 980px) {
      flex-direction: column;
      .slideArea {
        width: 100%;
        margin-bottom: 30px;
      }
      .desc {
        width: 100%;
      }
    }
  }
`;

const ImgComp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$imgUrl});
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
`;

const ProjectInfo = ({ project }) => {
  const htmlContent = marked(project.text);
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  const createMarkup = () => {
    return { __html: sanitizedHtml };
  };

  // modal
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const [swiperKey, setSwiperKey] = useState("swiperKey");
  const [autoplay, setAutoplay] = useState(false);

  const handleEnterViewport = () => {
    if (!autoplay) {
      setSwiperKey(`swiperKey-${Date.now()}`);
      setAutoplay(true);
    }
  };

  const varients = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1.2 },
    },
  };

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={handleEnterViewport}
        viewport={{ once: true, amount: 0.5 }}
        variants={varients}
      >
        <InfoStyle>
          <div className="name">
            <h3 className="projectName">{project.name}</h3>
            <p>{project.duration}</p>
          </div>

          <div className="wrapper">
            <div className="slideArea">
              <Swiper
                key={swiperKey}
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={true}
                onAutoplay={{ delay: 3000 }}
              >
                {project.images.map((url, index) => (
                  <SwiperSlide className="slide" key={index}>
                    <div className="imgBox">
                      <ImgComp $imgUrl={url} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="desc">
              <div
                className="txt"
                dangerouslySetInnerHTML={createMarkup()}
              ></div>
              <div className="box">
                <div className="info function">
                  <p className="title">주요 기능</p>
                  <p className="content">{project.function}</p>
                </div>
                {project.url !== "-" && (
                  <div className="info link">
                    <p className="title">URL</p>
                    <div className="links content">
                      <a href={project.url} target="_blank">
                        {project.url}
                      </a>
                      {project.qr && (
                        <div
                          className="qr"
                          onClick={() => {
                            setModalOpen(true);
                          }}
                        >
                          PlayStore
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="info skills">
                  <p className="title">주요 기술</p>
                  <ul className="skillList content">
                    {project.skills.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="info git">
                  <p className="title">GitHub</p>
                  <ul className="github content">
                    {project.github.map((git, index) => {
                      const gitName = Object.keys(git)[0];
                      const gitUrl = git[gitName];
                      return (
                        <li key={index}>
                          <a href={gitUrl} target="_blank">
                            {gitName}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="info notion">
                  <p className="title">Notion</p>
                  <div className="notion content">
                    <a href={project.notion} target="blank_">
                      프로젝트 상세
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InfoStyle>
        <Modal open={openModal} close={closeModal} children={project.qr} />
      </motion.div>
    </>
  );
};
export default ProjectInfo;
