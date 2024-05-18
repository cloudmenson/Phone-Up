import styled from "styled-components";

export const StylizedContainer = styled.div`
  .leaflet-container {
    width: 1600px;
    height: 40vh;
    background: #ffffff;
  }

  @media (max-width: 1660px) {
    .leaflet-container {
      width: 1300px;
    }
  }

  @media (max-width: 1440px) {
    .leaflet-container {
      width: 1000px;
    }
  }

  @media (max-width: 1100px) {
    .leaflet-container {
      width: 800px;
    }
  }

  @media (max-width: 991px) {
    .leaflet-container {
      width: 700px;
    }
  }

  @media (max-width: 768px) {
    .leaflet-container {
      width: 600px;
      height: 30vh;
    }
  }

  @media (max-width: 668px) {
    .leaflet-container {
      width: 500px;
    }
  }

  @media (max-width: 538px) {
    .leaflet-container {
      width: 360px;
    }
  }

  @media (max-width: 376px) {
    .leaflet-container {
      width: 350px;
    }
  }
`;
