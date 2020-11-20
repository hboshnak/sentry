import React from 'react';

import Tag from 'app/components/tagDeprecated';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('Tag', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(
      <Tag priority="info" border size="small">
        Text to Copy
      </Tag>
    );
    expect(wrapper).toSnapshot();
  });
});
