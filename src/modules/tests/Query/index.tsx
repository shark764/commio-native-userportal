/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/return-await */
import * as React from 'react';
import { View, Text } from 'react-native';

import { useQuery } from 'react-query';

export function QueryExampleScreen () {
  const { isLoading, error, data, isFetching } = useQuery(
    'repoData',
    async () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        async (res) => res.json()
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
    <View>
      <Text>{data.name}</Text>
      <Text>{data.description}</Text>
      <Text>👀 {data.subscribers_count}</Text>
      <Text>✨ {data.stargazers_count}</Text>
      <Text>🍴 {data.forks_count}</Text>
      <Text>{isFetching ? 'Updating...' : ''}</Text>
    </View>
  );
}
