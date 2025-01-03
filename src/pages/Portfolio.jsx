import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div id="portfolio">
        <h1 id='portfolio_header'>Portfolio</h1>
        <div className="projectList">
          <Project name="RM Spawnpoint" description="This is tool to help create a professional README." image="./public/img/RM Spawnpoint.png" url="https://github.com/eslickjr/RMSpawnPoint" />
          <Project name="Bankroll" description="This is the manage the cost of services and how long those services last for." image="./public/img/Bankroll.png" url="https://github.com/eslickjr/Bankroll" /> 
          <Project name="Shonen Showdown" description="Run your favorite anime characters against each other." image="./public/img/Shonen Showdown.png" url="https://github.com/harrisbunn/Shonen-Showdown" />
        </div>
    </div>
  );
}