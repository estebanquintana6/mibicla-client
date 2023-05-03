import React from 'react';

import AdminSectionTitle from '@components/BasicElements/AdminSectionTitle/AdminSectionTitle';
import ProductList from './ProductList';

const InventoryPanel = () => {
    return (
        <section className="p-4 sm:ml-64">
            <AdminSectionTitle title={"Inventario"} />
            <ProductList />
        </section>
    )
}

export default InventoryPanel;