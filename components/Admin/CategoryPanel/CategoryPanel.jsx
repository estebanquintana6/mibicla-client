import React, { useState } from "react";

import AdminSectionTitle from "@components/Admin/Shared/AdminSectionTitle";

import NewCategory from "./NewCategory";
import CategoryList from "./CategoryList/CategoryList";

import axios from "@utils/axios";

const CategoryPanel = ({ categories }) => {

    const [categoryList, setCategoryList] = useState(categories);

    const fetchCategories = async () => {
        const { status, data } = await axios.get('/category');
        if (status === 200) {
            setCategoryList(data);
        }
    }

    return (
        <section className="sm:ml-64 p-5">
            <AdminSectionTitle title={"Categorías"} />
            <NewCategory fetchCategories={fetchCategories} />
            <CategoryList categories={categoryList} fetchCategories={fetchCategories} />
        </section>
    );
}

export default CategoryPanel