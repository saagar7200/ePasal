import {
  SignInWithFacebook,
  SignInWithGoogle,
} from "@UI/common/atoms/IconButton";
import { CancelButton, SaveButton } from "@UI/common/atoms/TextButton";
import ProductCard from "@UI/organisms/ProductCard";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box h={"100%"} w={"100%"} px={4}>
      <Grid
        templateColumns={{
          sm: `repeat(1,1fr)`,
          md: `repeat(3,1fr)`,
          lg: `repeat(4,1fr)`,
          xl: `repeat(5,1fr)`,
        }}
        gap={6}
      >
        <Flex gap={5}>
          <SignInWithGoogle />
          <SignInWithFacebook />
        </Flex>
        <Flex gap={5}>
          <SaveButton />
          <CancelButton />
        </Flex>

        {Array.from({ length: 100 }).map((_, index: number) => (
          <GridItem key={index}>
            <ProductCard />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
