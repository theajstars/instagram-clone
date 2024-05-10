import { Text } from "@mantine/core";

import { IconBrandMessenger, IconHeart } from "@tabler/icons-react";

import Logo from "../../Assets/IMG/Logo.svg";

import "./styles.scss";
import { stories } from "../../Lib/Data";
import { Carousel } from "@mantine/carousel";

export default function Home() {
  return (
    <div className="home-container flex-col">
      <div className="flex-row align-center justify-between width-100 header">
        <img src={Logo} className="logo" />
        <div className="right flex-row align-center">
          <IconHeart size={28} color="white" />
          &nbsp; &nbsp; &nbsp;
          <IconBrandMessenger size={28} color="white" />
        </div>
      </div>

      <Carousel
        className="stories"
        height={200}
        slideSize="20%"
        slideGap="md"
        align="start"
        slidesToScroll={3}
        withControls={false}
      >
        {stories.map((story, index) => {
          return (
            <Carousel.Slide>
              <div className="flex-col story-container align-center justify-center">
                <div className={`story story-${index + 1}`}>
                  <div className="image"></div>
                </div>
                <Text fz="sm" c="white">
                  {story}
                </Text>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
}
