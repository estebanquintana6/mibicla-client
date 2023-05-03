import React from 'react';

import { Provider } from 'react-redux';

import AdminSectionTitle from '@components/BasicElements/AdminSectionTitle/AdminSectionTitle';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

import { store } from '@store/adminInventory/store';

const InventoryPanel = () => {

    return (
        <Provider store={store}>
            <section className="p-4 sm:ml-64">
                <AdminSectionTitle title={"Inventario"} />
                <SearchBar />
                <ProductList />
            </section>
        </Provider>
    )
}

export default InventoryPanel;