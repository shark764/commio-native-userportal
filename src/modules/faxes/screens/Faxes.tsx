/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/return-await */
import * as React from 'react';
import { View, Text } from 'react-native';

import { useQuery } from 'react-query';

import type { FaxesScreenProp } from '@/App';
import { Button } from '@/components/Button';

export function FaxesScreen ({ navigation }: FaxesScreenProp) {
  const { isLoading, error, data, isFetching } = useQuery(
    'typicode',
    async () =>
      fetch('https://jsonplaceholder.typicode.com/todos/1').then(async (res) =>
        res.json()
      )
  );

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>An error has occurred: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Faxes</Text>

      <Button
        onPress={() => navigation.goBack()}
        titlePressIn="Going back home"
        titlePressOut="Go back home"
        title="Go back home"
      />

      <View>
        <Text>{data.userId}</Text>
        <Text>{data.id}</Text>
        <Text>{data.title}</Text>
        <Text>{data.completed}</Text>
        <Text>{isFetching ? 'Updating...' : ''}</Text>
      </View>
    </View>
  );
}
