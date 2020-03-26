/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledHeader, StyledButton } from '../../../styled';
import { useAccordionContext, useSectionContext } from '../../../utils';

export const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { level, expandedSections, getTriggerProps, getHeaderProps } = useAccordionContext();
  const sectionIndex = useSectionContext();
  const { children, ...restProps } = props;

  return (
    <StyledHeader {...getHeaderProps({ role: 'heading', ariaLevel: level })} {...restProps}>
      <StyledButton {...(getTriggerProps({ ref, index: sectionIndex }) as any)}>
        {children}
      </StyledButton>
    </StyledHeader>
  );
});

Header.displayName = 'Header';
