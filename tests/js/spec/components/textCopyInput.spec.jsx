import React from 'react';

import TextCopyInput from 'app/views/settings/components/forms/textCopyInput';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('TextCopyInput', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(<TextCopyInput>Text to Copy</TextCopyInput>);
    expect(wrapper).toSnapshot();
  });
});
