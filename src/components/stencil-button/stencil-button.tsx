import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-button',
  styleUrl: 'stencil-button.css',
  shadow: true,
})
export class StencilButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    );
  }
}
