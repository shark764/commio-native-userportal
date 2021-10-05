import * as React from 'react';
import { View, Text } from 'react-native';

export interface DevicesAndNumbersProps {
  default: string;
}

export function DevicesAndNumbersScreen (props: DevicesAndNumbersProps) {
  return (
    <View>
      <Text>DevicesAndNumbers</Text>
    </View>
  );
}
