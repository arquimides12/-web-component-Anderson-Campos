class UserProfileCard extends HTMLElement {
  constructor() {
    super();

    // Crear shadow DOM
    this.attachShadow({ mode: 'open' });

    // Template con contenido y estilos encapsulados
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 300px;
          font-family: Arial, sans-serif;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          background-color: white;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
        h2 {
          margin: 10px 0 5px;
          font-size: 1.4em;
          color: #333;
        }
        h3 {
          margin: 0 0 10px;
          font-weight: normal;
          color: #666;
          font-style: italic;
        }
        p {
          color: #555;
        }
        ::slotted(span) {
          color: #007BFF;
          font-weight: bold;
        }
      </style>
      <img src="${this.getAttribute('img') || 'img/imagen1.png'}" alt="Profile picture" />
      <h2>${this.getAttribute('name') || 'Nombre Apellido'}</h2>
      <h3>${this.getAttribute('job') || 'Ocupación'}</h3>
      <p><slot>Breve descripción del usuario aquí...</slot></p>
    `;
  }
}

customElements.define('user-profile-card', UserProfileCard);
