import * as React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}
// import { ReactQueryDevtools } from 'react-query/devtools';

interface Props {
  children: React.ReactNode;
}

export function QueryProvider ({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* React-query devtools needs DOM to work */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
