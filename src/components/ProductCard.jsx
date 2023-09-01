import { star } from "../assets/icons"

const ProductCard = ({ imgUrl, name, price }) => {
  return (
    <article className="flex flex-1 flex-col">

      {/* product image */}
      <img
        width={280}
        height={280}
        src={imgUrl}
        alt={name} />

      {/* icon and ranting */}
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          width={24}
          height={24}
          src={star}
          alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      {/* product name */}
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>

      {/* product price */}
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </article>
  )
}

export default ProductCard