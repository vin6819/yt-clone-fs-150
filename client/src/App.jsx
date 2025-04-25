import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Search from './components/Search'

function App() {
  const [feed, setFeed] = useState(true);
  const [term, setTerm] = useState("")
  return (
    <>
      <header className="flex justify-center items-center m-[10px]">
            <div className="flex justify-start items-center w-[15%]">
                <div className="w-[40px] min-w-[40px]">
                    <img src="/assets/hamburger.png" alt="menu" className="w-[40px]" />
                </div>
                <div className="hidden sm:flex ml-6 justify-center items-center cursor-pointer  ">
                    <img src="/assets/youtubeLogo.png" alt="" className=" w-[20px] sm:w-[30px] md:w-[40px]" />
                    <h1 className="flex justify-center items-center text-[15px] md:text-[25px]  h-[40px]">YouTube</h1>
                </div>
            </div>
            <div className="w-[60%] sm:w-[70%] flex justify-center content-center ">
                <div className="w-[100%] flex justify-center content-center ">
                    <input type="text" className="bg-black border border-white w-[150px] sm:w-[50%] h-[40px] rounded-l-[50px] p-4" placeholder="Search" onInput={(e) => setTerm(e.target.value)} />
                    <button className="hover:bg-gray-700 border border-white bg-slate-500 w-[50px] h-[40px]  flex justify-center content-center rounded-r-[50px] " onClick={() => setFeed(false)}>
                        <img src="/assets/search.png" alt="search" className="w-[35px]" />
                    </button>
                </div>
            </div>
            <div className="w-[15%] flex justify-end items-center">
                <div className=" cursor-pointer flex justify-center items-center  p-[2px] w-[100px] ">
                    <img src="/UI/user.png" alt="" className="h-[40px]" />
                    <div className="flex justify-center items-center ">Sign In</div>
                </div>
            </div>
        </header>
      { feed ? <Feed /> : <Search term={term}/>}
    </>
  )
}

export default App
