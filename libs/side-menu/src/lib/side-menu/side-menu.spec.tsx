import React from 'react';
import { render, cleanup } from 'react-testing-library';

import SideMenu from './side-menu';

describe(' SideMenu', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<SideMenu />);
    expect(baseElement).toBeTruthy();
  });
});
