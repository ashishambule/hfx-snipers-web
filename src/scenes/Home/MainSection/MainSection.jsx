import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hi Lovely Peoples!
          {/* <span className={s.wave}>👋🏻</span> */}
        </h2>

        <h1 className={s.mainTitle}>
          We
          <strong className={s.mainName}> AT HFX SNIPERS</strong>
        </h1>

        <div style={{ paddingTop: 50, maxWidth: '100%' }}>
          <Typewriter
            strings={[
              'Teach Forex Trading',
              'Multiple strategies',
              'Trade in Global Market',
              'Copy Paste Trading',
              'Bonus Trade', 
              'Once in a month', 
              'With 99.99% accuracy'
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
