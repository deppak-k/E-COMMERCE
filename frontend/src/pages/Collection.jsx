import React, { use, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {
  const {products , search , showsearch} = useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toogleCategory =(e) => {
    if(Category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev=> [...prev, e.target.value]);
    }
  }

  const toogleSubCategory = (e) => {
    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev=> [...prev, e.target.value]);
    }
  }

  const applyFilter =() => {
    let productsCopy = products.slice();

    if(showsearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(Category.length > 0){
      productsCopy = productsCopy.filter(item => Category.includes(item.category));
    }

    if(SubCategory.length > 0){
      productsCopy = productsCopy.filter(item => SubCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }

  // This function can be used to sort products based on price or relevance
  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        // Default is relevance, so no sorting needed
        break;
    }
  }



  useEffect(() => {
    applyFilter();
  },[Category, SubCategory, search, showsearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filteroption */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${ShowFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex-gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toogleCategory} /> Men
            </p>
            <p className='flex-gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toogleCategory} /> Women
            </p><p className='flex-gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toogleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex-gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toogleSubCategory} /> Topwear
            </p>
            <p className='flex-gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toogleSubCategory} /> Bottomwear
            </p><p className='flex-gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toogleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>

          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Product sort */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm  px-2 '>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Price (Low to High)</option>
              <option value="high-low">Sort by: Price (High to Low)</option>
            </select>

          </div>

          {/* Map Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}/>
              ))
            }

          </div>
      </div>
    </div>
  )
}

export default Collection
