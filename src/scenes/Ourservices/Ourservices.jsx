import s from './Ourservices.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import OurServiceTextCard from './OurServiceTextCard/OurServiceTextCard'
const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h2 className={s.skills}>
          About  <b className={s.purple}>Course </b> and <b className={s.purple}>Services</b>
      </h2>
      <OurServiceTextCard/>
    </div>
    </BaseLayout >
  );
};

export default About;
