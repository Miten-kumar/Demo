import React, { useState, useEffect } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import Image from "next/image";
import image from "/public/morning.png";
import imageTwo from "/public/afternoon.png";
import imageThree from "/public/evening.png";
import imageFour from "/public/night.png";
import Logo from "/logo.svg";
import LogoX from "/lodoX.svg";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrollY(scrollTop);
      const scrollThreshold = 250;
      setShow(scrollTop > scrollThreshold);
      // const scrollPosition = window.scrollY;
      // const elementPosition = document.getElementById("MyElement")?.offsetTop;
      // console.log(elementPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headingProps = useSpring({
    transform: `translateY(${-scrollY * 2}px)`,
    opacity: scrollY > 0 ? 0 : 1,
    config: { mass: 2, tension: 200, friction: 30 },
  });
  const headingPropsX = useSpring({
    transform: `translateY(${-scrollY * 5}px)`,
    opacity: scrollY > 0 ? 0 : 1,
    config: { mass: 5, tension: 2000, friction: 30 },
  });
  const lines = ["Home", "About", "Services", "Contact"];
  const trail = useTrail(lines.length, {
    from: { opacity: 0, transform: `translateY(${-scrollY * 3}px)` },
    to: { opacity: 2, transform: `translateY(${-scrollY * 2}px)` },
    config: { mass: 5, tension: 200, friction: 30 },
  });
  return (
    <>
      <div className="gradient">
        <animated.div
          className="absolute inset-10 flex justify-center  space-x-8"
          style={headingProps}
        >
          {trail.map((animation, index) => (
            <animated.div
              key={index}
              style={animation}
              className="navbar-line "
            >
              {lines[index]}
            </animated.div>
          ))}
        </animated.div>
        <div className="block inset-0 items-center justify-center">
          <animated.h1
            className="font-thin center-heading text-black text-6xl font-serif"
            style={headingProps}
          >
            <Image
              src={Logo}
              alt="Sahara Desert landscape"
              loading="lazy"
              width={150}
              height={310}
            />
          </animated.h1>{" "}
          <animated.h1
            className=" flex mt-32 animate-pulse   items-center justify-center  text-9xl center-heading text-green-700  font-serif "
            style={headingProps}
          >
            Liquid0x
          </animated.h1>
          <animated.h1 className="" style={headingPropsX}>
            <Image
              src={LogoX}
              alt="Sahara Desert landscape"
              loading="lazy"
              width={250}
              height={450}
              className="mt-2"
            />
          </animated.h1>
        </div>

        {/* //////////////////////////////////////////////////////////// */}
        <div className=" flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: show ? 1 : 0, x: show ? 0 : -500 }}
            transition={{ duration: 0.7 }}
          >
            <MDBCard className="m-10">
              <MDBCardText className=" flex items-center justify-center mt-2">
                Good afternoon
              </MDBCardText>
              <Image src={image} alt="Sahara Desert landscape" loading="lazy" />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: show ? 1 : 0,
              y: show ? 0 : -500,
              scale: show ? 1 : 0,
            }}
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(800px)",
            }}
            transition={{ duration: 0.4 }}
          >
            <MDBCard className="m-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Evening
              </MDBCardText>
              <Image
                src={imageThree}
                alt="Sahara Desert landscape"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: show ? 1 : 0, x: show ? 0 : 500 }}
            transition={{ duration: 0.8 }}
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(800px)",
            }}
          >
            <MDBCard className="m-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Night
              </MDBCardText>
              <Image
                src={imageFour}
                alt="Sahara Desert landscape"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </motion.div>
        </div>
        {/* card element//////////////////////////////////////////////////////////// */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: show ? 1 : 0, x: show ? 0 : 650 }}
            transition={{ duration: 0.8 }}
          >
            <MDBCard className="m-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Evening
              </MDBCardText>
              <Image
                src={imageThree}
                alt="Sahara Desert landscape"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: show ? 1 : 0,
              y: show ? 0 : -500,
              scale: show ? 1 : 0,
            }}
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(800px)",
            }}
            transition={{ duration: 0.7 }}
          >
            <MDBCard className="m-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Night
              </MDBCardText>
              <Image
                src={imageFour}
                alt="Sahara Desert landscape"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: show ? 1 : 0, x: show ? 0 : -500 }}
            transition={{ duration: 0.8 }}
          >
            {" "}
            <MDBCard className="m-10">
              <MDBCardText className=" flex items-center justify-center mt-2">
                Good afternoon
              </MDBCardText>
              <Image
                src={imageTwo}
                alt="Sahara Desert landscape"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </motion.div>{" "}
        </div>
      </div>
    </>
  );
};

export default App;
