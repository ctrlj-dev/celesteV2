import { FC } from 'react';
import { Button } from '../Buttons';
import { HeaderMenu, HeaderNav, HeaderRoot } from './Header.styles';

const Header: FC = () => {
  return (
    <HeaderRoot>
      <HeaderNav>
        <div>Celeste</div>
        <HeaderMenu>
          <li>Que hacemos</li>
          <li>Contacto</li>
        </HeaderMenu>
        <div>
          <Button size="small">Sube tus fotos</Button>
        </div>
      </HeaderNav>
    </HeaderRoot>
  );
};

export default Header;
