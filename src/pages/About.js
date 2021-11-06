import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch(props.URL + "about")
    console.log("get about data ran")
    const data = await response.json();

    setAbout(data)
  }

  useEffect(() => getAboutData(), [])
  
  const loaded = () => (
    <article>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <img src={about.headshot}/>
      <p>{about.bio}</p>
    </article>
  )
  
  
  return about? loaded() :<h1>Loading...</h1>
}

export default About;
