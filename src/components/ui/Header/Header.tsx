'use client';

import { FC } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { Button } from '../Buttons';
import { HeaderMenu, HeaderNav, HeaderRoot } from './Header.styles';

const Header: FC = () => {
  return (
    <>
      <HeaderRoot>
        <HeaderNav>
          <div>Celeste</div>
          <HeaderMenu>
            <li>Que hacemos</li>
            <li>Contacto</li>
          </HeaderMenu>
          <div>
            <Button endAdornment={MdArrowForward} $size="small">
              Súbe tus fotos
            </Button>
          </div>
        </HeaderNav>
      </HeaderRoot>
    </>
  );
};

export default Header;
