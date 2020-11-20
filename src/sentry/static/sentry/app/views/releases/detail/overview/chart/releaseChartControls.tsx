import React from 'react';
import styled from '@emotion/styled';

import {t} from 'app/locale';
import {
  ChartControls,
  InlineContainer,
  SectionHeading,
  SectionValue,
} from 'app/components/charts/styles';
import OptionSelector from 'app/components/charts/optionSelector';
import QuestionTooltip from 'app/components/questionTooltip';
import {WEB_VITAL_DETAILS} from 'app/views/performance/transactionVitals/constants';
import {WebVital} from 'app/utils/discover/fields';
import space from 'app/styles/space';
import {SelectValue, Organization} from 'app/types';

export enum YAxis {
  SESSIONS = 'sessions',
  USERS = 'users',
  CRASH_FREE = 'crashFree',
  SESSION_DURATION = 'sessionDuration',
  EVENTS = 'events',
  FAILED_TRANSACTIONS = 'failedTransactions',
  COUNT_DURATION = 'countDuration',
  COUNT_LCP = 'countLCP',
  ALL_TRANSACTIONS = 'allTransactions',
}

export const PERFORMANCE_AXIS = [
  YAxis.FAILED_TRANSACTIONS,
  YAxis.ALL_TRANSACTIONS,
  YAxis.COUNT_DURATION,
  YAxis.COUNT_LCP,
  YAxis.EVENTS,
];

type Props = {
  summary: React.ReactNode;
  yAxis: YAxis;
  onYAxisChange: (value: YAxis) => void;
  organization: Organization;
  hasHealthData: boolean;
  hasDiscover: boolean;
  hasPerformance: boolean;
};

const ReleaseChartControls = ({
  summary,
  yAxis,
  onYAxisChange,
  organization,
  hasHealthData,
  hasDiscover,
  hasPerformance,
}: Props) => {
  const noHealthDataTooltip = !hasHealthData
    ? t('This view is only available with release health data.')
    : undefined;
  const noDiscoverTooltip = !hasDiscover
    ? t('This view is only available with Discover feature.')
    : undefined;
  const noPerformanceTooltip = !hasPerformance
    ? t('This view is only available with Performance Monitoring.')
    : undefined;
  const yAxisOptions: SelectValue<YAxis>[] = [
    {
      value: YAxis.SESSIONS,
      label: t('Session Count'),
      disabled: !hasHealthData,
      tooltip: noHealthDataTooltip,
    },
    {
      value: YAxis.SESSION_DURATION,
      label: t('Session Duration'),
      disabled: !hasHealthData,
      tooltip: noHealthDataTooltip,
    },
    {
      value: YAxis.USERS,
      label: t('User Count'),
      disabled: !hasHealthData,
      tooltip: noHealthDataTooltip,
    },
    {
      value: YAxis.CRASH_FREE,
      label: t('Crash Free Rate'),
      disabled: !hasHealthData,
      tooltip: noHealthDataTooltip,
    },
    {
      value: YAxis.FAILED_TRANSACTIONS,
      label: t('Failed Transactions'),
      disabled: !hasPerformance,
      hidden: !hasPerformance,
      tooltip: noPerformanceTooltip,
    },
    {
      value: YAxis.COUNT_DURATION,
      label: t('Slow Count (duration)'),
      disabled: !hasPerformance,
      hidden: !hasPerformance,
      tooltip: noPerformanceTooltip,
    },
    {
      value: YAxis.COUNT_LCP,
      label: t('Slow Count (lcp)'),
      disabled: !hasPerformance,
      hidden: !hasPerformance,
      tooltip: noPerformanceTooltip,
    },
    {
      value: YAxis.ALL_TRANSACTIONS,
      label: t('All Transactions'),
      disabled: !hasPerformance,
      hidden: !hasPerformance,
      tooltip: noPerformanceTooltip,
    },
    {
      value: YAxis.EVENTS,
      label: t('Error Count'),
      disabled: !hasDiscover,
      tooltip: noDiscoverTooltip,
    },
  ]
    .filter(opt => !opt.hidden)
    .map(({hidden: _hidden, ...rest}) => rest);

  const getSummaryHeading = () => {
    switch (yAxis) {
      case YAxis.USERS:
        return t('Total Active Users');
      case YAxis.CRASH_FREE:
        return t('Average Rate');
      case YAxis.SESSION_DURATION:
        return t('Median Duration');
      case YAxis.EVENTS:
        return t('Total Events');
      case YAxis.FAILED_TRANSACTIONS:
        return t('Total Failed Transactions');
      case YAxis.COUNT_DURATION:
        return t(`Count over ${organization.apdexThreshold}ms`);
      case YAxis.COUNT_LCP:
        return t(`Count over ${WEB_VITAL_DETAILS[WebVital.LCP].failureThreshold}ms`);
      case YAxis.ALL_TRANSACTIONS:
        return t('Total Transactions');
      case YAxis.SESSIONS:
      default:
        return t('Total Sessions');
    }
  };

  return (
    <StyledChartControls>
      <InlineContainer>
        <SectionHeading key="total-label">{getSummaryHeading()}</SectionHeading>
        <SectionValue key="total-value">{summary}</SectionValue>
        {PERFORMANCE_AXIS.includes(yAxis) && (
          <QuestionTooltip
            position="top"
            size="sm"
            title="This count shows only the current release."
          />
        )}
      </InlineContainer>

      <OptionSelector
        title={t('Y-Axis')}
        selected={yAxis}
        options={yAxisOptions}
        onChange={onYAxisChange as (value: string) => void}
        menuWidth="150px"
      />
    </StyledChartControls>
  );
};

const StyledChartControls = styled(ChartControls)`
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    display: grid;
    grid-gap: ${space(1)};
    padding-bottom: ${space(1.5)};
    button {
      font-size: ${p => p.theme.fontSizeSmall};
    }
  }
`;

export default ReleaseChartControls;
