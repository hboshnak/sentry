import React from 'react';

import {MultiSelectField} from 'app/components/forms';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('MultiSelectField', function () {
  describe('render()', function () {
    it('renders without form context', function () {
      const wrapper = mountWithTheme(
        <MultiSelectField
          options={[
            {label: 'a', value: 'a'},
            {label: 'b', value: 'b'},
          ]}
          name="fieldName"
        />
      );
      expect(wrapper).toSnapshot();
    });

    it('has the right value from props', function () {
      const wrapper = mountWithTheme(
        <MultiSelectField
          options={[
            {label: 'a', value: 'a'},
            {label: 'b', value: 'b'},
          ]}
          name="fieldName"
          value={['a']}
        />
      );
      expect(wrapper.find('StyledSelectControl').prop('value')).toEqual(['a']);
    });

    it('renders with form context', function () {
      const wrapper = mountWithTheme(
        <MultiSelectField
          options={[
            {label: 'a', value: 'a'},
            {label: 'b', value: 'b'},
          ]}
          name="fieldName"
        />,
        {
          context: {
            form: {
              data: {
                fieldName: ['a', 'b'],
              },
              errors: {},
            },
          },
        }
      );

      expect(wrapper.find('StyledSelectControl').prop('value')).toEqual(['a', 'b']);
    });
  });
});
