import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<>
			{/* <!-- FOOTER --> */}
			<footer id="footer">
				{/* <!-- top footer --> */}
				<div className="section">
					{/* <!-- container --> */}
					<div className="container">
						<div id="newsletter" >
							{/* <!-- container --> */}
							<div className="container">
								{/* <!-- row --> */}
								<div className="row">
									<div className="col-md-12">
										<div className="newsletter">
											<p>Sign Up for the <strong>NEWSLETTER</strong></p>
											<form>
												<input className="input" type="email" placeholder="Enter Your Email" />
												<button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
											</form>

										</div>
									</div>
								</div>
								{/* <!-- /row --> */}
							</div>
							{/* <!-- /container --> */}
						</div>
						{/* <!-- /NEWSLETTER --> */}
						{/* <!-- row --> */}
						<div className="row">
							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">About Us</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
									<ul className="footer-links">
										<li><Link to="#"><i className="fa fa-map-marker"></i>Muzaffarnager.UP</Link></li>
										<li><Link to="#"><i className="fa fa-phone"></i>+91  123 4567 890</Link></li>

										<li><Link to="#"><i className="fa fa-envelope-o"></i>vikas@email.com</Link></li>
									</ul>
								</div>
							</div>

							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Categories</h3>
									<ul className="footer-links">
										<li><Link to="#">Male</Link></li>
										<li><Link to="#">Female</Link></li>
										<li><Link to="#">Kids</Link></li>
										<li><Link to="#">Electronic</Link></li>
									</ul>
								</div>
							</div>

							<div className="clearfix visible-xs"></div>

							<div className="col-md-3 col-xs-6">
								<div className="footer">
									<h3 className="footer-title">Information</h3>
									<ul className="footer-links">
										<li><Link to="aboutUs">About Us</Link></li>
										<li><Link to="contact">Contact Us</Link></li>
										<li><Link to="#">Privacy Policy</Link></li>
										<li><Link to="#">Orders and Returns</Link></li>
										<li><Link to="#">Terms & Conditions</Link></li>
									</ul>
								</div>
							</div>

							<div className="col-md-3 col-xs-6">
								<div className="row">
									<div className="col-md-3 col-xs-6">
										<div className="footer">
											<h3 className="footer-title">Follow</h3>
											<ul className="footer-links" style={{ fontSize: "25px", placeItems: "center" }}>

												<li>
													<Link to="#"><i className="fa fa-facebook"></i></Link></li>
												<li>
													<Link to="#"><i className="fa fa-twitter"></i></Link>
												</li>
												<li>
													<Link to="#"><i className="fa fa-instagram"></i></Link>
												</li>
												<li>
													<Link to="#"><i className="fa fa-pinterest"></i></Link>
												</li>
											</ul>
										</div>

									</div>
									<div className="col-md-3 col-xs-6"></div>
								</div>
							</div>
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}
				</div>
				{/* <!-- /top footer --> */}


			</footer>
			{/* <!-- /FOOTER --> */}

		</>
	)
}
