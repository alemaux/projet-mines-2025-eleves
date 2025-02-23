/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import './beep-message.js';
import { Task } from '@lit/task';
type Message = {
    content: string;
    author: string;
    date: string;
    likes: number;
    liked: boolean;
};
export declare class BeepMessageList extends LitElement {
    static styles: import("lit").CSSResult;
    _messagesTask: Task<readonly ["test"], Message[]>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'beep-message-list': BeepMessageList;
    }
}
export {};
//# sourceMappingURL=beep-message-list.d.ts.map