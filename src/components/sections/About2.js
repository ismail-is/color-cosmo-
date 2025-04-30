
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Link } from "react-router-dom"
import "../../../node_modules/react-modal-video/css/modal-video.css"
export default function About2() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
		{/* 1 */}
		<section className="about-section fix section-padding" id="about">
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y ">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-2">
							<div className="col-lg-6">
								<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/7.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/1.png" alt="img" />
									</div>
									{/* <div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div> */}
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp d-none d-md-flex">
											<i className="fa-regular fa-arrow-left-long" />
											{/* About Our Company */}
											<i className="fa-regular fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										
										UV Offset Printing Inks
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									Our UV Offset Inks deliver high-quality results with vibrant CMYKW and PMS shades. Custom-formulated for various substrates, these inks ensure precision, durability, and optimal performance under high-speed machines.
									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/7.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p1.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>


									
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Applications
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Footboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cardboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Metalized Board
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PE Coated Paper

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PP Coated Paper
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Coated Metals
										</li>
									</ul>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Color Availability
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
										
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cyan
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Magenta
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Yellow
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Black

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Pantone Matching System
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Bespoke Color Matching
										</li>
									</ul>

										</div>
									</div>
									
									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
									<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
									UV Offset Printing Inks
										</h3>
										<br/>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Footboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cardboard
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Metalized Board
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PE Coated Paper

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											PP Coated Paper
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Coated Metals
										</li>
									</ul> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		{/* 1 */}



{/* 2 */}
<section className="about-section fix section-padding" id="about"  style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
						
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											{/* <i className="fa-regular fa-arrow-left-long" />
											About Our Company
											<i className="fa-regular fa-arrow-right-long" /> */}
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
								
										UV based screen printing ink
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									
									Upgrade your printing with our UV-based screen printing – the fastest, most vibrant solution for flawless results on any material.
UV screen printing is an advanced method that uses UV-curable inks, which dry instantly when exposed to UV light. 

									</p>
									
									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/1.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p2.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>


									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Faster Production – No drying time required

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Vibrant Colors – High opacity & sharp details

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Durability – Scratch, fade, and chemical-resistant prints

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Eco-Friendly–Low VOC emissions compared to solvent inks


										</li>
									</ul>

									<div className="row g-4 mt-3">
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon">
												<i className="far fa-dot-circle" />
												</div>
												<h5>Electronics (circuit boards, touch panels)

												</h5>
											</div>
										</div>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
												<i className="far fa-dot-circle" />
												</div>
												<h5>Signage & promotional items
												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
												<i className="far fa-dot-circle" />
												</div>
												<h5>Automotive & industrial labels

												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Glass, metal & plastic printing
												</h5>
											</div>
										</div>
									</div>
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
								<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/1.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/2.png" alt="img" />
									</div>
									
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
{/* 2 */}












{/* 3 */}
			<section className="about-section fix section-padding" id="about" style={{marginTop:'-130px'}} >
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
							<div className="col-lg-6">

								<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/6.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/products/1/3.png" alt="img" />
									</div>
									{/* <div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div> */}
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div> 
								</div> 
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp d-none d-md-flex">
											<i className="fa-regular fa-arrow-left-long" />
											{/* About Our Company */}
											<i className="fa-regular fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Dry Offset Inks
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									Color Cosmo’s UV-based Dry Offset Inks are specially formulated for rigid plastic containers. Free from ITX and Benzo, they’re ideal for pharmaceutical, cosmetic, food, and dairy packaging applications
									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/6.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p3.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Applications
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
								
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Poly Styrene (PS) Container

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Poly Propylene (PP) Containers

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											High Density Poly Ethylene Containers
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Poly Ethylene (PET) Containers

										</li>
										
									</ul>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Color Availability
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
									
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cyan
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Magenta
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Yellow
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Black

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Pantone Matching System
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Bespoke Color Matching
										</li>
									</ul>

										</div>
									</div>
									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Proactively pontificate client-centered relationships
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Is there a waiting list for desired work to be started
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Release of Letraset sheets containing Lorem Ipsum
										</li>
									</ul> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
{/* 3 */}









			












		












			{/* 4 */}
			<section className="about-section fix section-padding" id="about" style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
						
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											{/* <i className="fa-regular fa-arrow-left-long" />
											Letterpress Inks
											<i className="fa-regular fa-arrow-right-long" /> */}
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Letterpress Inks
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
					

Color Cosmo’s UV Letterpress Inks are ITX and Benzo-free, formulated for seamless application on tubes and aggressive surfaces—ideal for cosmetics, pharmaceuticals, food, and industrial packaging.
									</p>


									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/8.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p4.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									<div className="row g-4 mt-3">
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Applications
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Laminated Tubes


										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Seamless Tubes

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Aluminum Tubes
										</li>
										
										
									</ul>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
										<h3 className="wow fadeInUp" data-wow-delay=".2s">
										
										Color Availability
											</h3>
										<ul className="list-items wow fadeInUp" data-wow-delay=".2s" style={{marginTop:'10px'}}>
									
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Cyan
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Magenta
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Yellow
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Black

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Pantone Matching System
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Bespoke Color Matching
										</li>
									</ul>

										</div>
									</div>
									{/* <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Proactively pontificate client-centered relationships
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Is there a waiting list for desired work to be started
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Release of Letraset sheets containing Lorem Ipsum
										</li>
									</ul> */}
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
							<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/8.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/products/1/9.png" alt="img" />
									</div>
									
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 4 */}












			{/* 5 */}
			<section className="about-section fix section-padding" id="about" style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
							<div className="col-lg-6">
							<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/products/2.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/4.png" alt="img" />
									</div>
									{/* <div className="video-items wow fadeInUp">
										<a
											onClick={() => setOpen(true)}
											className="video-btn video-popup"
										>
											<i className="fas fa-play" />
										</a>
										<a
											onClick={() => setOpen(true)}
											className="video-text video-popup"
										>
											play now
										</a>
									</div> */}
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp d-none d-md-flex">
											<i className="fa-regular fa-arrow-left-long" />
											{/* About Our Company */}
											<i className="fa-regular fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Solvent based screen printing ink
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									For projects requiring deep material penetration and exceptional durability, our solvent-based screen printing delivers time-tested performance on challenging surfaces.
									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/2.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p5.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
									<h4 className="wow fadeInUp" data-wow-delay=".2s">
										Solvent based screen printing ink
										</h4><br/>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Deep Material Bonding – Ink penetrates surfaces for unmatched adhesion

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Weather-Resistant – Withstands outdoor conditions (UV, rain, temperature extremes)

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Vibrant & Opaque – Rich color saturation even on dark materials

										</li>
									</ul>

									<div className="row g-4 mt-3">
									<h4 className="wow fadeInUp" data-wow-delay=".2s">
									Best Applications
										</h4><br/>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Outdoor Signage & Banners</h5>
											</div>
										</div>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Vehicle Wraps & Fleet Graphics</h5>
											</div>
										</div>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Industrial Labels & Safety Markings
												</h5>
											</div>
										</div>
										<div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Promotional Products (flags, tents, awnings)
												</h5>
											</div>
										</div>
									</div>
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
{/* 5 */}



{/* 6 */}
<section className="about-section fix section-padding" id="about"  style={{marginTop:'-130px'}}>
				{/* <div className="about-shape-4 float-bob-x">
					<img src="assets/img/about/about-shape-4.png" alt="img" />
				</div> */}
				<div className="about-shape-5 float-bob-y">
					{/* <img src="assets/img/about/about-shape-5.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper-2">
						<div className="row g-4">
						
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											{/* <i className="fa-regular fa-arrow-left-long" />
											Letterpress Inks
											<i className="fa-regular fa-arrow-right-long" /> */}
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										UV varnishes
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									Enhance and protect your prints with our UV varnishing services – the ultimate solution for a premium, durable finish.



									</p>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
					
									UV varnishing is an advanced coating technique that cures instantly under UV light, creating a protective and visually striking layer.


									</p>

									<div className="row g-2 d-flex d-md-none mt-2"> {/* Show only on mobile */}
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/Ourproducts/3.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
  <div className="col-6">
    <div className="details-image">
      <img
        src="assets/img/allimg/products/p1/p6.png"
        alt="img"
        className="img-fluid"
      />
    </div>
  </div>
</div>
									
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Instant Curing – No waiting time, faster production

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											High-Gloss or Matte Finish – Customizable aesthetic effects

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Superior Protection – Scratch-resistant and long-lasting

										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Eco-Friendly – Low VOC emissions, safer for the environment


										</li>
									</ul>
									<div className="row g-4 mt-3">
									<h4 className="wow fadeInUp" data-wow-delay=".2s">
										
Best for :- 
										</h4>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Electronics (circuit boards, touch panels)
												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Signage & promotional items
												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Automotive & industrial labels

												</h5>
											</div>
										</div>
										<div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
											<div className="icon-items">
												<div className="icon">
													<i className="far fa-dot-circle" />
												</div>
												<h5>Glass, metal & plastic printing
												</h5>
											</div>
										</div>
									</div>
									{/* <div className="about-author">
										<Link
											to="/about"
											className="theme-btn wow fadeInUp"
											data-wow-delay=".2s"
										>
											Explore more <i className="fa-regular fa-arrow-right" />
										</Link>
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".4s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div className="col-lg-6">
							<div className='d-none d-md-flex'>
								<div className="about-image">
									<img
										src="assets/img/allimg/Ourproducts/3.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".3s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".2s"
									>
										<img src="assets/img/allimg/Ourproducts/1/5.png" alt="img" />
									</div>
									
									<div className="bar-shape">
										<img src="assets/img/allimg/shap/2.png" alt="img" />
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
{/* 6 */}

			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

		</>
	)
}
