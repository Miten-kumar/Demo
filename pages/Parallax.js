import React from "react";
import Image from "next/image";
import image from "/public/morning.png";
import imageTwo from "/public/afternoon.png";
import imageThree from "/public/evening.png";
import imageFour from "/public/night.png";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
const parallax = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner style={{ aspectRatio: "2/1" }}>
        <ParallaxBannerLayer speed={-20}>
          <Image src={image} alt="Sahara Desert landscape" loading="lazy" />
        </ParallaxBannerLayer>{" "}
        <ParallaxBannerLayer speed={-70} translateX={["200px", "0px"]}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Good morning!🌄️</h1>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer speed={-10}>
          <Image src={imageTwo} alt="Sahara Desert landscape" loading="lazy" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-70} translateX={["0px", "500px"]}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">
              Good Afternoon!🌄️
            </h1>
          </div>{" "}
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer speed={-10}>
          <Image
            src={imageThree}
            alt="Sahara Desert landscape"
            loading="lazy"
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
          speed={-70}
          translateX={["300px", "px"]}
          // scale={[0.75, 1]}
          rotate={[0, 50]}
          // easing="easeInQuad"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Good Evening!🌇️</h1>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer speed={30}>
          <Image src={imageFour} alt="Sahara Desert landscape" loading="lazy" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-70}>
          <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl text-white font-thin">Good night!🌃</h1>
          </div>
        
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default parallax;
