import React from 'react';

import ReturnButton from 'app/views/settings/components/forms/returnButton';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('returnButton', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(<ReturnButton />);
    expect(wrapper).toSnapshot();
  });
});
