/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class BeepHeader extends LitElement {
    static styles: import("lit").CSSResult[];
    contenu_message: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'beep-header': BeepHeader;
    }
}
//# sourceMappingURL=beep-header.d.ts.map