import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrum() {
  return (
    <>
      
		{/* <!-- BREADCRUMB --> */}
		<div id="breadcrumb" className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><Link to="/">Home</Link></li>
							<li><Link to="#">All Categories</Link></li>
							<li><Link to="#">Accessories</Link></li>
							<li className="active">Headphones (227,490 Results)</li>
						</ul>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /BREADCRUMB --> */}
    </>
  )
}
