import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-button';

/**
 * @customElement
 * @polymer
 */
class P3ElectronApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <p>Start with polymer: polymer serve --npm --open</p>
      <p>Start with electron: </p>
      <ul>
        <li>polymer build</li>
        <li>cd build/es6-bundled</li>
        <li>npm install --only=prod</li>
        <li>cd ../..</li>
        <li>npm start</li>
      </ul>
      <vaadin-button>I got it!</vaadin-button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'p3-electron-app'
      }
    };
  }
}

window.customElements.define('p3-electron-app', P3ElectronApp);
