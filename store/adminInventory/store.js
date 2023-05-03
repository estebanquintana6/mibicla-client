import { configureStore } from '@reduxjs/toolkit';

import adminInventoryReducer from '@store/adminInventory';

export const store = configureStore({
    reducer: adminInventoryReducer
});

export const paginationStore = store.getState().pagination;