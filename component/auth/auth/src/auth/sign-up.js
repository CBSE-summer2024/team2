import { html, css, LitElement } from "lit"; // Import `css` from `lit`
import user from '../api/faker.json'; // Assuming you have a valid use for this import

export class SignUp extends LitElement {
  static properties = {
    email: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String }, // Fixed typo
  };

  static styles = css`
    .container {
      width: 300px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      background-color: #f9f9f9;
    }

    .card-header {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 5px;
      font-weight: 600;
      color: #333;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="tel"] {
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus,
    input[type="tel"]:focus {
      outline: none;
      border-color: #66afe9;
      box-shadow: 0px 0px 5px rgba(102, 175, 233, 0.5);
    }

    button[type="submit"] {
      padding: 10px;
      font-size: 16px;
      font-weight: bold;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button[type="submit"]:hover {
      background-color: #45a049;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="card-header">
          Sign-Up Form
        </div>
        <form @submit="${this.handleSubmit}">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            .value="${this.firstName || ''}"
            @input="${this.updateValue}"
          />

          <label for="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            .value="${this.lastName || ''}"
            @input="${this.updateValue}"
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            .value="${this.email || ''}"
            @input="${this.updateValue}"
          />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            .value="${this.password || ''}"
            @input="${this.updateValue}"
          />

          <label for="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            .value="${this.phoneNumber || ''}"
            @input="${this.updateValue}"
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    `;
  }

  updateValue(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Submitted', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
    });
  }
}

window.customElements.define('sign-up', SignUp);
