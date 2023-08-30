import {
  Hero,
  CostumerReviews,
  PopularProducts,
  Footer,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality
} from './sections';
import './App.css'

function App() {

  return (
    <>
      <main>
        <section className='xl:padding-1 wide:padding-r padding-b'>
          <Hero />
        </section>
        <section className='padding'>
          <PopularProducts />
        </section>
        <section className='padding'>
          <SuperQuality />
        </section>
        <section className='bg-pale-blue'>
          <CostumerReviews />
        </section>
        <section className='padding-x sm:py-32 w-full'>
          <Subscribe />
        </section>
      </main>
      <footer className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </footer>
    </>
  )
}

export default App
