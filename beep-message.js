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
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        this.date = new Date().toISOString();
        this.author = 'ELON MUSK';
        this.likes = 0;
        this.liked = false;
    }
    render() {
        return html `
      <div class="message">
                <span>
                    <label>${this.author}</label>
                    <label>·</label>
                    <label>${formatDistanceToNow(this.date, { addSuffix: false, locale: fr })}</label>
                </span>
                <p>${this.content}</p>
                <span> 
                    <label>${this.likes} Likes</label>
                    <label>·</label>
                    <button @click=${this._onClick} part="button">${this.liked ? "♥" : "♡"}</button>
                </span>
            </div>
    `;
    }
    _onClick() {
        this.likeActions();
    }
    likeActions() {
        this.liked = !this.liked;
        if (this.liked) {
            this.likes++;
        }
        else {
            this.likes--;
        }
    }
};
MyElement.styles = [css `
    .message{
      height: fit-content;
      width:80%;
      background-color: white;
      border:1px solid lightgray;
      border-radius: 5px;
      box-shadow: 5px 5px 5px lightgray;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      padding: 5px;
      padding-left: 10px;
    }`,
    css `
      .message p{
      display : flex;
      flex-wrap: wrap;
    }`,
    css `
      .message span *{
        margin:3px;
    }`];
__decorate([
    property({ type: String })
], MyElement.prototype, "content", void 0);
__decorate([
    property({ type: String })
], MyElement.prototype, "date", void 0);
__decorate([
    property({ type: String })
], MyElement.prototype, "author", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "likes", void 0);
__decorate([
    property({ type: Boolean })
], MyElement.prototype, "liked", void 0);
MyElement = __decorate([
    customElement('beep-message')
], MyElement);
export { MyElement };
//# sourceMappingURL=beep-message.js.map