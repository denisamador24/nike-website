import { star } from "../assets/icons"

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <article className="flex justify-center items-center flex-col">
      <img
        width={120}
        height={120}
        src={imgUrl}
        alt="Costumer"
        className="rounded-full object-cover" />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          width={24}
          height={24}
          src={star}
          alt="start icon" />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">
        {customerName}
      </h3>
    </article>
  )
}

export default ReviewCard