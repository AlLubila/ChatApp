import "../components/NavBar"
import { NavBar } from "../components/NavBar"
import { Search } from "../components/Search"
import { Chats } from "../components/Chats"
import "../styles/Sidebar.css"
export const Sidebar = ()=> {
    return (
      <>
       <div className="sidebar">
        <NavBar/>
        <Search/>
        <Chats/>
       </div>
      </>
    )
  }
  
  