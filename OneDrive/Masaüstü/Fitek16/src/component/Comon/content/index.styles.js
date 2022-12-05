import styled from "styled-components";
import resim from "../../../assets/img/resim.jpg";

export const StyledContainer = styled.div`
  position: fixed;
  padding: 0px;
  margin: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  .container {
    min-width: 100%;
    height: 100vh;
    border: 1px solid #0dcaf0;
  }

  .header {
    border-bottom: 1px solid #ccc;
    background-color: #0dcaf0;
  }
  .left {
    height: 90%;
    float: left;
    width: 20%;
    background-color: #afeeee;
  }
  .right {
    background-image: url(${resim});
    white-space: nowrap;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    background-color: #acf;
  }

  .footer {
    height: 20%;
  }

  .clear {
    clear: both;
  }
`;
