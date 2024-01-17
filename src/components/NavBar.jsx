
import React from 'react'
import CartWidget from './CartWidget.jsx';
import { Flex, Box, Spacer, Menu, MenuButton, Button, MenuList, MenuItem, Heading } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <Box backgroundColor='#A5B381'>
        <Flex>
            <Box p='4' backgroundColor='#d2d9c1'>
                <Link to={'/'}>
                    <Heading size='xl'>Indumentaria </Heading>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to='/category/calzado'>
                            <p>Calzado</p>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/category/pantalon'>
                            <p>Pantalon</p>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/category/camisa'>
                            <p>Camisa</p>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='4' backgroundColor='#d2d9c1'>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
        </Box>
    );
}

export default NavBar;