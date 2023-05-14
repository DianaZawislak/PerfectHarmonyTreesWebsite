function Banner() {
  return (
    <div style={{ height: '600px' }} className="banner-container">
      <div className="flex flex-col items-center justify-center font-bold px-1 py-1 mb-1">
        <img
          src="https://cdn.discordapp.com/attachments/1103865788944875622/1107025245912703066/logonobrgd.png"
          width={500}
          className="rounded-md"
          height={500}
          alt="logo"
        />

{/*           <h1 className="text-5xl text-gray-900 font-milkshake mb-5">Perfect Harmony</h1>
        <h1 className="text-5xl text-gray-900 font-milkshake"> 
          <span className="text-gray-900">Trees and Gardens</span>
        </h1>  */}

        <p className="text-center mt-1 md:mt-2 text-white max-w-sm">
          Tree Trimming | Tree Removal | Garden and Playground Installations | And More!!!
        </p>
      </div>
    </div>
  );
}

export default Banner;

