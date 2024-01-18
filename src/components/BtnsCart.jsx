import React from 'react'
import { Button } from '@chakra-ui/react'

const BtnsCart = ( { stock, counter, min, sum } ) => {
    return (
        <div>
            {counter > 0 ? <Button colorScheme='red' size='sm' onClick={min}>Quitar</Button> : <Button disabled>Quitar</Button>}
            {counter < stock ? <Button colorScheme='green' size='sm' onClick={sum}>Agregar</Button> : <Button disabled>Agregar</Button>}
        </div>
    )
}

export default BtnsCart