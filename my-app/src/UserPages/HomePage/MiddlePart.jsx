import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Caraousel";
import Carousel2 from "./Caraousel2";
import Carousel3 from "./Caraousel3";
import Carousel4 from "./Caraousel4";
import Carousel5 from "./Caraousel5";
import Carousel6 from "./Caraousel6";
import "./middlestyle.css";

const MiddlePart = () => {
  return (
    <div>
      <Carousel/>
      <Box >
        <Image
          className="scaleImg"
          src="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg"
          alt="below first carosel"
          width="100%"
        />
        <Image
          className="scaleImg"
          src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg"
          alt="idbi bank"
          width="100%"
        />
        <Carousel2 />
        <Carousel3 />
        <Box>
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Sectionheader.jpg"
            alt="below third carosel"
            width="100vw"
          />
          <Flex marginTop="-2px">
            <Image
              className="scaleImg"
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg"
              alt="reward section1"
              width="33%"
            />
            <Image
              className="scaleImg"
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Relianceone.jpg"
              alt="reward section2"
              width="34%"
            />
            <Image
              className="scaleImg"
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-inviteFriends.jpg"
              alt="reward section3"
              width="33%"
            />
          </Flex>
        </Box>
        <Box>
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-SectionHeader.jpg"
            alt="below reward section"
            width="100vw"
          />
          <Flex marginTop="-2px">
            <Image
              className="scaleImg"
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg"
              alt="reward section1"
              width="25%"
            />
            <Image
              className="scaleImg"
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg"
              alt="reward section2"
              width="25%"
            />
            <Image
              className="scaleImg"
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P3-Adidas-4060.jpg"
              alt="reward section3"
              width="25%"
            />
            <Image
              className="scaleImg"
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P4-Campus-Upto60.jpg"
              alt="reward section3"
              width="25%"
            />
          </Flex>
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FlashDealsHeaderStrip.jpg"
            alt="steal deal"
            width="100vw"
          />
          <Carousel4 />
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-Sectionheader.jpg"
            alt="below 4th carousel"
            width="100vw"
            marginTop="-22px"
          />
        </Box>
        <Carousel5 />
        <Image
          className="scaleImg"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-JIT-Sectionheader.jpg"
          alt="below reward section"
          width="100vw"
          marginTop="-22px"
        />
        <Carousel6 />
        <Image
          className="scaleImg"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-Sectionheader.jpg"
          alt="below carousel 6"
          width="100vw"
          marginTop="-22px"
        />
      </Box>
      <Box>
        <Flex marginTop="-2px">
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P1-GAP-Upto25.jpg"
            alt="ajio exclusive"
            width="25%"
          />
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P2-Produkt-Upto50.jpg"
            alt="ajio exclusive"
            width="25%"
          />
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P3-Arbunore-Min50.jpg"
            alt="ajio exclusive"
            width="25%"
          />
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P4-Avaasa-Min30.jpg"
            alt="ajio exclusive"
            width="25%"
          />
        </Flex>
      </Box>
      <Image
        className="scaleImg"
        src="https://assets.ajio.com/cms/AJIO/WEB/UHP-AJIOBeauty-1440x397.jpg"
        alt="below exclusive"
        width="100%"
      />
      <Image
        className="scaleImg"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-SectionHeader.jpg"
        alt="below exclusive2"
        width="100%"
      />
      <Box>
        <Flex marginTop="-2px">
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P1-SportsCasualShoes-ReebokPuma-Starting1199.jpg"
            alt="accesories"
            width="25%"
          />
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P2-CasioFossil-Watches-Upto70.jpg"
            alt="accesories"
            width="25%"
          />
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P3-FlipFlopsSandals-AdidasCampus-Starting299.jpg"
            alt="accesories"
            width="25%"
          />
          <Image
            className="scaleImg"
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P4-Home-GoodomesHomecentre-upto80.jpg"
            alt="accesories"
            width="25%"
          />
        </Flex>
      </Box>
    </div>
  );
};

export default MiddlePart;
