import React from 'react';

import ToolbarHeader from 'app/components/toolbarHeader';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('ToolbarHeader', function () {
  beforeEach(function () {});

  afterEach(function () {});

  it('renders', function () {
    const wrapper = mountWithTheme(
      <ToolbarHeader>
        <div />
      </ToolbarHeader>
    );
    expect(wrapper).toSnapshot();
  });
});
