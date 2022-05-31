import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import SectionBG from '../../components/UIElements/SectionBG/SectionBG';
import Projects from '../Projects/Projects'

const Home = () => {
  return (
    <HomeLayout>
      <SectionBG>
        <MainSection />
      </SectionBG>

      <IntroSection />
      <Projects />
    </HomeLayout>
  );
};

export default Home;
