import React from "react";

function Alert(Props) {
  return (
    <div style={{ height: "60px",display:"flex",justifyContent:"center" }} className="container">
      {Props.title &&
        <div  className={`alert alert-${Props.title.type} alert-dismissible fade show`} style={{marginBottom:"5px"}} role="alert">
          <strong>{Props.title.msg}</strong>
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      }

    </div>
  )
}
export default Alert