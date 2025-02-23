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
import { Task } from '@lit/task';
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
        date: "2025-10-05T14:48:00.000Z",
        likes: 0,
        liked: true,
    },
    {
        content: "poggers",
        author: "rd.chatter",
        date: "0130-10-05T14:48:00.000Z",
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
        content: "omg wisigoths",
        author: "Romulus Auguste",
        date: "0476-10-05T14:48:00.000Z",
        likes: 0,
        liked: false,
    },
    {
        content: "putain dsl la team",
        author: "Versingétorix",
        date: "-000051-01-11T23:50:39.000Z",
        likes: 0,
        liked: false,
    }
];
let BeepMessageList = class BeepMessageList extends LitElement {
    constructor() {
        super(...arguments);
        this._messagesTask = new Task(this, {
            args: () => ["test"],
            task: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(messages);
                    }, 2000);
                });
            }
        });
    }
    //async _pokemonTask = new Task(this, {
    //
    //}
    //)
    render() {
        return html `${this._messagesTask.render({
            initial: () => html `<p>Waiting for resonse</p>`,
            pending: () => html `<p>Running task...</p>`,
            complete: (messages) => html `
        ${messages.map(message => html `
          <beep-message
            content=${message.content}
            date=${message.date}
            ?liked=${message.liked}
            likes=${message.likes}
            author=${message.author}>
          </beep-message>`)}`
        })}`;
    }
};
BeepMessageList.styles = css ``;
BeepMessageList = __decorate([
    customElement('beep-message-list')
], BeepMessageList);
export { BeepMessageList };
//# sourceMappingURL=beep-message-list.js.map