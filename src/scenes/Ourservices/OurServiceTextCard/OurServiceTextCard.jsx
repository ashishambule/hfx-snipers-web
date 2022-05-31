import s from './OurServiceTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const OurServiceTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        This cource in{' '}
        <span className={s.purple}>Hfx Snipers </span>
        <br />
        Will teach you price action, technical analysis,
        <br />
        Along with 4 Premium strategies, that we have formed
        <br />
        after gaining experties in market.
        <br />
        <br />
      </p>
      <div>
        <p style={{ textAlign: 'justify' }}>
          <h2 className={s.skills}>
            <b className={s.purple}>PRICE ACTION + 4 STRATEGIES</b>
          </h2>
        </p>
      </div>
      <div className={s.itemList}>
        <ul>
          <li className={s.aboutActivity}>
            <ImPointRight /> What is Price Action (Strategy-1)
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight /> CandleSticks (Strategy-2)
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight />Support and Resistance (Strategy-3)
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight /> Trendlines (Strategy-4)
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight /> Chart Patterns
          </li>
        </ul>
        <ul>
          <li className={s.aboutActivity}>
            <ImPointRight /> Indicators
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight /> Trading Setup (How to Trade)
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight /> Risk Management
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight /> Trading Psychology
          </li>
          <li className={s.aboutActivity}>
            <ImPointRight /> Journal
          </li>
        </ul>
      </div>
      <div>

        Along with above services, we provide one bonus trade per month with
        <b className={s.purple}> 99.99% </b>
        accuracy.
      </div>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Trading is not for the dabblers, the dreamers, or the desperate. It requires, above all, one steadfast trait of dedication. So if you are going to trade, trade like you mean it!"{' '}
      </p>
    </div>
  );
};

export default OurServiceTextCard;
