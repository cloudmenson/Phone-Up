import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #0e0e0e;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  width: 60px;
  height: 60px;
  animation: rotate 6s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
