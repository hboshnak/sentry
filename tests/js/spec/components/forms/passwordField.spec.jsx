import React from 'react';

import {PasswordField} from 'app/components/forms';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('PasswordField', function () {
  describe('render()', function () {
    it('renders', function () {
      const wrapper = mountWithTheme(<PasswordField name="fieldName" />);
      expect(wrapper).toSnapshot();
    });

    it('renders with value', function () {
      const wrapper = mountWithTheme(<PasswordField name="fieldName" value="foobar" />);
      expect(wrapper).toSnapshot();
    });

    it('renders with form context', function () {
      const wrapper = mountWithTheme(<PasswordField name="fieldName" />, {
        context: {
          form: {
            data: {
              fieldName: 'foobar',
            },
            errors: {},
          },
        },
      });
      expect(wrapper).toSnapshot();
    });
  });
});
