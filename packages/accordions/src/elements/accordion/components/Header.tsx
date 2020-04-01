/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledHeader, StyledButton, StyledChevron } from '../../../styled';
import { useAccordionContext, useSectionContext } from '../../../utils';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

export const Header = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { level, expandedSections, getTriggerProps, getHeaderProps } = useAccordionContext();
    const sectionIndex = useSectionContext();
    const { children, ...restProps } = props;

    const isExpanded = expandedSections.includes(sectionIndex);

    return (
      <StyledHeader {...getHeaderProps({ role: 'heading', ariaLevel: level })}>
        <StyledButton {...(getTriggerProps({ ref, index: sectionIndex, ...restProps }) as any)}>
          <StyledChevron isExpanded={isExpanded} />
        </StyledButton>
      </StyledHeader>
    );
  }
);

Header.displayName = 'Header';
