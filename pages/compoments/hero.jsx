const Hero = () => {
  return (
    <div className="flex w-3/5 m-auto justify-between mb-36">
      <div className="flex flex-col gap-6">
        <p className="font-bold text-sm text-red-600">
          Let’s shift your business
        </p>
        <h1 className="font-bold text-6xl">
          Shift your business <br /> fast with Shade Pro.
        </h1>
        <p className="text-lg font-normal">
          With lots of unique blocks, you can easily build a page <br /> without
          coding. Build your next consultancy website within <br /> few minutes.
        </p>
        <button className="font-bold text-lg bg-blue-600 text-white w-56 h-14 rounded-lg">
          Get started a project
        </button>
      </div>
      <img src="/images/hero-img.png" alt="photo-hero" className="w-96 h-96" />
    </div>
  );
};
export default Hero;
