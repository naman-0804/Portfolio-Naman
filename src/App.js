import './App.css';

function App() {
  function travel(e){
    console.log(e.target.id)
    if(e.target.id === "p"){
      window.scrollTo(0, 0);
    }
    else if(e.target.id === "s"){
      window.scrollTo(0, 1000);
    }
    else if(e.target.id === "e"){
      window.scrollTo(0, 2000);
    }
    else if(e.target.id === "ed"){
      window.scrollTo(0, 3000);
    }
    else if(e.target.id === "c"){
      window.scrollTo(0, 4000);
    }
  }
  return (
    <div>
      <div class="navbar">
        <div class="section">
          <button id="p" onMouseDown={travel}>Project</button>
          <button id="s" onMouseDown={travel}>Skills</button>
          <button id="e" onMouseDown={travel}>Experience</button>
          <button id="ed" onMouseDown={travel}>Education</button>
          <button id="c" onMouseDown={travel}>Contact</button>
        </div>
      </div>

      <div class="container">
        <div class="intro">
          <h1>I am Naman</h1>
          <h1>I am a Software Developer</h1>
          <p><h3>I am more passionate about developing new websites and application</h3></p>
        </div>
        <div class="dp">
          <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" />
        </div>
      </div>

      <br></br>
      <br></br>

      <center><h1>Project</h1></center>
      <div class="project" >

        <div>
        <div className="vitalized" style={{marginRight: '60px',marginLeft:'50px'}}>
            <h1>Vitalized</h1>
            <p>This app was made for the college vit furing hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width={'700px'} />
            <br></br>
            <button>View project</button>
          </div>
          <div class="asl">
            <h1>Asl/Isl translator</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width={'700px'}  />
            <br></br>
            <button>View project</button>
          </div>
          </div>

          <div>
          <div class="medhub">
            <h1>Medhub360</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width={'700px'} />
            <br></br>
            <button>View project</button>
          </div>
          <div class="okra">
            <h1>Okra</h1>
            <p>This app was made for the college vit during hackathon</p>
            <img decoding="async" src="https://fileinfo.com/img/ss/xl/jpg_44-2.jpg" width={'700px'} />
            <br></br>
            <button>View project</button>
          </div>
          </div>
      </div>

      <br></br>
      <center><h1>Skills</h1></center>
      <div class="Skills">
        <h3>C++,Java,html,java,ASM,BOotstrap,FLutter,sdf,df,df,df,dsf,d,f</h3>
      </div>
      <br></br>

    <center><h1>Experience</h1></center>
      <div class="exp">
        <h3>Biosphere Club-Web Developer</h3>
        <h3>hackathons</h3>
      </div>
      
    <center><h1>Education</h1></center>
      <div class="edu">
        <h3>College VIT</h3>
        <h3>High School</h3>
      </div>
    <center><h1>Contact</h1></center>
      <div class="contact">
        <h3>Naman</h3>
        <h3>Email id</h3>
        <h3>Phone number</h3>
      </div>

    </div>
  );
}

export default App;
