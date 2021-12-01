import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FaBath, FaBed } from "react-icons/fa";

import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "../assets/images/house.jpg";
import millify from "millify";

export const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex
        flexWrap="wrap"
        w="420px"
        p="5"
        padding="0"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          <Image
            width={400}
            height={260}
            alt="house"
            src={coverPhoto ? coverPhoto.url : defaultImage}
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="1g">
                AED{millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms}
            <FaBed />|{baths}
            <FaBath />|{millify(area)} sqft
            <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};
