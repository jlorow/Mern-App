import React, { useEffect } from 'react'
import { Container, SimpleGrid ,Text, Link, VStack} from '@chakra-ui/react';
import { useProductStore } from '../Store/product';
import ProductCard from '../components/ProductCard';


const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);
  return (
   <Container max='container.xl' py={12}>
      <VStack spacing={8}>
          <Text 
          fontSize={'30'}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyna.400, blue"}
          textAlign={"center"}>
            Current Products 🚀
          </Text>
           <SimpleGrid 
              columns ={
                {
                  base:1,
                  md: 2,
                  lg: 3
                }}
                spacing={10}
                w={"full"}
                >
            {products.map((product) => (
              <ProductCard key={product._id} product={product}/>
            ))}
           </SimpleGrid>
      {products.length === 0 && (
            <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'> 
            No products found 😢{" "} 
            <Link to={"/create"}> 
              <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}> 
              Create a product 
              </Text> 
            </Link> 
          </Text>
      )}
      </VStack>
   </Container>
  )
}

export default HomePage;