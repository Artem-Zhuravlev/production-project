import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export type { AppDispatch };

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ThunkConfig,
};
