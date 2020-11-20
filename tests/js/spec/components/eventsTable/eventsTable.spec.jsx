import React from 'react';

import EventsTable from 'app/components/eventsTable/eventsTable';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('EventsTable', function () {
  beforeEach(function () {});

  afterEach(function () {});

  it('renders', function () {
    const wrapper = mountWithTheme(
      <EventsTable
        tagList={[]}
        orgId="orgId"
        projectId="projectId"
        groupId="groupId"
        events={TestStubs.DetailedEvents()}
      />,
      TestStubs.routerContext()
    );
    expect(wrapper).toSnapshot();
  });
});
