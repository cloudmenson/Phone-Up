import styled from "styled-components";

export const Container = styled.div`
  .leaflet-container {
    width: 1350px;
    height: 50vh;
    background: #fafafa;
  }

  @media (max-width: 1140px) {
    .leaflet-container {
      width: 1000px;
      height: 50vh;
    }
  }

  @media (max-width: 991px) {
    .leaflet-container {
      width: 750px;
    }
  }

  @media (max-width: 760px) {
    .leaflet-container {
      width: 650px;
    }
  }

  @media (max-width: 660px) {
    .leaflet-container {
      width: 500px;
    }
  }

  @media (max-width: 530px) {
    .leaflet-container {
      width: 360px;
    }
  }
`;
