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
        <h1 className="heading">DESPERADO</h1>
        <h1 className="bg_heading">MASTERPIECE</h1>
      </div>
    </div>
      <About/>
    </>
  )
}

export default Home
