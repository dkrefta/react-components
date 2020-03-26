/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.panel';

export interface IStyledPanel {
  isHidden?: boolean;
}

export const StyledPanel = styled.div.attrs<IStyledPanel>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPanel>`
  display: ${props => props.isHidden && 'none'};
  background-color: white;
  margin-bottom: 20px;
  padding: 8px 40px 32px 40px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPanel.defaultProps = {
  theme: DEFAULT_THEME
};
