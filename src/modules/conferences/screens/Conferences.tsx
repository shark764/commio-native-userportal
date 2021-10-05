import * as React from 'react';
import { View, Text } from 'react-native';

export interface ConferencesProps {
  default: string;
}

export function ConferencesScreen (props: ConferencesProps) {
  return (
    <View>
      <Text>Conferences</Text>
    </View>
  );
}
