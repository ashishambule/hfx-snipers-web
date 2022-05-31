import s from './IntroSection.module.scss';


const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET US <span className={s.purple}> INTRODUCE </span>{' '}
            OURSELVES
          </h1>
          <div className={s.description}>
            <p>
              We are 3 highly trained and professional instrcutors
            </p>
            <p>
              We have 2 Years of quality experience in
              <i>
                <b className={s.purple}>
                  {' '}
                  Forex Trading
                </b>
              </i>
            </p>
            <p>
              A professional trading Instructors 🚀 <br />We
              have an experience and knowledge of charts, indicators, technical analysis etc.{' '}
              <i>
                <b className={s.purple}>RSI, DMI, MACD, CTO, Volume</b>
              </i>{' '}
              Indicators on
              <br />
              <i>
                <b className={s.purple}>
                  Trading View
                </b>
              </i>{' '}
              and some other cool insights about them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
