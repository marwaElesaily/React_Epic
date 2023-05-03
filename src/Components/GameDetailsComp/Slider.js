import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = (props) => {
  //   <ReactPlayer
  //   url={game.VideoURL}
  //   playing={true}
  //   muted={true}
  //   width={"100%"}
  //   className="block w-full"
  // />
  const game = props.game;
  let photosSlider;
  if (game.photos) {
    photosSlider = game.photos.map((url) => {
      return (
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style={{ "backface-visibility": "hidden" }}
        >
          <img src={url} className="block w-full" alt="..." />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"></div>
        </div>
      );
    });
  }
  return (
    <div class="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showThumbs
      >
        <div>
          <ReactPlayer
            url={game.VideoURL}
            playing={true}
            muted={true}
            width={"100%"}
            className="block w-full"
          />
        </div>
        <div>
          <img src={game.photos && game.photos[0]} alt="" />
        </div>
        <div>
          <img src={game.photos && game.photos[1]} alt="" />
        </div>
        <div>
          <img src={game.photos && game.photos[2]} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
