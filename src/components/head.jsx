import React,{useState} from "react";
function Head(){
  const [val,setVal]=useState(0);
  console.log(val);
  function change(){
    setVal(!val);
  }
  const menuClass = "dropdown-menu text-small ";
  return (

    <div className="heading">
    <div class="container headpad bg-light">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="#" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src="https://import.cdn.thinkific.com/439073/custom_site_themes/356128/jSTTsVDORCquIOA63ZGp_Rinex%20Technologies%20pvt%20ltd%20final%20logo.png" alt="mdo" width="100"  class=""></img>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><h4 className="dash nav">Student Dashboard</h4></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
        </form>

        <div class="dropdown text-end" onClick={change}>
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" >
            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="DP" width="32" height="32" class="rounded-circle"></img>
          </a>
          <ul  className={val?menuClass+" show":menuClass} aria-labelledby="dropdownUser1" >
            <li><a class="dropdown-item" href="#">Account Settings</a></li>
            <li><a class="dropdown-item" href="#">Certificates</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
          </ul>
        </div>
      </div>
    </div></div>


  );
}
export default Head;
