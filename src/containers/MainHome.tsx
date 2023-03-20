export const MainHome = () => {
  return (
    <main className='mt-3 flex flex-col justify-center gap-5 text-center md:flex-row-reverse md:px-9 md:mt-10 md:items-center lg:mt-10 lg:px-14 xl:px-32 xl:mt-20'>
      <section className="lg:w-[40%] xl:w-[35%]">
        <img className="mx-auto text-center md:hidden" src="/images/image-hero-mobile.png" alt="image-hero-mobile" />
        <img className="mx-auto text-center hidden md:block lg:w-full lg:h-[500px]" src="/images/image-hero-desktop.png" alt="image-hero-mobile" />
      </section>
      <section className="flex flex-col gap-4 md:gap-7 lg:flex-1">
        <h1 className='text-3xl font-bold md:text-5xl md:text-left lg:text-6xl lg:pr-10 xl:text-8xl xl:pr-24'>Make remote work</h1>
        <p className='text-[15px] px-5 text-mediumGray font-medium md:text-left md:px-0 lg:w-96 xl:w-[500px]'>Get your team in sync, no matter your location. Streamline precesses, create team rituals, and watch productivity soar.</p>
        <button className='text-almostWhite bg-almostBlack border-2 border-almostBlack hover:text-almostBlack hover:bg-almostWhite w-max mx-auto px-4 py-3 rounded-xl md:mx-0'>Learn more</button>
        <div className='flex justify-between px-3 mt-5  md:mt-10 lg:justify-start lg:gap-5 xl:gap-16'>
          <img className='w-16 h-7 object-contain' src="/images/client-databiz.svg" alt="client-databiz" />
          <img className='w-16 h-7 object-contain' src="/images/client-audiophile.svg" alt="client-audiophile" />
          <img className='w-16 h-7 object-contain' src="/images/client-meet.svg" alt="client-meet" />
          <img className='w-16 h-7 object-contain' src="/images/client-maker.svg" alt="client-maker " />
        </div>
      </section>
    </main>
  )
}
