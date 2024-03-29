class TitutloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    //base do component
    const componentRoot = document.createElement('h1');
    componentRoot.textContent = this.getAttribute('titulo');
    //estilizar do component
    const style = document.createElement('style');
    style.textContent = `
    h1 {
        color: blue;
    }`
    //enviar para shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);

  }
}

customElements.define('titulo-dinamico', TitutloDinamico);
