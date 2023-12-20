
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
                    <p>Indumentaria Home</p>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <p>Calzados</p>
                    </MenuItem>
                    <MenuItem>
                        <p>Prendas inferiores</p>
                    </MenuItem>
                    <MenuItem>
                        <p>Prendas superiores</p>
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