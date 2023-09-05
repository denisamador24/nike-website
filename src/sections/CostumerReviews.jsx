import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants'

const CostumerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="font-palanquin text-center text-4xl font-bold">
        What Our?
        <span className="text-coral-red">Costumers</span>
        Say?
      </h2>

      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied costomers about their exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center flex-wrap gap-14">
        {reviews.map(review => (
          <ReviewCard
            key={review.customerName}
            imgUrl={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CostumerReviews