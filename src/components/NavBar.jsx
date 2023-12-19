
import React from 'react'
import CartWidget from './CartWidget.jsx';
import { ChakraProvider, Flex, Box, Spacer, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <Flex>
            <Box p='4'>
                <Link to={'/'}>
                <p>AspenGrowShop</p> 
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        Nuestras genéticas
                        <span className="material-symbols-outlined">
                            psychiatry
                        </span>
                    </MenuItem>
                    <MenuItem>
                        Nuestras guías
                        <span className="material-symbols-outlined">
                            developer_guide
                        </span>
                    </MenuItem>
                    <MenuItem>
                        Te presupuestamos
                        <span className="material-symbols-outlined">
                            checkbook
                        </span>
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