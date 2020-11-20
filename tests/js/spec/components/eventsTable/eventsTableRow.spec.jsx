import React from 'react';

import {EventsTableRow} from 'app/components/eventsTable/eventsTableRow';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('EventsTableRow', function () {
  it('renders', function () {
    const wrapper = mountWithTheme(
      <table>
        <tbody>
          <EventsTableRow
            organization={TestStubs.Organization()}
            tagList={[]}
            {...{orgId: 'orgId', projectId: 'projectId', groupId: 'groupId'}}
            event={TestStubs.DetailedEvents()[0]}
          />
        </tbody>
      </table>,
      TestStubs.routerContext()
    );
    expect(wrapper).toSnapshot();
  });
});
