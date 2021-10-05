import * as React from 'react';
import { View, Text } from 'react-native';

export interface CallHistoryProps {
  default: string;
}

export function CallHistoryScreen (props: CallHistoryProps) {
  return (
    <View>
      <Text>CallHistory</Text>
    </View>
  );
}
