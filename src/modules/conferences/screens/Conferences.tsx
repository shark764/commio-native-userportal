import * as React from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components/Button';
import type { ConferencesScreenProp } from '@/types';

export function ConferencesScreen ({ navigation }: ConferencesScreenProp) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conferences</Text>

      <Button
        onPress={() => navigation.goBack()}
        titlePressIn="Going back home"
        titlePressOut="Go back home"
        title="Go back home"
      />
    </View>
  );
}
