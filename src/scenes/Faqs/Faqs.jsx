import s from './Faqs.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import digitalPayment from '../../assets/digital-payment.jpg';
import crypto from '../../assets/crypto.jpg';
import netbanking from '../../assets/netbanking.jpg';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Payment <b className={s.purple}>Methods</b>
            </h1>
            <ul className={s.container}>
              <li>
                <div className={s.techIcon}>
                  <LazyLoadImage
                    alt="card-img"
                    effect="blur"
                    src={digitalPayment}
                    width="100%"
                    style={{ minHeight: '5rem', minWidth: '5rem' }}
                  />
                </div>
                <div className={s.techText}>
                  <div>UPI</div>
                </div>
              </li>
              <li>
                <div className={s.techIcon}>
                  <LazyLoadImage
                    alt="project-img"
                    effect="blur"
                    width="100%"
                    src={crypto}
                    style={{ minHeight: '5rem', minWidth: '5rem' }}
                  />
                </div>
                <div className={s.techText}>
                  <div>Crypto</div>
                </div>
              </li>
              <li>
                <div className={s.techIcon}>
                  <LazyLoadImage
                    alt="project-img"
                    effect="blur"
                    src={netbanking}
                    width="100%"
                    style={{ minHeight: '5rem', minWidth: '5rem' }}
                  />
                </div>
                <div className={s.techText}>
                  <div>Net Banking</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
