class FeatureCard extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        @import './feature-card.css';
      </style>
      <div class="feature-card">
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <h3><slot name="title"></slot></h3>
        <p><slot name="description"></slot></p>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('feature-card', FeatureCard);