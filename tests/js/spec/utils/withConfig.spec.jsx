import React from 'react';

import ConfigStore from 'app/stores/configStore';
import withConfig from 'app/utils/withConfig';
import {mount} from 'sentry-test/enzyme';

describe('withConfig HoC', function () {
  it('adds config prop', async function () {
    ConfigStore.init();
    const MyComponent = () => null;
    const Container = withConfig(MyComponent);
    const wrapper = mount(<Container />);
    expect(wrapper.find('MyComponent').prop('config')).toEqual({});
    ConfigStore.set('user', 'foo');
    wrapper.update();
    expect(wrapper.find('MyComponent').prop('config')).toEqual({user: 'foo'});
  });
});
