import { LitElement, css, html } from 'lit';
import data from '../../api/data.json';

export class SignIn extends LitElement {
  static properties = {
    email: { type: String },
    password: { type: String },
    user: { type: Object }
  };

  static styles = css`
    .signin-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f9f9f9;
    }
    input {
      margin: 10px 0;
      padding: 10px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 300px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 4px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.user = null; // Initialize user property
  }

  render() {
    return html`
      <div class="signin-container">
        <h2>Sign In</h2>
        <input 
          type="email" 
          placeholder="Email" 
          .value=${this.email} 
          @input=${(e) => this.email = e.target.value}
        />
        <input 
          type="password" 
          placeholder="Password" 
          .value=${this.password} 
          @input=${(e) => this.password = e.target.value}
        />
        <button @click=${this._handleSignin}>Sign In</button>
        ${this.user ? html`<div>Hi, ${this.user.email}</div>` : ''}
      </div>
    `;
  }

  _handleSignin() {
    // Access the users array from the data object
    const users = data.users;
    
    const user = users.find(user => user.email === this.email && user.password === this.password);
    if (user) {
      this.user = user; 
      console.log('Sign in successful!', user);
    } else {
      console.log('Invalid email or password.');
      alert('Invalid email or password.');
    }
  }
}

if (!window.customElements.get('sign-in')) {
  window.customElements.define('sign-in', SignIn);
}
