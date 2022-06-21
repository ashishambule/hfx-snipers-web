import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h1 className={s.mainTitle}>
          We
          <strong className={s.mainName}> HFX SNIPERS</strong>
        </h1>

        <div style={{ paddingTop: 50, maxWidth: '100%' }}>
          <Typewriter
            strings={[
              'Teach Forex Trading',
              'Multiple strategies',
              'Trade in Global Market',
              'Copy Paste Trading',
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
