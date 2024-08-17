// store/index.js

import { useMemo } from 'react';
import { initializeStore } from './store';

export const useStore = (initialState = {}) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
