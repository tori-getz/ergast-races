import React from 'react';
import FlashMessage from 'react-native-flash-message';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as InversifyProvider } from 'inversify-react';
import { Provider as StoreProvider } from 'react-redux';

import { RootNavigation } from '~/presentation/navigation/root-navigation';
import { container } from '~/core/di/container';
import { store } from '~/presentation/state/root.store';

export const App: React.FC = () => {
  return (
    <InversifyProvider container={container}>
      <StoreProvider store={store}>
        <PaperProvider>
          <FlashMessage position="top" />
          <RootNavigation />
        </PaperProvider>
      </StoreProvider>
    </InversifyProvider>
  );
};
