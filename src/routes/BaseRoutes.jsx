import { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));
const Ourserservices = lazy(() => import('../scenes/Ourservices/Ourservices'));
const Contactus = lazy(() => import('../scenes/Contactus/Contactus'));
const Faqs = lazy(() => import('../scenes/Faqs/Faqs'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
  OURSERSERVICES:'/ourserservices',
  CONTACT:'/contactus',
  FAQ:'/faqs',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.PROJECTS} component={Projects} />
        <Route path={routes.PROJECT} component={ModalProjectCard} />
        <Route path={routes.RESUME} component={Resume} />
        <Route path={routes.OURSERSERVICES} exact component={Ourserservices} />
        <Route path={routes.CONTACT} exact component={Contactus} />
        <Route path={routes.FAQ} exact component={Faqs} />        
      </Switch>

      {background && (
        <Route path={routes.PROJECT} component={ModalProjectCard} />
      )}
    </>
  );
};

export default BaseRoutes;
