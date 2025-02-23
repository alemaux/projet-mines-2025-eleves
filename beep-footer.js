/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@kor-ui/kor';
let BeepHeader = class BeepHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.contenu_message = "";
    }
    render() {
        return html `
      <footer>   
            <span>
                <label>Message : </label>
            </span>
            <span class="middle">
                <input placeholder="Dites-nous ce que vous pensez" >
            </span>
            <span> 
                <kor-button label="Envoyer" color="Primary"></kor-button>
            </span>
        </footer>
    `;
    }
};
BeepHeader.styles = [
    css `footer{
      position: fixed;
      bottom: 0;
      width:100%;
      height:100px;
      flex:0 0 auto;
      background-color: lightgrey;
      margin-top: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }`,
    css `footer >*{
      margin:10px;
    }`,
    css `footer .middle{
      width : 60%;
    }`,
    css `footer .middle input{
      width : 100%;
      height : 50px;
    }`
];
__decorate([
    property()
], BeepHeader.prototype, "contenu_message", void 0);
BeepHeader = __decorate([
    customElement('beep-footer')
], BeepHeader);
export { BeepHeader };
//# sourceMappingURL=beep-footer.js.map