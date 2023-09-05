import Button from '../components/Button';
import { offer } from '../assets/images';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">

      {/* img */}
      <div className="flex-1">
        <img
          width={773}
          height={687}
          src={offer}
          alt="offer"
          className='object-contain w-full '
        />
      </div>

      <div className="flex flex-1 flex-col">

        {/* title */}
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block">
            Special
          </span>
          {' '}Offer
        </h2>

        {/* text */}
        <p className="mt-4 lg:max-w-lg info-text font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Embark on a shopping journey that redefiner your experience with unbeatable deals. From premier sellections to incredible savings, we offer unparalleled value that sets as apart.          </p>
        <p className='mt-6 lg:max-w-lg info-text '>
          Navigate a realm of possibilities desing to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now" icon={arrowRight} />
          <Button label="Learn more" variant="secondary" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer