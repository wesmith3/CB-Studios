"use client"
import About from './about'
import NavBar from './navbar'

function Home() {
  return (
    <>
    <div className='home'>
      <NavBar />
      <div>
        <h1 className="heading">Cloud Based Studios</h1>
        <h4 className="subhead">Film By Cloud Based Studios</h4>
      </div>
    </div>
      <About/>
    </>
  )
}

export default Home
