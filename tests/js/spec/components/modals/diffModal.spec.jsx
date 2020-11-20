import React from 'react';

import DiffModal from 'app/components/modals/diffModal';
import {mountWithTheme} from 'sentry-test/enzyme';

describe('DiffModal', function () {
  it('renders', function () {
    const project = TestStubs.ProjectDetails();

    const wrapper = mountWithTheme(
      <DiffModal
        orgId="123"
        baseIssueId="123"
        targetIssueId="234"
        project={project}
        Body={({children}) => <div>{children}</div>}
      />
    );
    expect(wrapper).toSnapshot();
  });
});
