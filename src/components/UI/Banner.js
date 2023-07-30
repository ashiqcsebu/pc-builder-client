/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";


const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-5xl font-serif font-bold my-10 text-black">
          Welcome to Star Tech
        </h1>

        <h2 className="text-lg text-black font-serif text-justify px-4">
        StarTech.com is a Canadian technology manufacturer that specializes in hard-to-find connectivity parts that are primarily used in the information technology and professional A/V industries. StarTech.com services a worldwide market with operations throughout the United States, Canada, Europe, Latin America and Taiwan
        </h2>
        <br />
        <p className="text-lg text-black text-justify px-2 font-serif">
          Build Your Ultimate Gaming Rig, Create Your Content Powerhouse, or
          Assemble a Productivity Beast - The Choice is Yours! Let Your
          Imagination Run Wild and Craft Your Perfect PC, Tailored to Your Needs
          and Desires. Get Ready to Elevate Your Computing Experience - Start
          Exploring Now! by building with
          <Link href="/pc-builder" className="no-underline">
            <span className="text-2xl no-underline text-secondary p-2">
              Pc-Builder
            </span>
          </Link>
        </p>
      </div>

      <div className="carousel w-full my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/x3xBwNr/banner.png"
            className="w-full"
            width={400}
            height={600}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
       

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/sP5tJHL/banner2.webp"
            className="w-full"
            width={400}
            height={600}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/D1CXBmN/banner3.webp"
            className="w-full"
            width={400}
            height={600}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/BzzxJ2R/banner4.webp"
            className="w-full"
            width={400}
            height={600}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;