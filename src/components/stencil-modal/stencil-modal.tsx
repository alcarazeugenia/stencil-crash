import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-modal',
  styleUrl: 'stencil-modal.css',
  shadow: true,
})
export class StencilModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
