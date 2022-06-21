import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUser,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

const NavLinks = () => {
  return (
    <>
      <ul className={s.navBar}>
        <li className={s.navNumber}>
          <FaPhone style={{ paddingTop: '5px' }} />
          <a
            href="tel:+91-9021209558"
            style={{ paddingLeft: '10px', paddingTop: '2px' }}
          >
            <span>+91-9021209558</span>
          </a>
        </li>
        <li>
          <NavLink to={routes.HOME} activeClassName={s.active} exact>
            <AiOutlineHome />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.OURSERSERVICES}
            activeClassName={s.active}
            exact
          >
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
            About Us
          </NavLink>
        </li>

        {/* <li>
        <NavLink to={routes.RESUME} activeClassName={s.active}>
          <CgFileDocument />
          FAQ's
        </NavLink>
      </li> */}
      </ul>
    </>
  );
};

export default NavLinks;
