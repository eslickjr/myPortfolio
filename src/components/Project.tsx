import '../styles/Project.css';

interface ProjectProps {
  image: string;
  name: string;
  url: string;
  description?: string;
  stack?: string[];
}

export default function Project({ image, name, description, stack, url }: ProjectProps) {
  return (
    <a
      className="project-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name} on GitHub`}
    >
      <div className="project-card-image-wrap">
        <img className="project-card-image" src={image} alt={name} loading="lazy" />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{name}</h3>
        {description && <p className="project-card-description">{description}</p>}
        {stack && stack.length > 0 && (
          <div className="project-card-stack">
            {stack.map((tech) => (
              <span className="project-card-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}