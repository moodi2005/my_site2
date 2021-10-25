import { css } from "lit";
export const layout_style = css`
/* Set Scroll Bar */
::-webkit-scrollbar {
  width: 5px;
  border-radius:15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
/*  */
  #active {
    color: #fff;
  }
  h1,h2,h3,h4,h5,h6{
    color:#fff;
  }
  .my1 {
    width: 98%;
    min-width: 80em;
    height: 95%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .my2 {
    background-color: #20202a;
    width: 20%;
    max-width: 20em;
    height: 100%;
    position: relative;
  }
  .my3 {
    background-image: url(image/bg.jpg);
    background-position: top;
    background-repeat: no-repeat;
    background-color: rgba(30, 30, 40, 0.926);
    background-size: 100% 60%;
    background-attachment: fixed;
    width: 75%;
    height: 100%;
    position: relative;
  }
  .my4 {
    width: 5%;
    height: 100%;
    background-color: #20202a;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    transition: 300ms linear width;
  }
  .my5 {
    width: 100%;
    height: 100%;
    min-width: 52em;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(30, 30, 40, 0.926);
    overflow-x: hidden;
    overflow-y:auto;
  }
  .my6 {
    width: 100%;
    height: 15em;
    background: linear-gradient(
      159deg,
      rgba(37, 37, 50, 0.98) 0%,
      rgba(35, 35, 45, 0.98) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .my6 > img {
    width: 7em;
    height: 7em;
    border-radius: 50%;
    box-shadow: 0 0 5px 0px white;
  }
  .my6 > h2 {
    font-size: 90%;
    margin-top: 1em;
    color: white;
    text-align: center;
    transition: color 300ms linear;
  }
  .my6 > p {
    margin-top: 0.2em;
    font-size: 10px;
    color: rgb(121, 121, 121);
    text-align: center;
    transition: color 300ms linear;
    line-height: 1.5;
  }
  .my6 > p:hover,
  .my6 > h2:hover {
    color: #ffc107;
  }
  .my8 {
    width: 100%;
    height: 3em;
    background: linear-gradient(
      159deg,
      rgba(37, 37, 50, 0.98) 0%,
      rgba(35, 35, 45, 0.98) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .my4 > h5 {
    color: dimgray;
    width: 100%;
    transform: rotate(90deg);
    font-size: 15px;
    text-align: center;
    margin: 2em 0;
    cursor: context-menu;
  }
  .my10 {
    width: 100%;
    height: 8em;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #242430;
  }
  .my10 > button {
    background-color: #1e1e28;
    border: none;
    width: 2.2em;
    height: 2.2em;
    border-radius: 50%;
    color: #8c8c8e;
    font-size: 9px;
    padding: 0.2em;
    margin: 0.5em;
    cursor: pointer;
    text-align: center;
  }
  .my10 > button:hover {
    color: white;
  }
  .my11 {
    width: 100%;
    height: 4em;
    background-color: #242430;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my11 > box-icon {
    fill: #a5a5a5;
    transition: 300ms linear fill;
  }
  .my11 > box-icon:hover {
    fill: white;
  }
  .my9 {
    width: 100%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .my9 > a {
    text-decoration: none;
    color: #a5a5a5;
    transition: 200ms linear color;
    margin: 1em;
    cursor: pointer;
  }
  .my9 > a:hover {
    color: white;
  }
  .my8 > a > box-icon {
    fill: #8c8c8e;
    transition: 300ms linear fill;
  }
  .my8 > a > box-icon:hover {
    fill: #ffc107;
  }
  .menu_open {
    width: 20%;
  }
  .menu_open > h5 {
    display: none;
  }
  .menu_open2 {
    display: flex;
  }
  .my21 {
    width: 95%;
    height: 20em;
    background-color: #ffffff2a;
    margin: 2em auto 0 auto;
    position: relative;
  }
  .my21 > img {
    max-width: 30em;
    height: 19em;
    position: absolute;
    bottom: 0;
    right: 1em;
  }
`;
