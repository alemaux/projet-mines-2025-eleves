/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './beep-message.js';

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
    date : "2020-10-05T14:48:00.000Z",
    likes : 0,
    liked:true,
  },
  {
    content:"poggers",
    author:"rd.chatter",
    date:"1050-10-05T14:48:00.000Z",
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
    content:"kekw",
    author:"rd.chatter",
    date:"2011-10-05T14:48:00.000Z",
    likes : 0,
    liked:true,
  },
  {
    content:"poggers",
    author:"rd.chatter",
    date:"2011-10-05T14:48:00.000Z",
    likes : 0,
    liked:true,
  }
]

@customElement('beep-message-list')
export class MyElement extends LitElement {
  
 

  static override styles = css``
  ;

  override render() {
    return html`${messages.map(message => html`
      <beep-message
      content=${message.content}
      date=${message.date}
      ?liked=${message.liked}
      likes=${message.likes}
      author=${message.author}>
      `)}
     
    `;
  }
  
}
  
declare global {
  interface HTMLElementTagNameMap {
    'beep-message-list': MyElement;
  }
}
