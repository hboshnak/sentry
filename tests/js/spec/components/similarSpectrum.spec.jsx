import React from 'react';

import SimilarSpectrum from 'app/components/similarSpectrum';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('SimilarSpectrum', function () {
  beforeEach(function () {});

  afterEach(function () {});

  it('renders', function () {
    const wrapper = mountWithTheme(<SimilarSpectrum />);
    expect(wrapper).toSnapshot();
  });
});
