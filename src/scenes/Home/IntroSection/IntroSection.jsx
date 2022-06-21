import s from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            <span className={s.purple}>OUR ACHIEVEMENTS </span>{' '}
          </h1>
          <div className={s.description}>
            <p>
              In the last 2 years, we have Trained and Counselled more
              than 500+ students in finance and trading fields. From
              2020 onwards we have traded and multi-folded our
              portfolio by 1000% in Forex, and Trained 1000+ students
              in Forex Trading. Most of the students are successfully
              generating profits Daily.
            </p>
            {/* <p>
              We have 2 Years of quality experience in
              <i>
                <b className={s.purple}> Forex Trading</b>
              </i>
            </p> */}
            {/* <p>
              A professional trading Instructors 🚀 <br />
              We have an experience and knowledge of charts,
              indicators, technical analysis etc.{' '}
              <i>
                <b className={s.purple}>
                  RSI, DMI, MACD, CTO, Volume
                </b>
              </i>{' '}
              Indicators on
              <br />
              <i>
                <b className={s.purple}>Trading View</b>
              </i>{' '}
              and some other cool insights about them.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
