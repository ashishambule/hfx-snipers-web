import s from './MainNavigation.module.scss';
import { useState } from 'react';
import Media from 'react-media';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Burger from '../Burger/Burger';
import BtnToggleTheme from '../../BtnToggleTheme/BtnToggleTheme';
import Logo from '../../Logo/Logo';

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Logo className={s.desktop} />
      <p className={s.typewriterWrapperD}>
        <span>HFX</span>
        <span>
          <b className={s.hfxLogoTitle}> SNIPERS</b>
        </span>
      </p>
      <nav className={s.desktopOptions}>
        <NavLinks />
        <BtnToggleTheme />
      </nav>

      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <Burger onClick={toggleDrawer} />

            <Logo className={s.mobile} />

            <BtnToggleTheme className={s.mobile} />
          </>
        )}
      </Media>

      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={s.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );
};

export default MainNavigation;
