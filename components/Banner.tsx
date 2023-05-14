function Banner() {
  return (
    <div style={{ height: '600px' }}className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 banner-container">
      <div>
        <h1 className="text-5xl text-white">Perfect Harmony Trees and Gardens</h1>
        <h2 className="mt-5 md:mt-0">
          <span className="underline decoration-2 decoration-[#2c5f1f] text-white">
            Tree trimming, tree removal, garden and playground installations
          </span>
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | Create stunning websites effortlessly | And More!!!
      </p>
    </div>
  );
}

export default Banner;

<style>

</style>