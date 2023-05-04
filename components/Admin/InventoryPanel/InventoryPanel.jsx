import React from 'react';
import Router from 'next/router';

import { Provider } from 'react-redux';

import { PlusIcon } from "@heroicons/react/20/solid";

import ActionBar from "@admin_components/Shared/ActionBar";
import AdminSectionTitle from '@components/Admin/Shared/AdminSectionTitle/AdminSectionTitle';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

import Button from "@components/BasicElements/Button";

import { store } from '@store/adminInventory/store';

const InventoryPanel = () => {

    const toNewProductPage = () => {
        Router.push('/admin/panel/inventario/nuevo');
    }

    return (
        <Provider store={store}>
            <section className="p-4 sm:ml-64">
                <AdminSectionTitle title={"Inventario"} />
                <ActionBar>
                    <Button small fill onClick={toNewProductPage}>
                        <div className="flex align-middle">
                            <PlusIcon className="inline h-[20px] my-auto mr-1" />
                            Nuevo producto
                        </div>
                    </Button>
                </ActionBar>
                <SearchBar />
                <ProductList />
            </section>
        </Provider>
    )
}

export default InventoryPanel;