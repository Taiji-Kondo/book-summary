import type { NextPage } from "next";
import {
  Avatar,
  Center,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Tag,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

const Book: NextPage = () => {
  return (
    <>
      <Center as={"header"} h={20} bgColor={"gray.200"}>
        <Container maxW={"1260px"}>
          <Heading as={"h1"}>Book</Heading>
        </Container>
      </Center>
      <Container maxW={"1260px"} py={10} overflowX={"auto"}></Container>
    </>
  );
};

export default Book;
