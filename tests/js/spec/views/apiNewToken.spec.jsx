import React from 'react';

import ApiNewToken from 'app/views/settings/account/apiNewToken';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('ApiNewToken', function () {
  describe('render()', function () {
    it('renders', function () {
      const wrapper = mountWithTheme(<ApiNewToken params={{}} />, {
        context: {
          router: TestStubs.router(),
        },
      });
      expect(wrapper).toSnapshot();
    });
  });
});
