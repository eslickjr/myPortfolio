

export default function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume">
        <h3 className="resumeList">Front-end Proficiencies</h3>
        <ul className="resumeList" id="frontEndList">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3 className="resumeList">Back-end Proficiencies</h3>
        <ul className="resumeList" id="backEndList">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>Vite</li>
          <li>Postgres</li>
          <li>REST</li>
        </ul>
      </div>
    </section>
  );
}