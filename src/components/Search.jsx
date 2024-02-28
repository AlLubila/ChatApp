import "../styles/Search.css"
export const Search = ()=> {
    return (
      <>
       <div className="search">
        <div className="searchForm">
          <input type="text" className="inputSearch" placeholder="Find a user" />
        </div>
        <div className="userChat">
          <img src="https://images.pexels.com/photos/1377457/pexels-photo-1377457.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
          <div className="userInfo">
            <span>Christian</span>
          </div>
        </div>
       </div>
      </>
    )
  }
  
  