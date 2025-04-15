import Layout from './components/Layout'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  

  return (
 <div className='App'>
  <Layout>
    <div className='container-fluid'>
      <Home/>
      <AboutMe/>
      <Projects />
    </div>
  </Layout>
 </div>
  )
}

export default App
