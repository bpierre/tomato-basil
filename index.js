const BASIL = Symbol('BASIL')
const TOMATO = Symbol('TOMATO')

const MODES = {
  [BASIL]: ['\u{1F33F}', 'assets/basil.jpg', 'forestgreen'],
  [TOMATO]: ['\u{1F345}', 'assets/tomato.jpg', 'tomato'],
}

const TEMPLATE = `
  <style>
    :host {
      position: relative;
      display: block;
      width: 300px;
      height: 300px;
    }
    button {
      font-size: 14px;
      cursor: pointer;
    }
    main {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-width: 5px;
      border-style: solid;
      border-radius: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  </style>
  <main>
    <button type="button"></button>
  </main>
`

export default class extends HTMLElement {
  constructor() {
    super()
    const root = this.attachShadow({ mode: 'open' })
    root.innerHTML = TEMPLATE
    this.main = root.querySelector('main')
    this.button = root.querySelector('button')
    this.button.addEventListener('click', this.toggle.bind(this))
    this.toggle()
  }
  toggle() {
    this.mode = this.mode === BASIL ? TOMATO : BASIL
    this.button.textContent = MODES[this.mode === BASIL ? TOMATO : BASIL][0]
    this.main.style.backgroundImage = `url(${MODES[this.mode][1]})`
    this.main.style.borderColor = MODES[this.mode][2]
  }
}
