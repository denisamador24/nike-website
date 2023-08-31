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
import Nav from './components/Nav';
import './App.css'

function App() {

  return (
    <>
      <header className='padding-x absolute py-8 z-10 w-full'>
        <Nav />
      </header>
      <main className='relative'>
        <section className='xl:padding-l wide:padding-r padding-b'>
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