class UserProfileCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 320px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          border-radius: 15px;
          background-color: #363955; 
          box-shadow: 0 6px 20px rgba(54, 57, 85, 0.6);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          color: #E8E8E8; 
          margin: 1rem;
          border: 2px solid #54668E; 
        }
        :host(:hover) {
          transform: translateY(-8px);
          box-shadow: 0 14px 40px rgba(54, 57, 85, 0.8);
          border-color: #879EC6; 
        }
        img {
          width: 100%;
          height: auto;
          display: block;
          border-bottom: 5px solid #E8E8E8;
          object-fit: cover;
          aspect-ratio: 4 / 3;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          transition: filter 0.3s ease;
        }
        :host(:hover) img {
          filter: brightness(1.05);
          border-bottom-color: white;
        }
        h2 {
          margin: 1rem 1rem 0 1rem;
          font-size: 1.6rem;
          font-weight: 700;
          color: rgb(241, 229, 229); 
          text-align: center;
        }
        h3 {
          margin: 0.3rem 1rem 1rem 1rem;
          font-weight: 500;
          font-style: italic;
          color: #A8B0D0; 
          text-align: center;
        }
        p {
          margin: 0 1.5rem 1.5rem 1.5rem;
          font-size: 1rem;
          line-height: 1.5;
          color: black; 
          text-align: center;
        }
        ::slotted(span) {
          color: white;
          font-weight: 600;
          cursor: default;
          text-decoration: none;
        }
        @media (max-width: 400px) {
          :host {
            max-width: 90vw;
            margin: 1rem auto;
          }
          h2 {
            font-size: 1.3rem;
          }
          h3 {
            font-size: 1rem;
          }
          p {
            font-size: 0.95rem;
            margin: 0 1rem 1rem 1rem;
          }
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
