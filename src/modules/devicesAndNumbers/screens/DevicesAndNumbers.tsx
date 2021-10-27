import * as React from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components/Button';
import type { DevicesAndNumbersScreenProp } from '@/types';

export function DevicesAndNumbersScreen ({
  navigation,
}: DevicesAndNumbersScreenProp) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DevicesAndNumbers</Text>

      <Button
        onPress={() => navigation.goBack()}
        titlePressIn="Going back home"
        titlePressOut="Go back home"
        title="Go back home"
      />
    </View>
  );
}
