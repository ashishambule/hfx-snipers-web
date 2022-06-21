import s from './TechSkills.module.scss';
import Pawan from '../../../assets/Pawan.png';
import Anil from '../../../assets/Anil.png';
import Piyush from '../../../assets/Piyush.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import { DiGoogleAnalytics } from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketDotIo,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li>
        <div className={s.techText}>
          <div>PAWAN S. YELE</div>
          <div>(Founder & CEO)</div>
        </div>

        <div className={s.techIcon}>
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={Pawan}
            width="100%"
            style={{ minHeight: '5rem', minWidth: '5rem' }}
          />
        </div>
      </li>
      <li>
        <div className={s.techText}>
          <div>PIYUSH D. BHUTE</div>
          <div>(Founder & CEO)</div>
        </div>
        <div className={s.techIcon}>
          <LazyLoadImage
            alt="project-img"
            src={Piyush}
            effect="blur"
            width="100%"
            style={{ minHeight: '5rem', minWidth: '5rem' }}
          />
        </div>
      </li>
      <li>
        <div className={s.techText}>
          <div>ANIL B. BHUTIYA</div>
          <div>(Founder & CEO)</div>
        </div>
        <div className={s.techIcon}>
          <LazyLoadImage
            alt="project-img"
            src={Anil}
            effect="blur"
            width="100%"
            style={{ minHeight: '5rem', minWidth: '5rem' }}
          />
        </div>
      </li>
    </ul>
  );
};

export default TechSkills;
