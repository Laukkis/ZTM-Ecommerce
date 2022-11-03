import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { fetchCategoriesStart } from "../../store/categories/category.action";

import CategoriesPreview from '../categories/categories-preview'
import Category from '../category/category'

import './shop.styles.scss'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )

}

export default Shop;
