import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ProductoCat = () => {
    
    const {categoria} = useParams()
    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            Título: {titulo}
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
export default ProductoCat