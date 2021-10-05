import * as React from 'react';
import { View, Text } from 'react-native';

export interface VoiceMailsProps {
  default: string;
}

export function VoiceMailsScreen (props: VoiceMailsProps) {
  return (
    <View>
      <Text>VoiceMails</Text>
    </View>
  );
}
