import React from "react";
import Header from "../components/Header/Header";
import './HomePage.css'
import "../components/Header/Header.css";
import "../components/Fotter/Footer.css";
import "../components/Footer/Footer";
import { Link } from "react-router-dom";
const HomePage = () => {
return(
  <>
   <div>  <Header/></div>
   <div ClassName="other" id="other">
       <artical  ClassName="content"">
         <div ClassName="banner">
            <section ClassName="hero-section">
                <h1>Welcome to Vivekanand College!</h1>
                <p>Your journey to excellence starts here.</p>
                <button><Link to="admissionpage">Apply Now!</link>
                </button>
            </section>
    </div>
    <nav>

      </nav>
  </article>
  <article ClassNmae="info">
      <p>**Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development.</p>
      <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks.</p>
  </article>
      <h2>Why Choose Vivekanand College?</h2>
      <ul>
          <li>*Legacy of Excellence:** Decades of commitment to quality education.</li>
          <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
          <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
          <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
          <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
        </ul>
  </article>
  <figure ClassName="image";
       <figcaption=Campus life & facilities</figcaption>
       <section ClassName="img">
            <img src="">
            <img src="">
        </section>
        </figure>
        <section ClassName="bottom">
          <h4>Ready to explore our courses?</h4>
          <button><Link to="/CoursePage"><b id="bold">Explore Courses</b></Link></bottton>  

        </section>

  </div>
  <div>Footer</div>
  </>
)
}
export default HomePage;