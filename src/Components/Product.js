import React from 'react'
import "../Styles/Product.css"
import product from "../JSON/product.json"
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'

function Product() {

    const dispatch = useDispatch()

    return (
        <div className='product container-fluid w-100'>
            <div className='product__info row row-cols-1 row-cols-sm-2 row-cols-md-4'>
                {product.map((ele, i) =>
                    <div className='col'>
                        <div key={i} className="product__card card border-0 rounded-0 p-2 h-100">
                            <div className='card-title fs-5'>
                                {ele.title}<br />
                            </div>
                            <div className='card-body'>
                                <div className='product__rating'>
                                    {Array(ele.rating)
                                        .fill()
                                        .map((_) => (
                                            <StarIcon className='product__ratingStar' />
                                        ))
                                    }<br />
                                </div>
                                <p className='product__price'>
                                    <small>$</small>
                                    <strong>{ele.price}</strong><br />
                                </p>
                                <img className='product__image' src={ele.image} alt='' />
                            </div>
                            <div className='card-footer bg-white border-0 mx-auto d-grid col-6'>
                                <button className='product__button btn btn-sm btn-warning border-dark rounded-0'
                                    onClick={() => dispatch(addToCart(ele))}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product