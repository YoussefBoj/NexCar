import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// Create a single 3D card demo component
export function ThreeDCardDemo3({source}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Quality at Minimum Expense
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Unlocking affordable brilliance with elavating quality
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={source}
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as={Link} to="/twitter-profile" target="_blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Learn more →
          </CardItem>
          <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Create the carousel container
export function ThreeDCardCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Display 3 cards at once
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-20 px-4">
      <Slider {...settings}>
        <div>
          <ThreeDCardDemo3 />
        </div>
        <div>
          <ThreeDCardDemo3 />
        </div>
        <div>
          <ThreeDCardDemo3 />
        </div>
      </Slider>
    </div>
  );
}
