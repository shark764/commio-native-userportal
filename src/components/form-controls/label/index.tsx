import * as React from 'react';
import { View, Text } from 'react-native';

export interface LabelProps {}

export function Label (props: LabelProps) {
  return (
    <View>
      <Text>Label</Text>
    </View>
  );
}
