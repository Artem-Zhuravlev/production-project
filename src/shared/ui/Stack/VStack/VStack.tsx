import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = memo((props: VStackProps) => {
  const { align = 'stretch' } = props;

  return (
    <Flex direction="column" {...props} align={align} />
  );
});
