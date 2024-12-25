import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {


     return (
          <>

               {/* <!-- HEADER --> */}
               <header>
                    {/* <!-- TOP HEADER --> */}
                    <div id="top-header">
                         <div className="container">
                              <ul className="header-links pull-left">
                                   <li><a href="#"><i className="fa fa-phone"></i> +91 8449 0801 63</a></li>
                                   <li><a href="#"><i className="fa fa-envelope-o"></i> vikas@email.com</a></li>
                                   <li><a href="#"><i className="fa fa-map-marker"></i> Muzaffarnager.Up</a></li>
                              </ul>
                              <ul className="header-links pull-right d-flex">
                                   <li><a href="#"><i className="fa fa-inr"></i> INR</a></li>
                                   <div className="">
                                        <form>
                                             <select className="input-select h-50">
                                                  <option value="" className=''><i className="fa fa-user-o"></i>My Account</option>
                                                  <option value="1"><Link to="">Profile</Link></option>
                                                  <option value="2"><Link to="">2</Link></option>
                                                  <option value="3"><Link tp="">3</Link></option>
                                                  <option value="4"><Link to="">4</Link></option>
                                             </select>

                                        </form>
                                   </div></ul>
                         </div>
                    </div>
                    {/* <!-- /TOP HEADER --> */}

                    {/* <!-- MAIN HEADER --> */}
                    <div id="header">
                         {/* <!-- container --> */}
                         <div className="container">
                              {/* <!-- row --> */}
                              <div className="row">
                                   {/* <!-- LOGO --> */}
                                   <div className="col-md-3">
                                        <div className="header-logo">
                                             <a href="" className="logo">
                                                  <img src="/img/rupay.png" height={80} width={120} alt=" image" />
                                             </a>
                                        </div>
                                   </div>
                                   {/* <!-- /LOGO --> */}

                                   {/* <!-- SEARCH BAR --> */}
                                   <div className="col-md-6">
                                        <div className="header-search">
                                             <form>
                                                  <select className="input-select">
                                                       <option value="0">All Categories</option>
                                                       <option value="1">Male</option>
                                                       <option value="2">Female</option>
                                                       <option value="3">Kids</option>
                                                       <option value="4">Electronic</option>
                                                  </select>
                                                  <input className="input" placeholder="Search here" />
                                                  <button className="search-btn">Search</button>
                                             </form>
                                        </div>
                                   </div>
                                   {/* <!-- /SEARCH BAR --> */}

                                   {/* <!-- ACCOUNT --> */}
                                   <div className="col-md-3 clearfix">
                                        <div className="header-ctn">
                                             {/* <!-- Wishlist --> */}
                                             <div>
                                                  <a href="#">
                                                       <i className="fa fa-heart-o"></i>
                                                       <span>Your Wishlist</span>
                                                       <div className="qty">2</div>
                                                  </a>
                                             </div>
                                             {/* <!-- Cart --> */}
                                             <div className="dropdown">
                                                  <a href="#">
                                                       <i className="fa fa-shopping-cart "></i>
                                                       <span>Your Wishlist</span>
                                                       <div className="qty">2</div>
                                                  </a>
                                             </div>
                                             {/* <!-- /Wishlist --> */}

                                        </div>
                                   </div>
                                   {/* <!-- /ACCOUNT --> */}
                              </div>
                              {/* <!-- row --> */}
                         </div>
                         {/* <!-- container --> */}
                    </div>
                    {/* <!-- /MAIN HEADER --> */}
               </header>
               {/* <!-- /HEADER --> */}

               {/* <!-- NAVIGATION --> */}


               <nav className="navbar navbar-expand-lg navbar-light bg-subtle " style={{ borderTop: "2px solid red" }}>
                    <a className="navbar-brand" href="">
                         <span><a className="fa fa-shopping-bag" style={{ color: "red", fontSize: "30px" }}></a></span>
                    </a>
                    <button
                         className="navbar-toggler ml-auto "
                         type="button"
                         data-toggle="collapse"
                         data-target="#navbarSupportedContent"
                         aria-controls="navbarSupportedContent"
                         aria-expanded="false"
                         aria-label="Toggle navigation" >
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  "  id="navbarSupportedContent">
                         <ul className="sticky-top navbar-nav mr-auto  " style={{ fontWeight: "bold",background:"dark" }}>
                              <li className="nav-item active ">
                                   <Link className=" nav-link Toggle navigation mx-5 f-5 fw-5" style={{ color: " red" }} to=""> Home <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link Toggle navigation mx-5 f-5 fw-5" to="/shop"> Shop <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link Toggle navigation mx-5 f-5 fw-5" to="/contact" > Contact <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link Toggle navigation mx-5 f-5 fw-5" to="/aboutUs"> About <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link Toggle navigation mx-5 f-5 fw-5" to="/service"> Service <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link Toggle navigation mx-5 f-5 fw-5" to="/admin"> Admin <span className="sr-only">(current)</span></Link>
                              </li>
                         </ul>
                    </div>
               </nav>
               {/* <Breadcrum/> */}
               {/* <!-- /NAVIGATION --> */}





          </>
     )
}
