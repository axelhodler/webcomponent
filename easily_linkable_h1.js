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

        h1 {
            margin-bottom: 300px;
        }
    </style>

    <slot name="description">Default</slot>
    <h1>
        <a>🔗</a>
        <span></span>
    </h1>
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
      this.shadowRoot.querySelector('h1 > a').setAttribute('href', `#${title}`)
      this.shadowRoot.querySelector('h1 > span').innerHTML = title
    }
  }

  customElements.define('ah-h1', EasilyLinkableH1)
}
