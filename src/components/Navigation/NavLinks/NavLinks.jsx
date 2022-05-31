import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUser,
  AiOutlineQuestionCircle
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.OURSERSERVICES} activeClassName={s.active} exact>
          <CgFileDocument />
          Our Services
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.CONTACT} activeClassName={s.active}>
          <AiOutlineContacts />
          Contact Us
        </NavLink>
      </li>
      {/* <li>
        <NavLink to={routes.FAQ} activeClassName={s.active}>
          <AiOutlineQuestionCircle />
          FAQ's
        </NavLink>
      </li> */}
      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
          <AiOutlineUser />
          Our Story
        </NavLink>
      </li>

      {/* <li>
        <NavLink to={routes.RESUME} activeClassName={s.active}>
          <CgFileDocument />
          FAQ's
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
