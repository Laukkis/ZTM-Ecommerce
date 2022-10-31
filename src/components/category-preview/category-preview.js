import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { selectFavorites } from '../../store/favorites/favorites.selector';

import ProductCard from '../product-card/product-card';
import './category-preview.styles.scss'



const CategoryPreview = ({ title, products }) => {
    const favorites = useSelector(selectFavorites)

    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) =>
                            <ProductCard key={product.id} product={product} favorites={favorites} />
                        )
                }
            </div>
        </div>
    )
}

export default CategoryPreview;