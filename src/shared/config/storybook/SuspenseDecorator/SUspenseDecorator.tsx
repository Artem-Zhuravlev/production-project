import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StorybookComponent: Story) => (
  <Suspense>
    <StorybookComponent />
  </Suspense>
);
