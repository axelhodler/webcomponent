{
  let template = document.createElement('template')
  template.innerHTML = `
    <style>
        a {
            visibility: hidden;
            text-decoration:none;
        }

        h1:hover a {
            visibility: visible;
        }

        div {
            display: block;
            width: 500px;
            margin-left: 40px;
        }
    </style>

    <h1>
        <a id="link">🔗</a>
        <span id="title"></span>
    </h1>
    <div>
        <slot name="description">Default Text</slot>
    </div>
`

  class EasilyLinkableH1 extends HTMLElement {
    constructor() {
      super()
      let templateContent = template.content
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true))
    }

    connectedCallback() {
      const title = this.getAttribute("title")
      this.setAttribute('id', title)
      this.shadowRoot.querySelector('#link').setAttribute('href', `#${title}`)
      this.shadowRoot.querySelector('#title').innerHTML = title
    }
  }

  customElements.define('ah-h1', EasilyLinkableH1)
}
