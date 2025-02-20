import React from 'react'
import { Link } from 'react-router-dom'

export default function Slick() {
     return (
<>
{/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">

					{/* <!-- section title --> */}
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">New Products</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><Link data-toggle="tab" to="#tab1">Laptops</Link></li>
									<li><Link data-toggle="tab" to="#tab1">Smartphones</Link></li>
									<li><Link data-toggle="tab" to="#tab1">Cameras</Link></li>
									<li><Link data-toggle="tab" to="#tab1">Accessories</Link></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /section title --> */}

					{/* <!-- Products tab & slick --> */}
					<div className="container  " style={{display: "inline",}}>
						<div className="row ">
							<div className=" products-tabs">
								{/* <!-- tab --> */}
								<div id="tab1" className="tab-pane active">
									<div className="products-slick" data-nav="#slick-nav-1">
										{/* <!-- product --> */}
										<div className="col-md-3 col-xs-4 product">
											<div className="product-img">
												<img src="./img/product01.png" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
													<span className="new">NEW</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product name goes here</Link></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className=" col-md-3 col-xs-4 product">
											<div className="product-img">
												<img src="./img/product02.png" alt=""/>
												<div className="product-label">
													<span className="new">NEW</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product name goes here</Link></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star-o"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="col-md-3 col-xs-4 product">
											<div className="product-img">
												<img src="./img/product03.png" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
												</div>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product name goes here</Link></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="col-md-3 col-xs-4  product">
											<div className="product-img">
												<img src="./img/product04.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product name goes here</Link></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="col-md-3 col-xs-4  product">
											<div className="product-img">
												<img src="./img/product05.png" alt=""/>
											</div>
											<div className="product-body">
												<p className="product-category">Category</p>
												<h3 className="product-name"><Link to="#">product name goes here</Link></h3>
												<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
												<div className="product-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<div className="product-btns">
													<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
													<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
													<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
												</div>
											</div>
											<div className="add-to-cart">
												<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
											</div>
										</div>
										{/* <!-- /product --> */}
									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
								</div>
								{/* <!-- /tab --> */}
							</div>
						</div>
					</div>
					{/* <!-- Products tab & slick --> */}
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /SECTION --> */}
</>

     )
}
