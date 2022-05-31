import s from './Contactus.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import avatar from '../../assets/avatar.svg';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaYoutubeSquare
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>

        <div className={s.introSocial}>
          <h1>FIND US ON</h1>
          <p>
            Feel free to <span className={s.purple}>connect </span>with
            us
          </p>
          <ul className={s.socialLinks}>
            <li className={s.socialLink}>
              <a
                href="https://www.facebook.com/hfx_snipers-101785449132714/"
                target="_blank"
                rel="noreferrer"
                className={s.socialIcon}
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li className={s.socialLink}>
              <a
                href="https://t.me/+9SpDOXVWd2AwZGI9"
                target="_blank"
                rel="noreferrer"
                className={s.socialIcon}
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className={s.socialLink}>
              <a
                href="https://www.instagram.com/invites/contact/?i=1jxn0mrbgbx7y&utm_content=mem52er"
                target="_blank"
                rel="noreferrer"
                className={s.socialIcon}
              >
                <FaInstagram />
              </a>
            </li>
            <li className={s.socialLink}>
              <a
                href="https://www.youtube.com/channel/UCkfhhRUNoNJR1OvFiqDlTfw"
                target="_blank"
                rel="noreferrer"
                className={s.socialIcon}
              >
                <FaYoutubeSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
