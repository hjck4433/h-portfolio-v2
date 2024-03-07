import cinepic1 from "../images/cinepic_01.jpg";
import cinepic2 from "../images/cinepic_02.jpg";
import cinepic3 from "../images/cinepic_03.jpg";
import cinepic4 from "../images/cinepic_04.jpg";
import cinepic5 from "../images/cinepic_05.jpg";
import cinepic6 from "../images/cinepic_06.jpg";
import cinepic7 from "../images/cinepic_07.jpg";
import cinepic8 from "../images/cinepic_08.jpg";
import cinepic9 from "../images/cinepic_09.jpg";
import cinepic10 from "../images/cinepic_10.jpg";

import movieverse1 from "../images/movieverse_01.jpg";
import movieverse2 from "../images/movieverse_02.jpg";
import movieverse3 from "../images/movieverse_03.jpg";
import movieverse4 from "../images/movieverse_04.jpg";
import movieverse5 from "../images/movieverse_05.jpg";
import movieverseQr from "../images/movieVerse_qr.jpg";

import repairrun1 from "../images/repairrun_01.jpg";
import repairrun2 from "../images/repairrun_02.jpg";
import repairrun3 from "../images/repairrun_03.jpg";
import repairrun4 from "../images/repairrun_04.jpg";
import repairrun5 from "../images/repairrun_05.jpg";

import blizzard1 from "../images/blizzard_01.jpg";
import blizzard2 from "../images/blizzard_02.jpg";
import blizzard3 from "../images/blizzard_03.jpg";

const projectList = [
  {
    name: "Cinepic",
    duration: "2024.01.15 ~ 2024.02.21 (6人)",
    images: [
      `${cinepic1}`,
      `${cinepic2}`,
      `${cinepic3}`,
      `${cinepic4}`,
      `${cinepic5}`,
      `${cinepic6}`,
      `${cinepic7}`,
      `${cinepic8}`,
      `${cinepic9}`,
      `${cinepic10}`,
    ],
    text:
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>",
    function:
      "사용자 맞춤 영화 추천/ 독립영화상영극장 정보 제공/ 700여가지의 다양한 영화 정보 제공/ 영화를 좋아하는 사람들의 소통 공간을 제공해주는 서비스 ",
    url: "https://cinepic2024.site",
    skills: [
      "HTML/",
      "SCSS/",
      "React/",
      "Spring Boot-JPA/",
      "MySQL/",
      "Flask/",
      "scikit-learn/",
      "Elasticsearch/",
      "AWS",
    ],
    notion:
      "https://hjck4433.notion.site/Project-Cinepic-0980a88679b649f686ae7a6343d87214",
  },
  {
    name: "MovieVerse",
    duration: "2023.11.20 ~ 2023.01.03 (5人)",
    images: [
      `${movieverse1}`,
      `${movieverse2}`,
      `${movieverse3}`,
      `${movieverse4}`,
      `${movieverse5}`,
    ],
    text: "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>",
    function:
      "최신 영화 및 현재상영작 / OTT 별 인기 영화 정보를 제공하고 영화를 좋아하는 사람들의 소통 공간을 제공해주는 서비스",
    url: "https://movieverse2024.site",
    qr: `${movieverseQr}`,
    skills: [
      "HTML/",
      "SCSS/",
      "React/",
      "Spring Boot-JPA/",
      "MySQL/",
      "Flask/",
      "bs4/",
      "AWS/",
      "Expo",
    ],
    notion:
      "https://hjck4433.notion.site/Project-RepairRun-ae275a8ce16047799facf9aea002175a?pvs=74",
  },
  {
    name: "RepairRun",
    duration: "2023.10.20 ~ 2023.11.15 (5人)",
    images: [
      `${repairrun1}`,
      `${repairrun2}`,
      `${repairrun3}`,
      `${repairrun4}`,
      `${repairrun5}`,
    ],
    text:
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>",
    function:
      "빠르게 수선물을 수거하고 처리해주는 검증된 파트너를 매칭해주는 수선 매칭 서비스",
    url: "-",
    skills: ["HTML/", "SCSS/", "React/", "Spring Boot-JDBC/", "Oracle"],
    notion:
      "https://hjck4433.notion.site/Project-RepairRun-ae275a8ce16047799facf9aea002175a?pvs=74",
  },
  {
    name: "Blizzard Main / Login (Copy site)",
    duration: "2023.10.20 ~ 2023.11.15 (1人)",
    images: [`${blizzard1}`, `${blizzard2}`, `${blizzard3}`],
    text:
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>",
    function: "디아블로 메인페이지 및 로그인 페이지 카피",
    url: "https://imaginative-dusk-c76a08.netlify.app/",
    skills: ["HTML/", "SCSS/", "Javascript"],
    notion:
      "https://hjck4433.notion.site/Blizzard-copysite-9476e1d78a4a4703badbd0d0ffbdc205",
  },
];
export default projectList;
