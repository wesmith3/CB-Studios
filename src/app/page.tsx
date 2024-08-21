"use client"
import About from './about'
import NavBar from './navbar'

function Home() {
  return (
    <>
    <div className='home'>
      <NavBar />
      <div>
        <h4 className="subhead">A Film By Cloud Based Studios</h4>
        <h1 className="heading">SIRI MIRI</h1>
        <h1 className="bg_heading">MOVING</h1>
      </div>
    </div>
      <About/>
    </>
  )
}

export default Home
