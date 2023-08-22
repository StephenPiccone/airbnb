import './Top.css'
import logo from '../assets/airbnb-logo.png'
import pgrid from '../assets/photo-grid.png'

function Top() {
  

  return (
    <div>
      <nav className='navbar'><img src={logo} className="airbnb-logo" alt="airbnb-logo" /></nav>
      <section className='hero'>
        <img src={pgrid} className='pgrid' alt='photos'/>
        <h1 className='title1'>Online Experiences</h1>
        <p className='title1-caption'> Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
      </section>
      

    </div>
  )
}

export default Top
