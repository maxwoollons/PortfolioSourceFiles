import { useState } from 'react'
import './App.css'
import 'animate.css'

function App() {

  function ultimateImagination(){
    window.open('https://github.com/maxwoollons/StockWebsite', '_blank')
  }
  function phamphotos(){
    window.open('https://www.youtube.com/watch?v=PyXnSuxP3-4', '_blank')
  }

  return (
    <div className="App">
      <div className="banner flex justify-evenly text-center text-white-100 bg-slate-800">
      <div> 

          
          </div>
          <div className='pt-20 text-slate-50'> 
          <h1 className='title animate__animated animate__backInLeft'>Max Woollons</h1>
        <h2 className='subtitle animate__animated animate__backInRight'>Full Stack Web Developer</h2>
        <a href='#skills'><button class="btn glass m-2 mt-10">Skills</button></a>
        <a href='#projects'><button class="btn glass m-2 mt-10">Projects</button></a>
        <a href='#contact'><button class="btn glass m-2 mt-10">Contact</button></a>

          
        </div>
        

      </div>

      {/* Skills section */}
      <div id="skills" className="skills-section min-h-screen bg-slate-700 text-slate-50 pt-20 pb-20">
        <div className="skills-box bg-slate-900 pt-20 pb-20 rounded ml-0 mr-0 sm:ml-16 sm:mr-16">
      <div className='flex-none'>
            <h1 className="text-center text-3xl bold">Skills</h1>
          </div>  
        <div className="flex justify-evenly items-center flex-wrap">
      
         
          <div className="skill p-3">
            <h3 className="skill-title underline">Front End</h3>
            <ul className="skill-list">
              <li>HTML</li>
              <progress class="progress progress-error w-56" value="100" max="100"></progress>
              <li>CSS</li>
              <progress class="progress progress-error w-56" value="100" max="100"></progress>
              <li>JavaScript</li>
              <progress class="progress progress-error w-56" value="99" max="100"></progress>
              <li>React</li>
              <progress class="progress progress-error w-56" value="90" max="100"></progress>
              <li>Tailwind</li>
              <progress class="progress progress-error w-56" value="85" max="100"></progress>
            </ul>
            </div>
            <div className="skill mt-5 p-3">
            <h3 className="skill-title underline">Back End</h3>
            <ul className="skill-list">
              <li>Node</li>
              <progress class="progress progress-error w-56" value="100" max="100"></progress>
              <li>Express</li>
              <progress class="progress progress-error w-56" value="89" max="100"></progress>
              <li>MongoDB</li>
              <progress class="progress progress-error w-56" value="79" max="100"></progress>
              <li>MySQL</li>
              <progress class="progress progress-error w-56" value="100" max="100"></progress>
              <li>Python</li>
              <progress class="progress progress-error w-56" value="100" max="100"></progress>
              
              <li>PostgreSQL</li>
              <progress class="progress progress-error w-56" value="40" max="100"></progress>
            </ul>
            </div>

            </div>
            
            </div>
            

      </div>
      {/* Projects section */}

      <div id="projects" className="skills-section min-h-screen bg-slate-800 pt-20">
      <div className='cardflex flex justify-evenly flex-wrap'>
      <div class="card w-96 bg-base-100 shadow-xl m-10">
      <div class="card-body">
        <h2 class="card-title">Ultimate Imagination</h2>
        <p>Backend focused Stock Photography Ecommerce Website. This website was built using the Django Python Web framework.</p>
       <button onClick={ultimateImagination} class="btn btn-outline">Visit Github Repo</button>
      </div>
      <figure><img src="https://i.ibb.co/qdFqVcN/UI.png" alt="Ultimate Imagination" /></figure>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl m-10">
      <div class="card-body">
        <h2 class="card-title">PhamPhotos</h2>
        <p>PhamPhotos was the first version of the Ultimate Imagination Stock Photography Genre. This was built using the CMS Wordpress.</p>
       <button onClick={phamphotos} class="btn btn-outline">View Website</button>

      </div>
      <figure><img src="https://i.ibb.co/x7Wt91h/phamphotos.png" alt="PhamPhotos" /></figure>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl m-10">
      <div class="card-body">
        <h2 class="card-title">Weather API, With API Keys</h2>
        <p>This project uses 56.2k weather readings to provide weather data to the user. To query for data a API Key is required to access the API.</p>
       <button class="btn btn-outline">Visit Github Repo</button>

      </div>
      <figure><img src="https://i.ibb.co/k21pxPk/api.png" alt="API" /></figure>
    </div>
    </div>
    
    

        
      </div>
      {/* contact me */}
      <div id="contact" className="skills-section min-h-screen bg-slate-700 text-slate-50 pt-20 pb-20">
        <div className="skills-box bg-slate-900 pt-20 pb-20 rounded ml-0 mr-0 sm:ml-16 sm:mr-16">
      <div className='flex-none'>
            <h1 className="text-center text-3xl bold">What are you waiting for?</h1>
            <h1 className='text-center text-2xl bold pb-20'>Contact Me!</h1>
          </div>  

          <div className='flex justify-evenly items-center flex-wrap'>
          <div className="contact-form p-3">
            <form action="mailto:maxwoollons@outlook.com" method="post" enctype="text/plain">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control text-black" id="name" placeholder="Enter your name" />
                <label htmlFor="Infomation">Infomation</label>
                  <textarea className='text-black font-20' name="Infomation" id="" cols="30" rows="10" placeholder='What would you like to let max know?'></textarea>
                  <input type="submit" className="submit btn btn-outline" value="Submit" />
              </div> 
                  </form>
                  </div>
                  </div>

                
                
         

      </div>    
      </div>        

     
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by Max Woollons</p>
  </div>
</footer>
    </div>
  )
}

export default App
