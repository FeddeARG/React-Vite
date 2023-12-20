import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import ItemListContainer from './ItemListContainer'

const ItemDetail = ({ titulo, categoria, descripcion, valor }) => {
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            <div>Título: {titulo}</div>
                        </Heading>
                        <Text>Categoría: {categoria}</Text>
                        <Text>Descripción: {descripcion}</Text>
                        <Text color='blue.600' fontSize='2xl'>Valor: $ {valor}</Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount />
                    </ButtonGroup>
                </CardFooter>
                <Divider />
            </Card>
        </div>
    )
}
export default ItemDetail