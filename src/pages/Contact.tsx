import "../styles/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact">
      <div id="generalInfoContainer">
        <div id="profileImageContainer">
          <div id="profileImage"></div>
        </div>
        <div id='generalBox'>
          <h2 id="generalHeader">Joshua Eslick</h2>
          <p id="generalTitle">Full Stack Web Developer</p>
          <p id="generalDesc">Passionate certified full stack developer who has been on all sides of the development life cycle.</p>
          <p id="generalLocation">World Acceptance | Greenville, SC</p>
          <div id="generalLinks">
            <Link className="generalButton" id="hireResume" to="Joshua Eslick Resume.docx" download>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
              Resume
            </Link>
            <Link className="generalButton" id="hireLinked" to="https://www.linkedin.com/in/joshua-eslick" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
              LinkedIn
            </Link>
            <Link className="generalButton" id="hireGit" to="https://www.github.com/eslickjr" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
              GitHub
            </Link>
          </div>
        </div>
      </div>
      <h1 id="contactHeader" className="outroHeader">Feel free to email or call me</h1>
      <Link to="mailto:JoshuaReslick@gmail.com" id="hireEmail" className="hireButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
        </svg>
        JoshuaReslick@gmail.com
      </Link>
      <Link to="tel:+18643994444" id="hirePhone" className="hireButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
        (864) 399-4444
      </Link>
      <h1 id="teaHeader" className="outroHeader">even if just for a cup of tea!</h1>
      <svg id="teaIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512"><path style={{ fill: "#DEDAD2" }} d="M138.567,173.977v41.248c0,18.92,15.338,34.258,34.258,34.258s34.258-15.338,34.258-34.258v-41.248  L138.567,173.977L138.567,173.977z"/><path style={{ opacity: 0.1 }} d="M161.671,215.225v-41.248h-23.104v41.248  c0,18.919,15.338,34.257,34.258,34.257c4.055,0,7.942-0.708,11.552-2.002C171.142,242.74,161.671,230.091,161.671,215.225z"/><path style={{ fill: "#BDB5A5" }} d="M106.573,240.402c0,16.447,13.332,29.778,29.778,29.778v30.921h72.946V270.18  c16.446,0,29.778-13.332,29.778-29.778L106.573,240.402L106.573,240.402z"/><path style={{ opacity:0.1 }} d="M129.678,240.402h-23.104c0,16.446,13.332,29.778,29.778,29.778v30.921  h23.104V270.18C143.01,270.18,129.678,256.848,129.678,240.402z"/><g><path style={{ fill: "#BDB5A5" }} d="M307.282,232.6c-45.987,0-13.366-54.928-48.854-75.361l13.98-13.98c0,0,21.285,8.484,34.122,34.711   L307.282,232.6z"/><path style={{ fill: "#BDB5A5" }} d="M382.638,97.018h-20.112c-17.26,0-31.251,13.992-31.251,31.251l0,0v25.386h82.615v-25.386l0,0   C413.889,111.009,399.898,97.018,382.638,97.018z"/></g><path style={{ opacity: 0.1 }} d="M354.378,128.269c0-16.758,13.19-30.433,29.756-31.214  c-0.496-0.023-0.995-0.038-1.496-0.038h-20.112c-17.26,0-31.251,13.992-31.251,31.252l0,0v25.386h23.104v-25.386H354.378z"/><path style={{ fill: "#DEDAD2" }} d="M413.889,128.269h-82.615c0,0-63.961,77.952,0,141.911v30.921h82.615V270.18  C477.849,206.221,413.889,128.269,413.889,128.269z"/><path style={{ opacity: 0.1 }} d="M354.378,128.269h-23.104c0,0-63.96,77.952,0,141.911v30.921h23.104V270.18  C290.418,206.221,354.378,128.269,354.378,128.269z"/><g><rect x="61.25" y="304.839" style={{ fill: "#735642" }} width="54.699" height="110.15"/><rect x="396.043" y="304.839" style={{ fill: "#735642" }} width="54.7" height="110.15"/></g><rect x="396.043" y="304.839" style={{ opacity: 0.1 }} width="54.7" height="69.313" /><rect x="61.25" y="304.839" style={{ opacity: 0.1 }} width="54.699" height="69.313" /><path style={{ fill: "#8C6950" }} d="M486.561,270.181H25.438c-9.264,0-16.774,7.51-16.774,16.774v35.764  c0,9.264,7.51,16.774,16.774,16.774h461.123c9.264,0,16.774-7.51,16.774-16.774v-35.764  C503.336,277.691,495.826,270.181,486.561,270.181z"/><path d="M459.408,414.983v-66.826h27.155c14.027,0,25.438-11.411,25.438-25.439v-35.764c0-14.027-11.411-25.439-25.438-25.439  h-53.987c15.316-21.509,21.216-46.435,17.103-73.054c-0.731-4.728-5.137-7.973-9.886-7.24c-4.729,0.73-7.97,5.157-7.24,9.885  c4.103,26.556-3.409,50.227-22.331,70.408h-75.28c-9.134-9.736-15.599-20.256-19.4-31.5c-0.018-0.058-0.024-0.119-0.044-0.177  c-10.495-31.714,1.367-66.723,20.1-92.906h73.967c2.912,4.069,8.044,11.812,12.797,21.893c2.041,4.329,7.206,6.18,11.531,4.14  c4.327-2.041,6.183-7.204,4.14-11.533c-6.018-12.761-12.514-22.12-15.61-26.279c-1.594-20.558-18.827-36.802-39.788-36.802h-20.112  c-20.956,0-38.179,16.237-39.781,36.788c-3.618,4.847-11.855,16.765-18.564,32.931c-13.115-16.532-27.783-22.549-28.565-22.861  c-3.217-1.282-6.886-0.527-9.334,1.922l-13.98,13.98c-1.906,1.905-2.816,4.591-2.463,7.263c0.354,2.672,1.93,5.028,4.266,6.372  c12.511,7.204,14.072,20.602,15.725,34.787c1.915,16.438,4.5,38.537,31.334,41.41c2.903,7.133,6.712,14.002,11.408,20.572h-71.169  c4.003-6.065,6.341-13.32,6.341-21.114c0-4.785-3.879-8.664-8.664-8.664h-26.662c2.167-5.189,3.333-10.798,3.333-16.513v-41.248  c0-4.785-3.879-8.664-8.664-8.664h-68.516c-4.785,0-8.664,3.879-8.664,8.664v41.248c0,5.715,1.166,11.325,3.333,16.513h-26.662  c-4.785,0-8.664,3.879-8.664,8.664c0,7.794,2.338,15.049,6.341,21.114H85.786c-4.785,0-8.664,3.879-8.664,8.664  c0,4.785,3.879,8.664,8.664,8.664h50.565h72.947h121.976h82.615h72.672c4.471,0,8.11,3.638,8.11,8.111v35.764  c0,4.472-3.638,8.111-8.11,8.111h-35.819h-54.699h-31.407c-4.785,0-8.664,3.879-8.664,8.664c0,4.785,3.879,8.664,8.664,8.664h22.743  v66.826c0,4.785,3.879,8.664,8.664,8.664h54.699C455.53,423.647,459.408,419.768,459.408,414.983z M362.525,105.681h20.112  c9.386,0,17.454,5.756,20.861,13.924h-61.832C345.071,111.437,353.138,105.681,362.525,105.681z M297.203,179.589  c-3.202,13.745-4.021,28.121-1.595,42.059c-5.767-3.377-7.013-10.783-8.567-24.119c-1.56-13.387-3.434-29.487-15.465-41.185  l2.426-2.426c5.863,3.646,15.868,11.387,23.327,25.113C297.285,179.217,297.246,179.402,297.203,179.589z M147.231,182.641h51.188  v32.584c0,6.15-2.123,11.909-6.038,16.513h-39.11c-3.915-4.605-6.039-10.362-6.039-16.513  C147.231,215.225,147.231,182.641,147.231,182.641z M209.299,261.516h-72.947c-8.557,0-15.941-5.116-19.254-12.45h32.503h46.449  h32.503C225.239,256.4,217.854,261.516,209.299,261.516z M442.079,406.319h-37.371v-58.162h37.371V406.319z"/><path d="M25.439,278.844H51.13c4.785,0,8.664-3.879,8.664-8.664c0-4.785-3.879-8.664-8.664-8.664H25.439  C11.411,261.516,0,272.929,0,286.955v35.764c0,14.027,11.411,25.439,25.439,25.439h27.153v66.826c0,4.785,3.879,8.664,8.664,8.664  h54.7c4.785,0,8.664-3.879,8.664-8.664v-66.826h205.362c4.785,0,8.664-3.879,8.664-8.664c0-4.785-3.879-8.664-8.664-8.664H115.955  H61.255H25.439c-4.472,0-8.111-3.638-8.111-8.111v-35.764C17.328,282.483,20.966,278.844,25.439,278.844z M69.919,348.157h37.371  v58.162H69.919V348.157z"/></svg></section>
  );
}