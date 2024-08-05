import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Navbar: React.FC = () => {
  return (
    <div className='bg-primary' >
      <div className='container row'>

        <div className='left-top-nav-container col-sm-9  d-flex flex-row justify-content-around'>
          <div className="dropdown show">
            <a className="btn dropdown-toggle text-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              For Employers
            </a>

            <div className="dropdown-menu" data-toggle="dropup" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <div className="dropdown show">
            <a className="btn dropdown-toggle text-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              For Producers
            </a>

            <div className="dropdown-menu" data-toggle="dropup" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div className="dropdown show">
            <a className="btn dropdown-toggle text-light" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              For Providers
            </a>

            <div className="dropdown-menu" data-toggle="dropup" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div className='d-flex align-items-center'>
            

            <a className='nav-link text-light' href='#'>
              Medicaid Renewal
            </a>
          </div>
        </div>

        <div className='col-sm-3'>
          right nsvbar
        </div>

      </div>




    </div>






  )
}

export default Navbar
