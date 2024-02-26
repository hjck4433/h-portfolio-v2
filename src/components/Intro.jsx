import { styled } from "styled-components";
import introBg from "../images/bg_sky.jpg";

const IntroStyle = styled.section`
  background-image: url(${introBg});
  background-size: cover;
  background-attachment: fixed;
  padding-top: 80px;
  height: 1300px;
  .container {
  }
  @media only screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;

const Intro = () => {
  return (
    <>
      <IntroStyle>
        <div className="container">
          <div>Intro</div>
        </div>
      </IntroStyle>
    </>
  );
};
export default Intro;
