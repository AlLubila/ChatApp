import "./../styles/Login.css"
export const Login = ()=> {
    return (
      <>
       <div className="formContainer">
      <div className="formWrapper">
        <span className='logo'>AL chat</span>
        <span className='title'>Register</span>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
     </div>
      </>
    )
  }
  
  