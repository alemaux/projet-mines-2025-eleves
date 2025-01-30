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
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.contenu_message = "";
    }
    render() {
        return html `
      <header>   
            <span>
                <label class="left">NOM_Compte</label>
            </span>
            <span>Bienvenue Sur Tweeter</span>
            <span>
                <input type="search" class="right">
            </span>
        </header>
    `;
    }
};
MyElement.styles = [css `
    header{
    position : fixed;
    width:100%;
    background-color: lightgrey;
    margin-top: 0px;
    height:100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}`, css `header >*  {
  margin :10px;
}`
];
__decorate([
    property()
], MyElement.prototype, "contenu_message", void 0);
MyElement = __decorate([
    customElement('beep-header')
], MyElement);
export { MyElement };
//# sourceMappingURL=beep-header.js.map