import React from 'react';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import { useTranslation } from '@fedimint/utils';
import { GatewayCard } from '.';

interface BalanceTabProps {
  balance_msat: number;
}

export const BalanceTab = React.memo(function BalanceTab(
  props: BalanceTabProps
): JSX.Element {
  const { t } = useTranslation();
  const { balance_msat } = props;
  const theme = useTheme();

  return (
    <Box w='100%'>
      <GatewayCard>
        <Box>
          <Text
            fontSize='lg'
            fontWeight='600'
            color={theme.colors.gray[900]}
            fontFamily={theme.fonts.body}
          >
            {t('balance-tab.tab_header')}
          </Text>
          <Text
            fontSize='sm'
            color={theme.colors.gray[600]}
            fontFamily={theme.fonts.body}
            pt='4px'
          >
            {t('balance-tab.sentence')}
          </Text>
        </Box>
        <Flex>
          <Text
            fontSize='24px'
            fontWeight='600'
            color={theme.colors.gray[800]}
            fontFamily={theme.fonts.body}
          >
            {balance_msat}
          </Text>
        </Flex>
      </GatewayCard>
    </Box>
  );
});
