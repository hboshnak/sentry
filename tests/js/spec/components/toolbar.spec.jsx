import React from 'react';

import Toolbar from 'app/components/toolbar';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('Toolbar', function () {
  beforeEach(function () {});

  afterEach(function () {});

  it('renders', function () {
    const wrapper = mountWithTheme(
      <Toolbar>
        <div />
      </Toolbar>
    );
    expect(wrapper).toSnapshot();
  });
});
