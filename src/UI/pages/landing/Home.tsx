import ProductCard from "@UI/organisms/ProductCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box h={"100%"} w={"100%"}>
      <Grid templateColumns={`repeat(4,1fr)`} gap={6}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index: number) => (
          <GridItem key={index}>
            <ProductCard />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
