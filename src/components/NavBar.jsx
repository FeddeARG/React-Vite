
import React from 'react'
import CartWidget from './CartWidget.jsx';
import { Flex, Box, Spacer, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <Flex>
            <Box p='4'>
                <Link to={'/'}>
                    <h1>Indumentaria </h1>
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
            <Box p='4'>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    );
}

export default NavBar;