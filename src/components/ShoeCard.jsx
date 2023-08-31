const ShoeCard = ({ imgURL, changeImage, bigShoeImage }) => {

  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeImage(imgURL.bigShoe)
    }
  }

  const selectedCardClass = (bigShoeImage === imgURL.bigShoe
    ? 'border-coral-red'
    : 'border-transparent'
  )
  return (
    <div
      className={`border-2 rounded-xl ${selectedCardClass} cursor-pointer max-sm:flex-1 flex justify-center items-center bg-card bg-center bg-cover bg-no-repeat sm:w-40 sm:h-40 rounded-xl max-sm:p-4`}
      onClick={handleClick}
    >
      <img
        width={127}
        height={103}
        src={imgURL.thumbnail}
        alt="shoe collection"
        className="object-contain"
      />
    </div>
  )
}

export default ShoeCard