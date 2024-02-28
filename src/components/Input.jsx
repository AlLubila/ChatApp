import"../styles/Input.css"
import Attach from "../img/Ic_attach_file_48px.svg.png"
import Imagery from "../img/imagery.png"

export const Input = ()=> {
    return (
      <>
     <div className="inputChat">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
      <img src={Attach} alt="" />
      <input type="file" style={{display:"none"}}  id="file"/>
      <label htmlFor="file">
      <img src={Imagery} alt="" />
      </label>
      <button>Send</button>
      </div>
     </div>
      </>
    )
  }
  
  