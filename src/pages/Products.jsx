import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import Sort from '../components/sort';
import { Products } from '../components';
const Products2 = () => {
    const [sortedProduct, setSortedProduct] = useState(null)
    const { data, error, loading } = useFetch('https://fakestoreapi.com/products');
  return (
    <div>
        <Sort products={data} setSortedProduct={setSortedProduct}/>
              {loading ? (
        <div className="text-center text-5xl text-gray-400 py-20">
          <i className="fa fa-circle-notch fa-spin"></i>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-20">
          <p>Error: {error}</p>
        </div>
      ) : (
        <Products products={sortedProduct || data} />
      )}
    </div>
  )
}

export default Products2