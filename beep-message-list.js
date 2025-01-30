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
import { customElement } from 'lit/decorators.js';
import './beep-message.js';
const messages = [
    {
        content: "god bless america",
        author: "D.J.T",
        date: "2020-10-05T14:48:00.000Z",
        likes: 14000,
        liked: false,
    },
    {
        content: "bien d'accord le reuf, je suis Elon Musk",
        author: "Elon Musk",
        date: "2020-10-05T14:48:00.000Z",
        likes: 0,
        liked: true,
    },
    {
        content: "poggers",
        author: "rd.chatter",
        date: "1050-10-05T14:48:00.000Z",
        likes: 180000000,
        liked: true,
    },
    {
        content: "poggers",
        author: "rd.chatter",
        date: "2011-10-05T14:48:00.000Z",
        likes: 180000000,
        liked: true,
    },
    {
        content: "kekw",
        author: "rd.chatter",
        date: "2011-10-05T14:48:00.000Z",
        likes: 0,
        liked: true,
    },
    {
        content: "poggers",
        author: "rd.chatter",
        date: "2011-10-05T14:48:00.000Z",
        likes: 0,
        liked: true,
    }
];
let MyElement = class MyElement extends LitElement {
    render() {
        return html `${messages.map(message => html `
      <beep-message
      content=${message.content}
      date=${message.date}
      ?liked=${message.liked}
      likes=${message.likes}
      author=${message.author}>
      `)}
     
    `;
    }
};
MyElement.styles = css ``;
MyElement = __decorate([
    customElement('beep-message-list')
], MyElement);
export { MyElement };
//# sourceMappingURL=beep-message-list.js.map