
import React from 'react'
import CartWidget from './CartWidget.jsx';
import { ChakraProvider, Flex, Box, Spacer, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


function NavBar() {
    return (
        <Flex>
            <Box p='4'>
                AspenGrowShop
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        Nuestras genéticas
                        <span class="material-symbols-outlined">
                            psychiatry
                        </span>
                    </MenuItem>
                    <MenuItem>
                        Nuestras guías
                        <span class="material-symbols-outlined">
                            developer_guide
                        </span>
                    </MenuItem>
                    <MenuItem>
                        Te presupuestamos
                        <span class="material-symbols-outlined">
                            checkbook
                        </span>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='4'>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <CartWidget />
            </Box>
        </Flex>
    );
}

export default NavBar;