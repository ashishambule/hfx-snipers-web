import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import aboutPromoImg from '../../assets/eduImg.png';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Our <b className={s.purple}>Story</b>
            </h1>
            <AboutTextCard />
          </div>
        </div>
        <div className={s.ceos}>
          <TechSkills />
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
