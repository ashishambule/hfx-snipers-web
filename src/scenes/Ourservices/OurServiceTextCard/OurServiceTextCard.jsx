import s from './OurServiceTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const OurServiceTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        This course in <span className={s.purple}>Hfx Snipers </span>
        Will teach you price action, technical analysis, Along with 4
        Premium strategies, that we have formed after gaining
        experties in market.
      </p>
      <div>
        <p className={s.titleBox}>
          <h2 className={s.skills}>
            <b className={s.purple}>PRICE ACTION + 4 STRATEGIES</b>
          </h2>
        </p>
      </div>
      <div className={s.itemList}>
        <ul>
          <li className={s.aboutActivity}>What is Price Action</li>
          <li className={s.aboutActivity}>CandleSticks</li>
          <li className={s.aboutActivity}>Support and Resistance</li>
          <li className={s.aboutActivity}>Trendlines</li>
          <li className={s.aboutActivity}>Chart Patterns</li>
          <li className={s.aboutActivity}>Indicators</li>
        </ul>

        <ul>
          <li className={s.aboutActivity}>Strategy-1</li>
          <li className={s.aboutActivity}>Strategy-2</li>
          <li className={s.aboutActivity}>Strategy-3</li>
          <li className={s.aboutActivity}>Strategy-4</li>
          <li className={s.aboutActivity}>Trading Psychology</li>
          <li className={s.aboutActivity}>Risk Management</li>
        </ul>
      </div>
      <div className={s.alongText}>
        Along with above services, we provide daily copy paste trading
        from Monday to Friday
      </div>

      <div style={{paddingTop: '40px'}}>
        <span className={s.secstxt}>Description:</span>
        <div className={s.descTemplate}>
          <p>
            The Wealth advisor a leading global provider of online and
            offline courses and covering a wide range of forex market
            analysis. For those who want to wade into the shallow end
            of forex trading , The wealth advisor offers comprehensive
            beginner forex trading courses. Their low prices make The
            wealth advisor an attractive choice for newbies who want
            to see if forex trading is for them.
          </p>
          <p>
            All courses are taught using Live video lessons that
            include expert instruction with demonstrations of trading
            techniques with live signals
          </p>
        </div>
      </div>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
          fontWeight: 600,
        }}
      >
        Trading doesn't just reveal your character, it also builds it
        if you stay in the game long enough.
      </p>
    </div>
  );
};

export default OurServiceTextCard;
