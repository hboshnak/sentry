import React from 'react';

import ExternalLink from 'app/components/links/externalLink';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('ExternalLink', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(<ExternalLink href="https://www.sentry.io/" />);
    expect(wrapper).toSnapshot();
  });
});
