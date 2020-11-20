import React from 'react';

import CircleIndicator from 'app/components/circleIndicator';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('CircleIndicator', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(<CircleIndicator />);
    expect(wrapper).toSnapshot();
  });
});
