import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  DiGoogleAnalytics
} from 'react-icons/di'
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
          PAWAN S. YELE
        </div>
        <div
          className={s.techIcon}>
          <DiGoogleAnalytics />
        </div>
      </li>
      <li>
        <div className={s.techText}>
          PIYUSH D. BHUTE
        </div>
        <div
          className={s.techIcon}>
          <DiGoogleAnalytics />
        </div>
      </li>
      <li>
        <div className={s.techText}>
          ANIL B. BHUTIYA
        </div>
        <div
          className={s.techIcon}>
          <DiGoogleAnalytics />
        </div>
      </li>
    </ul>
  );
};

export default TechSkills;
