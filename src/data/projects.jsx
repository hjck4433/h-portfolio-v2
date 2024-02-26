import movieverse1 from "../images/movieverse_01.jpg";
import movieverse2 from "../images/movieverse_02.jpg";
import movieverse3 from "../images/movieverse_03.jpg";
import movieverse4 from "../images/movieverse_04.jpg";
import movieverse5 from "../images/movieverse_05.jpg";
import movieverseQr from "../images/movieVerse_qr.jpg";

const projectList = [
  {
    name: "RepairRun",
    duration: "2023.10.20 ~ 2023.11.15 (5人)",
    images: [
      `${movieverse1}`,
      `${movieverse2}`,
      `${movieverse3}`,
      `${movieverse4}`,
      `${movieverse5}`,
    ],
    text:
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>" +
      "<p>리페어런 이란 어쩌고 <b>강조</b>했습니다</p>",
    function:
      "빠르게 수선물을 수거하고 처리해주는 검증된 파트너를 매칭해주는 수선 매칭 서비스",
    url: "-",
    skills: ["HTML", "SCSS", "React", "Spring Boot-JDBC", "Oracle"],
    notion:
      "https://hjck4433.notion.site/Project-RepairRun-ae275a8ce16047799facf9aea002175a?pvs=74",
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
      "Expo/",
    ],
    notion:
      "https://hjck4433.notion.site/Project-RepairRun-ae275a8ce16047799facf9aea002175a?pvs=74",
  },
];
export default projectList;
