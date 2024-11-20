import { render, screen } from '@testing-library/react';

import HomePage from './page';

describe('[locale]/HomePage', () => {
  it('Renders the page in grid structure', () => {
    render(<HomePage />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();

    const gridContainer = mainElement.parentElement;
    expect(gridContainer).toHaveClass(
      'grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'
    );
  });

  it('Next.js logo shows the grid', () => {
    render(<HomePage />);

    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/next.svg');
    expect(logo).toHaveAttribute('width', '180');
    expect(logo).toHaveAttribute('height', '38');
  });
});
