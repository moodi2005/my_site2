import { css } from "lit";
export const contact_style = css`
  .my41 {
    width: 100%;
    padding: 1em 0;
  }
  .my41 > h3 {
    text-align: center;
  }
  .my42 {
    width: 100%;
    height: 12em;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .my43 {
    width: 32%;
    height: 10em;
    background-color: #2c2c38;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .my44 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    overflow: hidden;
    box-sizing: border-box;
  }
  .my44 > p:nth-child(1) {
    color: #fff;
    font-size: 13px;
  }
  .my44 > p:nth-child(2) {
    color: #727276;
    font-size: 13px;
    max-width: 80%;
    text-align: end;
  }
  .my45 {
    width: 90%;
    height: 30em;
    margin: 2em auto;
    background-color: #2d2d3a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my45 > form {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .my45 > form > label > input,
  .my45 > form > label > textarea {
    width: 90%;
    border: 0;
    height: 4em;
    padding: 1em;
    box-sizing: border-box;
    background-color: #24242f;
    color: #fff;
    outline: none;
  }

  .my45 > form > label > textarea {
    height: 15em;
    resize: none;
  }
  .my45 > form > label {
    margin: 1em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .my46 {
    width: 5%;
    height: 100%;
    background-color: #24242f;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
  }
  .my46 > box-icon {
    fill: #fff;
  }

  .my45 > form > input[type="submit"] {
    width: 7em;
    height: 3em;
    border: 2px solid #e4c61e;
    background-color: transparent;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: 300ms linear background-color, 300ms linear border;
  }
  .my45 > form > input[type="submit"]:hover {
    border: 0;
    background-color: #e4c61e;
  }
`;
