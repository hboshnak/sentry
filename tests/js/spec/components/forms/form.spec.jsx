import React from 'react';

import {Form} from 'app/components/forms';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('Form', function () {
  describe('render()', function () {
    it('renders with children', function () {
      const wrapper = mountWithTheme(
        <Form onSubmit={() => {}}>
          <hr />
        </Form>
      );
      expect(wrapper).toSnapshot();
    });
  });
});
