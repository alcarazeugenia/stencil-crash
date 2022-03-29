import { newSpecPage } from '@stencil/core/testing';
import { StencilModal } from '../stencil-modal';

describe('stencil-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilModal],
      html: `<stencil-modal></stencil-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-modal>
    `);
  });
});
