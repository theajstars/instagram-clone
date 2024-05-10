import { useState } from "react";

import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandMessenger, IconHeart } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

import { stories } from "../../Lib/Data";
import Logo from "../../Assets/IMG/Logo.svg";
import Avatar from "../../Assets/IMG/Stories/IMG-20240510-WA0013.jpg";
import "./styles.scss";

export default function Home() {
  const [animatingStory, setAnimatingStory] = useState<number>(-1);
  const [currentStory, setCurrentStory] = useState<string>("");
  const [isStoryModalOpen, { open: OpenStoryModal, close: CloseStoryModal }] =
    useDisclosure(false);
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
        slideSize="12%"
        slideGap="xs"
        align="start"
        slidesToScroll={3}
        withControls={false}
      >
        {stories.map((story, index) => {
          return (
            <Carousel.Slide>
              <div className="flex-col story-container align-center justify-between">
                <div className={`story  story-${index + 1}`}>
                  <div
                    className={`image ${
                      animatingStory === index ? "image-animate" : ""
                    }`}
                    onClick={() => {
                      setAnimatingStory(index);
                      setCurrentStory(story);
                      setTimeout(() => {
                        setAnimatingStory(-1);
                      }, 300);
                      OpenStoryModal();
                    }}
                  ></div>
                </div>
                <Text fz="sm" c="white">
                  {story}
                </Text>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      {isStoryModalOpen && (
        <div className="story-open">
          <div className="header flex-row align-center justify-between width-100">
            <div className="left flex-row align-center">
              <img src={Avatar} className="avatar" alt="" />
              <Text c="#fff" fw={700} fz="sm">
                {currentStory}
              </Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
