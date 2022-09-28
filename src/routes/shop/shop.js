import { Routes, Route } from 'react-router-dom'
import './shop.styles.scss'

import CategoriesPreview from '../categories/categories-preview'
import Category from '../category/category'

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )

}

export default Shop;
