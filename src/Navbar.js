import React,{useRef} from 'react';
// import ReactDOM from 'react-dom/client';


function Navbar(Props) {
  // let toggle = document.getElementsByClassName('chk');
  // console.log(toggle)
  // let fkey=localStorage.key(0);
  // let value=localStorage.getItem(fkey);
  // if(value==='light')
  //   toggle.checked='false'
  // else
  // toggle.checked='true'
  const elem=useRef(null);
  let elemselect = ()=>{
    let chkk={
      checked:"true"
    }
    return chkk
  }
  elem.current=elemselect
  // elem.current=elemselect;
  // console.log(elemselect)
  console.log(elem.current)

  
  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${Props.mode}  bg-${Props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{Props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="{Props.about}">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">

              <div className="form-check form-switch">
                <input className="form-check-input chk"  onChange={Props.set} type="checkbox" ref={elemselect} role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${Props.rev}`} htmlFor="flexSwitchCheckDefault">{Props.mode} mode</label>
              </div>

            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar