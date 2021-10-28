import * as React from 'react';
import { NotFoundPage } from '..';
import { MemoryRouter } from 'react-router-dom';
import { themes } from 'styles/theme/themes';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

const renderPage = () =>
  renderer.create(
    <MemoryRouter>
      <HelmetProvider>
        <NotFoundPage />
      </HelmetProvider>
    </MemoryRouter>,
  );

describe('<NotFoundPage />', () => {
  it('should match snapshot', () => {
    const notFoundPage = renderPage();
    expect(notFoundPage.toJSON()).toMatchSnapshot();
  });

  it('should should contain Link', () => {
    const notFoundPage = renderPage();
  });
});
