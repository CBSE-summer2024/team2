// src/components/SignInForm.js
import { LitElement, html, css } from 'lit';

class SignInForm extends LitElement {
  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
    }
    label, input {
      margin-bottom: 10px;
    }
    button {
      padding: 8px;
      background-color: #6200ea;
      color: white;
      border: none;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Sign In</button>
      </form>
    `;
  }
}

customElements.define('sign-in-form', SignInForm);
