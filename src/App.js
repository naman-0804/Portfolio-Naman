import './App.css';

function App() {
  function redirectToProject(id) {
    let url = '';
    switch(id) {
        case 'vitalized-button':
            url = 'https://github.com/un-identified/vitalized-vit';
            break;
        case 'asl-button':
            url = 'https://github.com/un-identified/Sign-Language-Translator';
            break;
        case 'medhub-button':
            url = 'https://github.com/un-identified/Healthcare';
            break;
        case 'okra-button':
            url = 'https://github.com/un-identified/Okra-Maturity-Analysis';
            break;
        default:
            break;
    }
    if (url) {
        window.location.href = url;
    }
  }

  function travel(e) {
    switch(e.target.id) {
      case 'p':
        window.scrollTo(0, 900);
        break;
      case 's':
        window.scrollTo(0, 2700);
        break;
      case 'e':
        window.scrollTo(0, 1800);
        break;
      case 'ed':
        window.scrollTo(0, 3000);
        break;
      case 'c':
        window.scrollTo(0, 3700);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className="navbar" style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1675628032838-2fe34211edcf?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}>
        <div className="section">
          <button id="p" onMouseDown={travel}>Project</button>
          <button id="s" onMouseDown={travel}>Skills</button>
          <button id="e" onMouseDown={travel}>Experience</button>
          <button id="c" onMouseDown={travel}>Contact</button>
        </div>
      </div>

      <div className="container" style={{backgroundImage: "url(https://wallpapers.com/images/high/page-background-66n12aqwqihi9gzc.webp)",height:"850px"}}>
      
        <div className="intro" >
          <h1>I am Naman</h1>
          <h1>I am a Software Developer</h1>
          <p><h3>I am more passionate about developing new websites and applications</h3></p>
        </div>
        <div className="dp">
          <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" alt="Profile" />
        </div>
      </div>

      <center><h1>Project</h1></center>
      <div className="project" style={{backgroundImage: "url(https://img.freepik.com/free-vector/gradient-background-green-modern-designs_343694-2067.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1717027200&semt=ais_user)"}}>
        <div>
          <div className="vitalized" style={{ marginRight: '130px', marginLeft: '130px' }}>
            <h1>Vitalized</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Vitalized" />
            <button id="vitalized-button" onClick={() => redirectToProject('vitalized-button')}>View project</button>
          </div>
          <div className="asl">
            <h1>ASL/ISL Translator</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="ASL/ISL Translator" />
            <button id="asl-button" onClick={() => redirectToProject('asl-button')}>View project</button>
          </div>
        </div>

        <div>
          <div className="medhub">
            <h1>Medhub360</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Medhub360" />
            <button id="medhub-button" onClick={() => redirectToProject('medhub-button')}>View project</button>
          </div>
          <div className="okra">
            <h1>Okra</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width="600px" height="250px" alt="Okra" />
            <button id="okra-button" onClick={() => redirectToProject('okra-button')}>View project</button>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="exed"  style={{ backgroundImage: "url(https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png)"}}>
        <center><h1>Experience</h1></center>
        <div className="exp" style={{ border: "5px solid black", marginRight:"270px",marginLeft:"270px",height:"250px"}}>
          <h3>Software Developer</h3>
          <h3>Software Developer</h3>
          <h3>Software Developer</h3>
        </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <h1>Education</h1>
        <br />
        <div className="edu" style={{ border: "5px solid black",marginRight:"270px",marginLeft:"270px",height:"250px"}}>
          <h3>College VIT</h3>
          <h3>High School</h3>
        </div>
      </div>
   
    <div style={{ backgroundImage: "url(https://wallpapers.com/images/featured/page-background-gb7xwx37yb4yyyal.webp)"}}>
      <center><h1>Skills</h1></center>

      <div className="Skills" style={{ border: "5px solid black", marginRight: "270px", marginLeft: "270px" }}>
        <div className="p1" style={{ marginRight: "70px" }}>
          <h3>Html</h3>
        </div>
        <div className="p2" style={{ marginRight: "70px" }}>
          <h3>Css</h3>
        </div>
        <div className="p3" style={{ marginRight: "70px" }}>
          <h3>Js</h3>
        </div>
        <div className="p4" style={{ marginRight: "70px" }}>
          <h3>React</h3>
        </div>
      </div>

      <br />

      <div className="Skills" style={{ border: "5px solid black", marginRight: "270px", marginLeft: "270px" }}>
        <div className="p1" style={{ marginRight: "70px" }}>
          <h3>Html</h3>
        </div>
        <div className="p2" style={{ marginRight: "70px" }}>
          <h3>Css</h3>
        </div>
        <div className="p3" style={{ marginRight: "70px" }}>
          <h3>Js</h3>
        </div>
        <div className="p4" style={{ marginRight: "70px" }}>
          <h3>React</h3>
        </div>
      </div>

      <br />

      <div className="Skills" style={{ border: "5px solid black", marginRight: "270px", marginLeft: "270px" }}>
        <div className="p1" style={{ marginRight: "70px" }}>
          <h3>Html</h3>
        </div>
        <div className="p2" style={{ marginRight: "70px" }}>
          <h3>Css</h3>
        </div>
        <div className="p3" style={{ marginRight: "70px" }}>
          <h3>Js</h3>
        </div>
        <div className="p4" style={{ marginRight: "70px" }}>
          <h3>React</h3>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center><h1>Achievement</h1></center>
      <div className="ach" style={{ border: "5px solid black", marginLeft: "270px", marginRight: "270px" }}>
        <h3>Devhouse 4th place</h3>
        <h3>Solveathon 6th place</h3>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
      <div style={{ backgroundImage: "url(https://shorturl.at/nrj6n)"}}>
      <center><h1>Contact</h1></center>

      <div className="contact" style={{ border: "5px solid black", marginLeft: "270px", marginRight: "270px" }}>
        <div id="Name"> 
        <h3>Naman</h3>
        </div>
        <div id ="Email">
        <h3>Email id</h3>
        </div> 
        <div id="Phone">
        <h3>Phone number</h3>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center><h1>Reach out</h1></center>
      <div className="reach" style={{ border: "5px solid black", marginLeft: "270px", marginRight: "270px" }}>
        <div id="Name">
        <h4><label for="Name">Name: </label></h4>
        <input type="text" placeholder="Name"></input>
        </div>
        <br></br>
        <div id ="Email">
        <h4><label for="Email">Email: </label></h4>
        <input type="text" placeholder="Email"></input>
        </div> 
        <br></br>
        <div id="Phone">
        <h4><label for="Phone">Phone: </label></h4>
        <input type="text" placeholder="Enter your Phone number"></input>
        </div>
        <br></br>
        <div id="Message">
        <h4><label for="Message">Message: </label></h4>
        <input type="text" placeholder="Enter a message"></input>
        </div>
        <br></br>
        <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
