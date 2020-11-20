import React from 'react';

import PageHeading from 'app/components/pageHeading';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('PageHeading', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(<PageHeading>New Header</PageHeading>);
    expect(wrapper).toSnapshot();
  });
});
