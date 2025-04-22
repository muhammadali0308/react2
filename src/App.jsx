
import './App.css'
import a from './a.png'
import b from './b.png'
import c from './c.png'
import d from './d.png'
import e from './e.png'

function App() {

  return (
    <>
     <header className='container'>
      <img src={a} alt="" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
          <button className='btn'>Register Now</button>
        </ul>
      </nav>
     </header>
     <main>
      <section className='hero'>
        <div className="container">
        <div className="text">
          <h1>Lessons and insights <br/> <span>from 8 years</span></h1>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <button className='btn'>Register</button>
        </div>
        <img src={b} alt="" />
        </div>
      </section>
      <section className='hero2'>
        <h1 className='hyhyh'>Our clients</h1>
        <div className="ota">
          <img src={c} alt="" />
          <img src={c} alt="" />
          <img src={c} alt="" />
          <img src={c} alt="" />
          <img src={c} alt="" />
          <img src={c} alt="" />
          <img src={c} alt="" />
          <img src={c} alt="" />
        </div>
        <div className="ota2">
          <div className="card">
            <img src={d} alt="" />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <img src={d} alt="" />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="card">
            <img src={d} alt="" />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </section>
      <section className='hero3 container'>
        <img src={e} alt="" />
        <div className="text">
          <h1>The unseen of spending three <br /> years at Pixelgrade</h1>
          <p className='hyu'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        </div>
      </section>
     </main>
    </>
  )
}

export default App
