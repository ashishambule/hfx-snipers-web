import s from './Footer.module.scss';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaYoutubeSquare
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by AA</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} hfxsnipers.com</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
          <li>
              <a
                href="https://www.facebook.com/hfx_snipers-101785449132714/"
                target="_blank"
                rel="noreferrer"
                className={s.socialIcon}
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/+9SpDOXVWd2AwZGI9"
                target="_blank"
                rel="noreferrer"
                className={s.socialIcon}
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/invites/contact/?i=1jxn0mrbgbx7y&utm_content=mem52er"
                target="_blank"
                rel="noreferrer"
                className={s.socialIcon}
              >
                <FaInstagram />
              </a>
            </li>
            <li>
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
    </div>
  );
};

export default Footer;
