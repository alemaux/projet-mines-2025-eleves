/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './beep-message.js';
import {Task} from '@lit/task';

type Message = {
  content: string;
  author:string;
  date : string;
  likes : number;
  liked : boolean;
}

const messages : Message[] = [
  {
    content : "god bless america",
    author : "D.J.T",
    date : "2020-10-05T14:48:00.000Z",
    likes : 14000,
    liked : false,},
  {
    content:"bien d'accord le reuf, je suis Elon Musk",
    author : "Elon Musk",
    date : "2025-10-05T14:48:00.000Z",
    likes : 0,
    liked:true,
  },
  {
    content:"poggers",
    author:"rd.chatter",
    date:"0130-10-05T14:48:00.000Z",
    likes : 180000000,
    liked:true,
  },
  {
    content:"poggers",
    author:"rd.chatter",
    date:"2011-10-05T14:48:00.000Z",
    likes : 180000000,
    liked:true,
  },
  {
    content:"omg wisigoths",
    author:"Romulus Auguste",
    date:"0476-10-05T14:48:00.000Z",
    likes : 0,
    liked:false,
  },
  {
    content:"putain dsl la team",
    author:"Versingétorix",
    date:"-000051-01-11T23:50:39.000Z",
    likes : 0,
    liked:false,
  }
]

@customElement('beep-message-list')
export class BeepMessageList extends LitElement {
  static override styles = css``;

  _messagesTask = new Task(this, {
    args:() => ["test"],
    task: () =>{
      return new Promise<Message[]>((resolve)=>{
        setTimeout(() => {
          resolve(messages);
        }, 2000);
      });
    }
  })

  //async _pokemonTask = new Task(this, {
    //
  //}

  //)

  override render() {
    return html`${this._messagesTask.render({
      initial : ()=>html`<p>Waiting for resonse</p>`,
      pending : ()=>html`<p>Running task...</p>`,
      complete : (messages)=>html`
        ${messages.map(message => html`
          <beep-message
            content=${message.content}
            date=${message.date}
            ?liked=${message.liked}
            likes=${message.likes}
            author=${message.author}>
          </beep-message>`)
          }`
    })}`
  
  }
}
  
declare global {
  interface HTMLElementTagNameMap {
    'beep-message-list': BeepMessageList;
  }
}
