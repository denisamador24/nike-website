import ProductCard from '../components/ProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>

        {/* title */}
        <h2 className='text-4xl font-palanquin font-bold'>
          Our
          <span className='text-coral-red'> Popular </span>
          Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray"'>
          Experience top-notch quality and style with our sought-after selections. Discover a world af comfort, desing, and value
        </p>
      </div>

      {/* products */}
      <div className='mt-16 grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {products.map(product => (
          <ProductCard
            key={product.name}
            imgUrl={product.imgURL}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts