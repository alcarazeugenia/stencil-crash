import { Component, Prop, h, getAssetPath, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'stencil-modal',
  styleUrl: 'stencil-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class StencilModal {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop()
  header: string;
  @Prop() appearance: string;
  @Prop()
  isOpen: boolean;
  @Prop()
  closeIcon: string = 'x.svg';
  @Prop() buttons: string;

  @State() _buttons: Array<any>;

  arrayDataWatcher(buttons) {
    if (typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
      return;
    }
  }

  @Event() private action: EventEmitter;

  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }

  private handleClose = () => {
    this.isOpen = false;
  };

  private handleAction = () => {
    this.action.emit;
  };

  render() {
    return (
      <div class={this.isOpen ? 'modal-wrapper is-open' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleClose}>
          <div class="modal">
            <div class="header">
              <h6>{this.header}</h6>
              <div class="close" onClick={this.handleClose}>
                <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />
              </div>
            </div>
            <div class="body">
              <slot />
            </div>
            <div class="footer">
              {this._buttons.map((button, index) => (
                <stencil-button text={button.text} appearance={index === 0 && this.appearance} onClick={index === 0 ? this.handleAction : this.handleClose} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
