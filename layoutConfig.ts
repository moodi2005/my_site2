import { LitElement, html, css } from "lit";
import { customElement, property ,state} from "lit/decorators.js";

// Import Components
import { main } from "./Pages/main-layout";
import { about } from "./Pages/about-layout";
import { contact } from "./Pages/contact-layout";

// Import Styles
import { layout_style } from "./Styles/layout-style";
import { main_style } from "./Styles/main-style";
import { about_style } from "./Styles/about-style";
import { contact_style } from "./Styles/contact-style";

// Get URL PAge
const url = window.location.pathname;

// Set Property
@customElement("my-site")
class MySite extends LitElement {
  @property({ attribute: false })
  open: boolean = false;
  path = "Home";
  url = window.location.pathname;
  
  // Render Page
  render() {
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
            <!-- Set Components Page -->
            ${this.path === "Home" ? main : ""}
            ${this.path === "About" ? about : ""}
            ${this.path === "contact" ? contact : ""}
          </div>
        </div>
        <!-- Menu -->
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
              id=" ${this.path === "contact" ? "active" : ""}"
              @click=${() => {
                this.changPage("contact");
              }}
              >Contact</a
            >
          </div>
          <div class="my10">
            <!-- Languages -->
            <button>FE</button>
            <button>EN</button>
            <button>PE</button>
          </div>
        </div>
      </div>
    `;
  }
  // Styls Page
  static styles = [
    layout_style,
    main_style,
    layout_style,
    about_style,
    contact_style,
  ];
  // Functions
  aaa() {
    this.open = !this.open;
  }
  changPage(name) {
    this.path = name;
    this.requestUpdate();
    this.aaa();
  }
}
