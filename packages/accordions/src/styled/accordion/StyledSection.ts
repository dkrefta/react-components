/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.section';

export interface IStyledSection {
  arg?: boolean;
}

export const StyledSection = styled.div.attrs<IStyledSection>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSection>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSection.defaultProps = {
  theme: DEFAULT_THEME
};
