import React from 'react';

import Qrcode from 'app/components/qrcode';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('Qrcode', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(<Qrcode code={[[0, 1, 1, 0, 0, 0, 0, 0]]} />);
    expect(wrapper).toSnapshot();
  });
});
