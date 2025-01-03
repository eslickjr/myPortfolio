import '../style/Project.css';

export default function Project(project) {
  return (
    <div className="project">
      <img src={project.image} alt={project.name} />
      <div className="project-header-container">
        <h3>{project.name}</h3>
      </div>
      <p>{project.description}</p>
      <div className="project-link-container">
        <a href={project.url} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}