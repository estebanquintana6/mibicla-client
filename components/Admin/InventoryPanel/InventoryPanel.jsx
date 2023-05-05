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

    const toCategoryPage = () => {
        Router.push('/admin/panel/categoria');
    }

    const toNewBrandPage = () => {
        Router.push('/admin/panel/marca/nuevo');
    }

    return (
        <Provider store={store}>
            <section className="p-4 sm:ml-64">
                <AdminSectionTitle title={"Inventario"} />
                <ActionBar>
                    <div className='flex xs:flex-wrap md:flex-nowrap'>
                        <Button small fill onClick={toNewProductPage} className="mx-2 xs:mt-2 md:mt-0 xs:w-[150pt] md:w-auto">
                            <div className="flex align-middle">
                                <PlusIcon className="inline h-[20px] my-auto mr-1 xs:ml-auto" />
                                <span className="xs:mr-auto">Nuevo producto</span>
                            </div>
                        </Button>
                        <Button small fill onClick={toCategoryPage} className="mx-2 xs:mt-2 md:mt-0 xs:w-[150pt] md:w-auto">
                            <div className="flex align-middle">
                                <PlusIcon className="inline h-[20px] my-auto mr-1 xs:ml-auto" />
                                <span className="xs:mr-auto">Categorías</span>
                            </div>
                        </Button>
                        <Button small fill onClick={toNewBrandPage} className="ml-2 xs:mt-2 md:mt-0 xs:w-[150pt] md:w-auto">
                            <div className="flex align-middle">
                                <PlusIcon className="inline h-[20px] my-auto mr-1 xs:ml-auto" />
                                <span className="xs:mr-auto">Marcas</span>
                            </div>
                        </Button>
                    </div>
                </ActionBar>
                <SearchBar />
                <ProductList />
            </section>
        </Provider>
    )
}

export default InventoryPanel;