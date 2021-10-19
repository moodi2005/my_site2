import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const url = window.location.pathname;

@customElement("my-site")
class MySite extends LitElement {
  @property({ attribute: false })
  open: boolean = false;
  url = window.location.pathname;
  path = "Home";

  render() {
    const main = html`
      <div class="my21">
        <div class="my22">
          <h1>A galactic design with me</h1>
          <button>newest CV</button>
        </div>
        <img src="image/face-2.png" title="Profile" />
      </div>
      <div class="my23">
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
        <div class="my24">
          <p><span>10</span> Years Experience</p>
        </div>
      </div>
    `;
    const about = html`
      <div class="my31">
        <h1>About</h1>
        <img src="image/face-2.png" alt="Face" />
        <p>
          Full stack developer and Node.js Programming ,IT Manager at skivank ,
          Senior Programmer Tav Ertebat , I like the Visual Studio Code and the
          ECMAScript Family.
        </p>
      </div>
    `;
    return html`
      <div class="my1">
        <div class="my2">
          <div class="my6">
            <img src="image/face-1.jpg" alt="Face" />
            <h2>Mohammad Mahdi Moodi</h2>
            <p>
              Full Stack developer<br />
              Ui/UX Designer,
            </p>
          </div>
          <div class="my7"></div>
          <div class="my8">
            <a href="#"> <box-icon name="github" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="linkedin" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="youtube" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="behance" type="logo"></box-icon> </a>
            <a href="#"> <box-icon name="twitter" type="logo"></box-icon> </a>
          </div>
        </div>
        <div class="my3">
          <div class="my5">
            ${this.path === "Home" ? main : ""}
            ${this.path === "About" ? about : ""}
            ${this.path === "About" || "Home" ? "" : "404"}
          </div>
        </div>
        <div class="my4 ${this.open ? "menu_open" : ""}">
          <div class="my11">
            <box-icon
              name="${this.open ? "x" : "menu"}"
              @click=${() => {
                this.aaa();
              }}
            ></box-icon>
          </div>
          <h5>${this.path}</h5>
          <div class="my9 ${this.open ? "menu_open2" : ""}">
            <a
              class="animate__animated animate__backInRight"
              id="${this.path === "Home" ? "active" : ""}"
              @click=${() => {
                this.changPage("Home");
              }}
              >Home</a
            >
            <a
              class="animate__animated animate__backInRight "
              id="${this.path === "About" ? "active" : ""}"
              @click=${() => {
                this.changPage("About");
              }}
              >About</a
            >
            <a
              class="animate__animated animate__backInRight"
              id=" ${this.path === "Blog" ? "active" : ""}"
              @click=${() => {
                this.changPage("Blog");
              }}
              >Blog</a
            >
          </div>
          <div class="my10">
            <button>FE</button>
            <button>EN</button>
            <button>PE</button>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    #active {
      color: #fff;
    }
    .my1 {
      width: 98%;
      max-width: 87em;
      height: 95%;
      border-radius: 5px;
      display: flex;
      justify-content: flex-start;
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
      overflow: hidden;
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
    .my22 {
      width: 20em;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin: 2em;
    }
    .my22 > h1 {
      font-size: 40px;
      font-weight: 800;
      color: #fff;
    }
    .my22 > button {
      width: 10em;
      height: 3em;
      margin-top: 2em;
      background-color: #eda50a;
      border: none;
      cursor: pointer;
    }
    .my23 {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .my24 > p {
      color: #bfbfbf;
    }
    .my24 > p > span {
      color: #fceb00;
      font-size: 30px;
    }
    .my31 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .my31 > h1 {
      color: #fff;
      text-align: center;
    }
    .my31 > img {
      width: 10em;
      height: 10em;
      border-radius: 50%;
      margin: 2em auto;
      box-shadow: 0 0 5px 0 #fff;
    }
    .my31 > p {
      width: 80%;
      color: #8a8a8a;
      margin: 0 auto;
    }
  `;
  aaa() {
    this.open = !this.open;
  }
  changPage(name) {
    this.path = name;
    this.requestUpdate();
    this.aaa()
  }
}
