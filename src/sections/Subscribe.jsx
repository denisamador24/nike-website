import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h2 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sing Up From
        <span className="text-coral-red"> Updates </span>
        & Newslatter
      </h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5  sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subcribe@nike.com"
          className="input"
        />
        <div className="flex max-">
          <Button label="Sing Up" />
        </div>
      </div>
    </section>
  )
}
export default Subscribe