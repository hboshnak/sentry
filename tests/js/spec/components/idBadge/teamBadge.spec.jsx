import React from 'react';

import TeamBadge from 'app/components/idBadge/teamBadge';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('TeamBadge', function () {
  it('renders with Avatar and team name', function () {
    const wrapper = mountWithTheme(
      <TeamBadge team={TestStubs.Team()} />,
      TestStubs.routerContext()
    );
    expect(wrapper.find('StyledAvatar')).toHaveLength(1);
    expect(wrapper.find('BadgeDisplayName').text()).toEqual('#team-slug');
  });
});
