/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@kor-ui/kor';


@customElement('beep-footer')
export class BeepHeader extends LitElement {
  static override styles = [
    css`footer{
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
    css`footer >*{
      margin:10px;
    }`,
  css`footer .middle{
      width : 60%;
    }`,
  css`footer .middle input{
      width : 100%;
      height : 50px;
    }`];

  @property()
  contenu_message = "";

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-footer': BeepHeader;
  }
}
