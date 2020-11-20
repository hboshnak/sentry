import React from 'react';
import styled from '@emotion/styled';
import {Location} from 'history';

import Version from 'app/components/version';
import {Panel} from 'app/components/panels';
import ReleaseStats from 'app/components/releaseStats';
import {Release, GlobalSelection} from 'app/types';
import TimeSince from 'app/components/timeSince';
import DeployBadge from 'app/components/deployBadge';

import ReleaseHealth from './releaseHealth';
import NotAvailable from './notAvailable';

type Props = {
  release: Release;
  orgSlug: string;
  location: Location;
  selection: GlobalSelection;
  reloading: boolean;
  showHealthPlaceholders: boolean;
};

const ReleaseCard = ({
  release,
  orgSlug,
  location,
  reloading,
  selection,
  showHealthPlaceholders,
}: Props) => {
  const {version, commitCount, lastDeploy, dateCreated} = release;

  return (
    <StyledReleaseCard reloading={reloading ? 1 : 0}>
      <ReleaseInfo>
        <Version version={version} tooltipRawVersion truncate anchor={false} />
        {commitCount > 0 ? (
          <ReleaseStats release={release} withHeading={false} />
        ) : (
          <NotAvailable />
        )}
        {lastDeploy?.dateFinished && <DeployBadge deploy={lastDeploy} />}
        <TimeSince date={lastDeploy?.dateFinished || dateCreated} />
      </ReleaseInfo>

      <ReleaseProjects>
        <ReleaseHealth
          release={release}
          orgSlug={orgSlug}
          location={location}
          showPlaceholders={showHealthPlaceholders}
          selection={selection}
        />
      </ReleaseProjects>
    </StyledReleaseCard>
  );
};

const StyledReleaseCard = styled(Panel)<{reloading: number}>`
  opacity: ${p => (p.reloading ? 0.5 : 1)};
  pointer-events: ${p => (p.reloading ? 'none' : 'auto')};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
  }
`;

const ReleaseInfo = styled('div')`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    border-right: 1px solid ${p => p.theme.border};
    min-width: 250px;
  }
  @media (min-width: ${p => p.theme.breakpoints[3]}) {
    min-width: 300px;
  }
`;

const ReleaseProjects = styled('div')`
  flex-grow: 1;
  display: grid;
`;

export default ReleaseCard;
