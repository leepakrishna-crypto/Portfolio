export default function Myportfolio() {
   return(
   <>
     <header>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container ">
      <a className="navbar-brand" href="#home">
        Portfolio
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>

           <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#certifications">
              Certifications
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    </header>
    <br></br>
  <section id="home" className="container py-4 mt-5">
  <div className="bg-light p-4 rounded shadow text-center">
    <h1 className="display-5 fw-bold">Hello, I'm Leepa</h1>
    <p className="fs-5">
      Web Developer | Designer | Programmer
    </p>
    <p className="fs-5">
    M.Tech Integrated student in Computer Science and Engineering with a
    strong foundation in programming, problem-solving, and software
    development.
  </p>
    <a href="#contact" className="btn btn-success">
      Hire Me
    </a>
  </div>
</section>
<section id="skills" className="container py-5">
  <h2 className="text-center mb-4">Skills</h2>

  <div className="d-flex flex-wrap justify-content-center gap-3">
    <span className="badge bg-dark p-3 fs-6">C</span>
    <span className="badge bg-dark p-3 fs-6">C++</span>
    <span className="badge bg-dark p-3 fs-6">Java</span>
    <span className="badge bg-dark p-3 fs-6">Python</span>
    <span className="badge bg-dark p-3 fs-6">HTML</span>
    <span className="badge bg-dark  p-3 fs-6">CSS</span>
    <span className="badge bg-dark p-3 fs-6">JavaScript</span>
  </div>
</section>

<section id="certifications" className="container py-5">
  <h2 className="text-center mb-4">Certifications</h2>

  <div className="row g-4">
    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">
            AWS Certified Cloud Practitioner
          </h5>
          <p className="card-text">
            Completed AWS Cloud Practitioner certification, gaining
            foundational knowledge of AWS cloud concepts, services,
            security, pricing, and architecture.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-warning">
            AWS Cloud Quest
          </h5>
          <p className="card-text">
            Successfully completed AWS Cloud Quest, developing hands-on
            experience with cloud technologies and AWS services through
            interactive learning challenges.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
   <section id="projects" className="container py-5 mt-5 pt-5">
  <div className="container ">
    <h2 className="text-center mb-5">My Projects</h2>

    <div className="row justify-content-center g-4">

      <div className="col-lg-4 col-md-6">
        <div className="card shadow h-100">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-dark">
              AI Supported AICTE Approval Process Portal
            </h5>
            <p className="card-text flex-grow-1">
              A portal that uses AI to streamline the approval process for educational institutions.
            </p>
            
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card shadow h-100">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-dark">
              Adaptive Hybrid Sensor-Based Side Mirror Retraction System
            </h5>
            <p className="card-text flex-grow-1">
              A smart system that adapts to driving conditions and automatically retracts side mirrors for better aerodynamics and safety.
            </p>
            
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card shadow h-100">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-dark">
              Sign Language to Speech Conversion System
            </h5>
            <p className="card-text flex-grow-1">
              A system that converts sign language gestures into spoken words for improved communication.
            </p>
            
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    <section id="contact" className=" container py-5 bg-light" >
  <h2 className="text-center mb-4">Contact Me</h2>

  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6">
      <form>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


       <footer className="bg-dark text-white text-center py-3">
  <p className="mb-0">
    2026 Leepa Portfolio. All Rights Reserved.
  </p>
</footer>
    </>
   )
}