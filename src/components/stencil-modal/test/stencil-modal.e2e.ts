import { newE2EPage } from '@stencil/core/testing';

describe('stencil-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-modal></stencil-modal>');

    const element = await page.find('stencil-modal');
    expect(element).toHaveClass('hydrated');
  });
});
