import "./../styles/Register.css"
import Icon from "../img/icon.png"
export const Register = ()=> {
  return (
    <>
     <div className="formContainer">
      <div className="formWrapper">
        <span className='logo'>AL chat</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{display:"none"}} type="file" id='file' />
          <label htmlFor="file">
            <img src={Icon} alt="" />
            <span>Add Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
     </div>
    </>
  )
}

