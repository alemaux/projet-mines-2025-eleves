/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {formatDistanceToNow} from 'date-fns';
import {fr} from 'date-fns/locale';


@customElement('beep-message')
export class MyElement extends LitElement {
  
  @property({type : String})
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  @property({type : String})
  date = new Date().toISOString();

  @property({type : String})
  author = 'ELON MUSK';

  @property({type : Number})
  likes = 0;

  @property({type : Boolean})
  liked = false;

  static override styles = [css`
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
      css`
      .message p{
      display : flex;
      flex-wrap: wrap;
    }`,
      css`
      .message span *{
        margin:3px;
    }`];

  override render() {
    return html`
      <div class="message">
                <span>
                    <label>${this.author}</label>
                    <label>·</label>
                    <label>${formatDistanceToNow(this.date, {addSuffix : false, locale : fr})}</label>
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
  
  private _onClick() {
    this.likeActions();
  }

  likeActions() {
    this.liked = !this.liked;
    if(this.liked){
      this.likes ++;
    }else{
      this.likes--;
    }
  }
}
  
declare global {
  interface HTMLElementTagNameMap {
    'beep-message': MyElement;
  }
}
