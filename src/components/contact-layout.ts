import { html } from "lit";
export const contact = html`
  <div class="my41">
    <h3>Contact</h3>
    <div class="my42">
      <div class="my43">
        <div class="my44">
          <p>Country :</p>
          <p>Canada</p>
        </div>
        <div class="my44">
          <p>City :</p>
          <p>Toronto</p>
        </div>
        <div class="my44">
          <p>Street :</p>
          <p>20 Dellbank Rd</p>
        </div>
      </div>
      <div class="my43">
        <div class="my44">
          <p>Email :</p>
          <p>mohammadmahdimoodi2005@gmail.com</p>
        </div>
        <div class="my44">
          <p>Telegram :</p>
          <p>@mohammadmahdi_moodi</p>
        </div>
        <div class="my44">
          <p>Instagram :</p>
          <p>@mohammadmahdi_moodi</p>
        </div>
      </div>
      <div class="my43">
        <div class="my44">
          <p>Support service :</p>
          <p>+98 9156608546</p>
        </div>
        <div class="my44">
          <p>Office :</p>
          <p>+98 9156608546</p>
        </div>
        <div class="my44">
          <p>Street :</p>
          <p>+98 9156608546</p>
        </div>
      </div>
    </div>
    <h3>Get in touch</h3>
    <div class="my45">
      <form method="POST">
        <label>
          <div class="my46"><box-icon type="solid" name="user"></box-icon></div>
          <input type="text" name="name" placeholder="Name" required
        /></label>
        <label
          ><div class="my46"><box-icon name="mail-send"></box-icon></div>
          <input type="email" name="email" placeholder="Email" required
        /></label>
        <label
          ><div class="my46"><box-icon name="text"></box-icon></div>
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            cols="100"
            required
          ></textarea>
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
`;
