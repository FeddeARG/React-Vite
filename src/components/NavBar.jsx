import React from 'react';
import CartWidget from './CartWidget.jsx';
import { Flex, Box, Spacer, Menu, MenuButton, Button, MenuList, MenuItem, Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Box backgroundColor='#A5B381'>
      <Flex p='4' alignItems='center'>
        <Link to={'/'}>
          <Heading size='xl' color='white'>
            Indumentaria
          </Heading>
        </Link>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color='green'>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to='/category/calzado' color='black'>
                Calzado
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/category/pantalón' color='black'>
                Pantalón
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/category/camisa' color='black'>
                Camisa
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Link to='/Cart'>
          <Box p='2' backgroundColor='#d2d9c1' borderRadius='md'>
            <CartWidget />
          </Box>
        </Link>
      </Flex>
    </Box>
  );
}

export default NavBar;
