import '../styles/Project.css';

interface ProjectProps {
  image: string;
  name: string;
  url: string;
  description?: string;
}

export default function Project({ image, name, description, url }: ProjectProps) {
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
      </div>
    </a>
  );
}