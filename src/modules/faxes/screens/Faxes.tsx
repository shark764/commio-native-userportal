import * as React from 'react';
import { View, Text } from 'react-native';

import type { FaxesScreenProp } from '@/App';
import { Button } from '@/components/Button';

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
