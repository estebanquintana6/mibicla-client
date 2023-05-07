import React, { useState } from "react";

import AdminSectionTitle from "@components/Admin/Shared/AdminSectionTitle";

import NewBrand from "./NewBrand";
import BrandList from "./BrandList/BrandList";

import axios from "@utils/axios";

const BrandPanel = ({ brands }) => {

    const [brandList, setBrandList] = useState(brands);

    const fetchBrands = async () => {
        const { status, data } = await axios.get('/brands');
        if (status === 200) {
            setBrandList(data);
        }
    }

    return (
        <section className="sm:ml-64 p-5">
            <AdminSectionTitle title={"Marcas"} />
            <NewBrand fetchBrands={fetchBrands} />
            <BrandList brands={brandList} fetchBrands={fetchBrands} />
        </section>
    );
}

export default BrandPanel;