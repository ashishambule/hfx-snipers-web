import s from './TechSkills.module.scss';
import Pawan from '../../../assets/Pawan.png';
import Anil from '../../../assets/Anil.png';
import Piyush from '../../../assets/Piyush.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li>
        <div className={s.techIcon}>
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={Pawan}
            width="100%"
            style={{ minHeight: '5rem', minWidth: '5rem' }}
          />
        </div>
        <div className={s.techText}>
          <div>PAWAN S. YELE</div>
          <div>(Educator)</div>
        </div>
      </li>
      <li>
        <div className={s.techIcon}>
          <LazyLoadImage
            alt="project-img"
            src={Piyush}
            effect="blur"
            width="100%"
            style={{ minHeight: '5rem', minWidth: '5rem' }}
          />
        </div>
        <div className={s.techText}>
          <div>PIYUSH D. BHUTE</div>
          <div>(Educator)</div>
        </div>
      </li>
      <li>
        <div className={s.techIcon}>
          <LazyLoadImage
            alt="project-img"
            src={Anil}
            effect="blur"
            width="100%"
            style={{ minHeight: '5rem', minWidth: '5rem' }}
          />
        </div>
        <div className={s.techText}>
          <div>ANIL B. BHUTIYA</div>
          <div>(Educator)</div>
        </div>
      </li>
    </ul>
  );
};

export default TechSkills;
