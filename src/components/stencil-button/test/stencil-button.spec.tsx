import { newSpecPage } from '@stencil/core/testing';
import { StencilButton } from '../stencil-button';

describe('stencil-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilButton],
      html: `<stencil-button></stencil-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-button>
    `);
  });
});
