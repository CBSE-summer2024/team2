import { html, css, LitElement } from 'lit';

export class SignUp extends LitElement {
  static properties = {
    email: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
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

  async handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
      };

      const response = await fetch('http://localhost:4000/api/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
        // Optionally, you could reset the form fields here:
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.phoneNumber = '';
      } else {
        console.error('Failed to add user:', result.error);
        alert(`Failed to add user: ${result.error}`);
      }
    } catch (error) {
      console.error('Error during form submission:', error.message);
      alert('An error occurred while adding the user. Please try again.');
    }
  }
}


if (!window.customElements.get('sign-up')) {
  window.customElements.define('sign-up', SignUp);
}
