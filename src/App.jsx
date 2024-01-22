import './styles/output.css'
import Header from './Components/Main/Header'
import Banner from './Components/Main/Banner'
import Footer from './Components/Main/Footer'
import TaskBoard from './Components/Task/TaskBoard'

function App() {


  return (
    <>
      <Header></Header>
      <div className=' flex flex-col justify-center items-center'>
        <Banner></Banner>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>


    </>
  )
}

export default App
