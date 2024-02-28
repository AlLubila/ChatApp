import"../styles/NavBar.css"
export const NavBar = ()=> {
    return (
      <>
       <div className="navbar">
        <span className='logo-navbar'>
        AL Chat
        </span>
        <div className='user'>
        <img src="https://images.pexels.com/photos/1377457/pexels-photo-1377457.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="img-navbar"/>
        <span>Christian</span>
        <button className="button-navbar">logout</button>
        </div>
       </div>
      </>
    )
  }
  
  