import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'



const Item = ({ titulo, descripcion, valor }) => {
  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Image src="" />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{titulo}</Heading>
            <Text>
              {descripcion}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {valor}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <ItemCount />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Item




// CLASE 6 2Hs 05 Min. CONTINUAR CON CARDS DE CHAKRA 