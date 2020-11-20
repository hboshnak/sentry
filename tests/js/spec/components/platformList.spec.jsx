import React from 'react';

import PlatformList from 'app/components/platformList';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('PlatformList', function () {
  it('renders max of three icons from platforms', function () {
    const platforms = ['java', 'php', 'javascript', 'cocoa', 'ruby'];
    const wrapper = mountWithTheme(<PlatformList platforms={platforms} />);
    const icons = wrapper.find('StyledPlatformIcon');
    expect(icons).toHaveLength(3);
  });

  it('renders default if no platforms', function () {
    const platforms = [];
    const wrapper = mountWithTheme(<PlatformList platforms={platforms} />);
    const icons = wrapper.find('StyledPlatformIcon');
    expect(icons.first().prop('platform')).toBe('default');
    expect(icons).toHaveLength(1);
  });
});
