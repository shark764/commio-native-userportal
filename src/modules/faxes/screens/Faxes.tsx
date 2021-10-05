import * as React from 'react';
import { View, Text } from 'react-native';

export interface FaxesProps {
  default: string;
}

export function FaxesScreen (props: FaxesProps) {
  return (
    <View>
      <Text>Faxes</Text>
    </View>
  );
}
