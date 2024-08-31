import { LitElement, html, css } from "lit";

export class CategoryList extends LitElement {
  static properties = {
    categories: { type: Array },
  };

  constructor() {
    super();
    this.categories = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchCategories();
  }

  async fetchCategories() {
    try {
      const response = await fetch("../../../data.json");
      const data = await response.json();
      this.categories = data.categories;
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  }

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      font-family: "Arial", sans-serif;
      background-color: #f4f4f9;
    }

    .category-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .category-item {
      margin: 10px 0;
      font-size: 1.2em;
      color: #333;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      transition: background-color 0.3s;
    }

    .category-item:hover {
      background-color: #eaeaea;
    }
  `;

  render() {
    return html`
      <ul class="category-list">
        ${this.categories.map(
          (category) => html`<li class="category-item">${category.name}</li>`
        )}
      </ul>
    `;
  }
}

if (!window.customElements.get("category-list")) {
  window.customElements.define("category-list", CategoryList);
}
