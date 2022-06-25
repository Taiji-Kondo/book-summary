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
  chakra,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Post } from "../generated/payload-types";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { PostsDocument, PostsQuery } from "../generated/graphql";

const DUMMY: Post[] = [
  {
    id: "1",
    title: "dummy1",
    user: "Admin User",
    author: "dummy author1",
    category: [
      {
        id: "1",
        name: "dummy category1",
      },
      {
        id: "2",
        name: "dummy category2",
      },
    ],
    content: [
      {
        text: "dummy",
      },
    ],
    displayImage: {
      id: "1",
      url: "dummy1.png",
    },
  },
  {
    id: "2",
    title: "long dummy2 long dummy2 long dummy2 long dummy2",
    user: "Long Name User Long Name User",
    author: "dummy author2",
    category: [
      {
        id: "1",
        name: "long dummy category long dummy category long dummy category",
      },
      {
        id: "2",
        name: "long dummy category long dummy category long dummy category",
      },
    ],
    content: [
      {
        text: "dummy",
      },
    ],
    displayImage: {
      id: "2",
      url: "dummy2.png",
    },
  },
];

const Home: NextPage = () => {
  const { loading, error, data } = useQuery<PostsQuery>(PostsDocument);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>データの取得に失敗しました</Text>;
  }

  console.log(data);

  return (
    <>
      <Center as={"header"} h={20} bgColor={"gray.200"}>
        <Container maxW={"1260px"}>
          <Heading as={"h1"}>Posts</Heading>
        </Container>
      </Center>
      <Container maxW={"1260px"} py={10} overflowX={"auto"}>
        <VStack align={"stretch"} spacing={3} divider={<Divider />}>
          {data?.Posts?.docs?.map((post) => (
            <Link href={`/books/${post?.id}`} key={post?.id}>
              <chakra.a cursor={"pointer"}>
                <Grid
                  as={"article"}
                  style={{ gridTemplateColumns: "50% 1fr auto" }}
                  gap={3}
                  alignItems={"center"}
                >
                  <Heading as={"h1"} fontSize={"md"} noOfLines={1}>
                    {post?.title}
                  </Heading>
                  <HStack ml={"auto"} spacing={1}>
                    {post?.category?.map((item) => {
                      return (
                        <Tooltip key={item?.name} label={item?.name}>
                          <Tag
                            colorScheme={"teal"}
                            size={"sm"}
                            p={1}
                            fontWeight={"bold"}
                            lineHeight={1.8}
                            noOfLines={1}
                          >
                            {item?.name}
                          </Tag>
                        </Tooltip>
                      );
                    })}
                  </HStack>
                  <Tooltip label={post?.user?.name}>
                    <Avatar
                      size={"sm"}
                      bgColor={"gray.400"}
                      name={post?.user?.name ?? ""}
                    />
                  </Tooltip>
                </Grid>
              </chakra.a>
            </Link>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default Home;
