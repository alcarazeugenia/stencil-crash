import { newE2EPage } from '@stencil/core/testing';

describe('stencil-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-button></stencil-button>');

    const element = await page.find('stencil-button');
    expect(element).toHaveClass('hydrated');
  });
});
