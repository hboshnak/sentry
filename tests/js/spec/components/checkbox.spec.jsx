import React from 'react';

import Checkbox from 'app/components/checkbox';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('Checkbox', function () {
  it('renders', function () {
    const component = mountWithTheme(<Checkbox onChange={() => {}} />);

    expect(component).toSnapshot();
  });
});
