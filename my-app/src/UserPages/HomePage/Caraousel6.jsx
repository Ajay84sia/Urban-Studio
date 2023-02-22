import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel6() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P1-Brands-min50+extra30.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P2-Brands-30-50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P3-Brands-under499.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P4-Brands-Min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P5-Brands-Flat60.jpg",
  ];

  return (
    <Box
      position={"relative"}
      height={"420px"}
      width={"full"}
      overflow={"hidden"}
      //   paddingTop="66px"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt color="black" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt color="black" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="auto"
            backgroundRepeat="no-repeat"
            backgroundSize="99vw auto"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
