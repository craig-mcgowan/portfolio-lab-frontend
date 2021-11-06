import { useState, useEffect } from "react";

function Projects(props) {

  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");

    const data = await response.json();
  
    setProjects(data);
  };

  useEffect(() => getProjectsData(), []);

  const loaded = () => {
    return projects.map((project) => (
      <article>
        <h1>{project.name}</h1>
        <img src={project.image} className="project-photo" />
        <br/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </article>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
