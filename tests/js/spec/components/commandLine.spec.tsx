import React from 'react';

import CommandLine from 'app/components/commandLine';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('CommandLine', () => {
  it('renders', () => {
    const children = 'sentry devserver --workers';
    const wrapper = mountWithTheme(<CommandLine>{children}</CommandLine>);
    expect(wrapper.find('CommandLine').text()).toBe(children);
  });
});
