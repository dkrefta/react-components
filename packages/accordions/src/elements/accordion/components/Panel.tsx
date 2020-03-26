/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledPanel } from '../../../styled';
import { useAccordionContext, useSectionContext } from '../../../utils';

export const Panel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { expandedSections } = useAccordionContext();
  const index = useSectionContext();

  const isHidden = Array.isArray(expandedSections)
    ? expandedSections.includes(index) === false
    : expandedSections !== index;

  return <StyledPanel ref={ref} isHidden={isHidden} {...props} />;
});

Panel.displayName = 'Panel';
