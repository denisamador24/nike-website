import Button from '../components/Button';
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 -full max-container"
    >
      <div className="flex flex-1 flex-col">

        {/* title */}
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You{' '}
          <span className="text-coral-red inline-block">
            Super
          </span>
          <br />
          <span className="text-coral-red inline-block">
            Quality
          </span>
          {' '}Shoes
        </h2>

        {/* text */}
        <p className="mt-4 lg:max-w-lg info-text font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <p className='mt-6 lg:max-w-lg info-text '>
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className='mt-11'>
          <Button label="View Details" />
        </div>
      </div>

      <div>
        <img
          width={570}
          height={522}
          src={shoe8}
          alt="shoe"
          className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality