import s from './Contactus.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import avatar from '../../assets/avatar.svg';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaYoutubeSquare,
  FaMailBulk,
  FaPhone,
  FaMapMarker,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h2 className={s.skills}>
          Contact <b className={s.purple}>Info </b>
        </h2>
        <Tilt trackOnWindow={true}>
          <LazyLoadImage
            style={{ width: '100px' }}
            alt="avatar"
            effect="blur"
            src={avatar}
          />
        </Tilt>
        <div className={s.contentContact}>
          <p
            style={{
              color: 'rgb(155 126 172)',
              fontWeight: 700,
              fontSize: '1.2rem',
              padding: '1rem',
            }}
          >
            Welcome to our Website. We are glad to have you around.
          </p>
          <div className={s.itemList}>
            <div style={{textAlign: 'center'}}>
              <div className={s.contactOption}>
                <FaPhone className={s.phoneType} />
                <h2 className={s.listPhone}>Phone</h2>
              </div>
              <ul>
                <li className={s.aboutActivity}>+91-9021209558</li>
                <li className={s.aboutActivity}>+91-8983468116</li>
                <li className={s.aboutActivity}>+91-9689907102</li>
              </ul>
            </div>
            <div>
              <div className={s.contactOption}>
                <FaMailBulk className={s.phoneType} />
                <h3 className={s.listPhone}>Email Address</h3>
              </div>

              <ul>
                <li className={s.aboutActivity}>
                  hfxsnipers@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className={s.contactOption}>
            <FaMapMarker className={s.phoneType} />
            <h3 className={s.listPhone}>Address</h3>
          </div>

          <div className={s.address}>
            63, Nirmal Nagri, Nandanvan Road, Nagpur-440034
            (Maharashtra)
          </div>
        </div>

        <div className={s.queAns}>
          <div className={s.wantText}>
            Want to be the best at trading and investing ?
          </div>
          <div className={s.joinText}>Join our live session</div>
        </div>

        <div className={s.introSocial}>
          <h3 className={s.listPhone}>FIND US ON</h3>
          <p>
            Feel free to <span className={s.purple}>connect </span>
            with us
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
