/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class BeepMessage extends LitElement {
    content: string;
    date: string;
    author: string;
    likes: number;
    liked: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    likeActions(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'beep-message': BeepMessage;
    }
}
//# sourceMappingURL=beep-message.d.ts.map