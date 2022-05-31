import s from './Projects.module.scss';
import { PROJECTS } from '../../constants/projects';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
      <div className={s.content}>
        <h1 className={s.title}>
          Our Profitable <strong className={s.purple}>Traders</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few traders who learned and earned good profits!!
        </p>

        <ul className={s.projects}>
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
  );
};

export default Projects;
