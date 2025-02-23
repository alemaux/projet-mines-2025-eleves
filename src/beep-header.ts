/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('beep-header')
export class BeepHeader extends LitElement {
  static override styles = [css`
    header{
    position : fixed;
    width:100%;
    background-color: lightgrey;
    margin-top: 0px;
    height:100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}`, css`header >*  {
  margin :10px;
}`
];

@property()
contenu_message = ""; 


  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-header': BeepHeader;
  }
}
