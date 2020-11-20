import React from 'react';
import {Location} from 'history';
import partition from 'lodash/partition';
import flatten from 'lodash/flatten';

import {Release, GlobalSelection} from 'app/types';

import Content from './content';

type Props = {
  release: Release;
  orgSlug: string;
  location: Location;
  showPlaceholders: boolean;
  selection: GlobalSelection;
};

const ReleaseHealth = ({
  release,
  orgSlug,
  location,
  selection,
  showPlaceholders,
}: Props) => {
  // sort health rows inside release card alphabetically by project name,
  // but put the ones with project selected in global header to top
  const sortedProjects = flatten(
    partition(
      release.projects.sort((a, b) => a.slug.localeCompare(b.slug)),
      p => selection.projects.includes(p.id)
    )
  );

  const contentProps = {
    projects: sortedProjects,
    releaseVersion: release.version,
    orgSlug,
  };

  return (
    <Content {...contentProps} location={location} showPlaceholders={showPlaceholders} />
  );
};

export default ReleaseHealth;
