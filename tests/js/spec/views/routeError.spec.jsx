import React from 'react';
import * as Sentry from '@sentry/react';

import {RouteError} from 'app/views/routeError';
import {mountWithTheme} from 'sentry-test/enzyme';

jest.mock('jquery');

describe('RouteError', function () {
  afterEach(function () {
    Sentry.captureException.mockClear();
    Sentry.showReportDialog.mockClear();
  });

  it('captures errors with raven', async function () {
    const error = new Error('Big Bad Error');
    const routes = TestStubs.routes();
    mountWithTheme(
      <RouteError routes={routes} error={error} />,
      TestStubs.routerContext()
    );

    await tick();

    expect(Sentry.captureException).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Big Bad Error: /organizations/:orgId/api-keys/',
      })
    );

    expect(Sentry.showReportDialog).toHaveBeenCalled();
  });
});
