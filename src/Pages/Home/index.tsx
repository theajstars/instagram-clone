import { useState } from "react";

import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandMessenger,
  IconDotsVertical,
  IconHeart,
  IconSend,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

import { generateRandomNumber, stories } from "../../Lib/Data";
import Logo from "../../Assets/IMG/Logo.svg";
import HeartIcon from "../../Assets/IMG/Icons/Heart.svg";
import SendIcon from "../../Assets/IMG/Icons/Send.svg";
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
          <img src={HeartIcon} />
          &nbsp; &nbsp; &nbsp;
          <img src={SendIcon} />
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
              <Text c="#fff" fw={700} fz="14px">
                {currentStory === "Your Story" ? "theajstars" : currentStory}
              </Text>
              <Text c="#e6e6e6" fz="13px" ml={10}>
                {generateRandomNumber()}m
              </Text>
            </div>
            <span className="dots">
              <IconDotsVertical color="#fff" />
            </span>
          </div>
          <div className="footer flex-row align-center justify-between width-100">
            <input
              type="text"
              className="input"
              placeholder="Send message"
              spellCheck={false}
            />
            <img src={SendIcon} />
            <img src={HeartIcon} />
          </div>
        </div>
      )}
    </div>
  );
}
