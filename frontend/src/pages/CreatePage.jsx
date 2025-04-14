import { Container, useColorModeValue, Box, Input, Button} from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

import { VStack } from '@chakra-ui/react';
import { useProductStore } from '../Store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
       name: "",
       price: "",
       image: "",
  });
  
  const {createProduct}=useProductStore()
  const handleAddProduct = async() => {
   const {success,message} = await createProduct(newProduct);
   console.log("Success", success);
   console.log("Message", message);

  };
  return <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <heading as={"h1"} size={"2xl"} textAlign={"center"} mb={9}>
          Create New Product
        </heading>
        <Box
         w={"full"} bg={useColorModeValue("white", "gray.800")}
         p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
              <Input
                placeholder='Product Name'
                name='name'
                value= {newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              />
              
              <Input
                placeholder='Price'
                name='price'
                value= {newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              />

              <Input
                placeholder='Image URL'
                name='image'
                value= {newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
              />
          </VStack>
        <Button colorScheme='blue' onClick={handleAddProduct} w='full' mt={8}>
          Add Product
        </Button>
        </Box>
      </VStack>
  </Container>
};

export default CreatePage