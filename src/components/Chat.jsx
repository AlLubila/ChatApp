import "../styles/Chat.css"
import { Input } from "./Input"
import { Messages } from "./Messages"
export const Chat = ()=> {
    return (
      <>
       <div className="chat">
        <div className="chatInfo">
          <span>Christian</span>
          <div className="chatIcons">
          <i className='bx bxs-camera-movie'></i>
          <i className='bx bxs-user-plus'></i>
          <i className='bx bx-dots-horizontal-rounded'></i>
          </div>
        </div>
        <Messages/>
        <Input/>
       </div>
      </>
    )
  }
  
  