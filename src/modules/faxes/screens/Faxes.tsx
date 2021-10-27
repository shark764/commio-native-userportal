import * as React from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components/Button';
import type { FaxesScreenProp } from '@/types';

export function FaxesScreen ({ navigation }: FaxesScreenProp) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Faxes</Text>

      <Button
        onPress={() => navigation.goBack()}
        titlePressIn="Going back home"
        titlePressOut="Go back home"
        title="Go back home"
      />
    </View>
  );
}
