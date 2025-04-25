import { Link } from "react-router-dom"
import Gallery from "../../elements/Gallery"

export default function Footer1() {
	return (
		<>
			<footer
				className="footer-section bg-cover bg-cover"
				style={{ backgroundImage: 'url("assets/img/footer/bg.jpg")' }}
			>
				<div className="container">
					<div className="contact-info-area">
						<Link
							to="/"
							className="logo-img wow fadeInUp"
							data-wow-delay=".2s"
						>
							<img src="assets/img/allimg/logo.png" alt="img" />
						</Link>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-location-dot" />
							</div>
							<div className="content">
								<p>Our Address</p>
								<h3>Warehouse B1-13, Gate 1,<br/>
								Ajman Freezone, Ajman, UAE</h3>
							</div>
						</div>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".6s"
						>
							<div className="icon">
								<i className="fa-solid fa-envelope" />
							</div>
							<div className="content">
								<p>Email Address</p>
								<h3>
									<Link to="/mailto:info@colorcosmo.com">info@colorcosmo.com</Link>
								</h3>
							</div>
						</div>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".8s"
						>
							<div className="icon">
								<i className="fa-solid fa-phone-volume" />
							</div>
							<div className="content">
								<p>Phone Number</p>
								<h3>
									<Link to="/tel:+0589996806">+058 999 6806</Link>
								</h3>
							</div>
						</div>
					</div>
					<div className="footer-widgets-wrapper">
						<div className="row">
							<div
								className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>About Company</h5>
									</div>
									<div className="footer-content">
										<p>
										Advanced ink technology for seamless printing results. Consistency, reliability, and excellence
										</p>
										<div className="social-icon d-flex align-items-center">
											
											<Link to="/#">
												<i className="fab fa-whatsapp" />
											</Link>
										
											<Link to="/#">
												<i className="fab fa-linkedin-in" />
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".4s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Quick Link</h5>
									</div>
									<ul className="list-area">
										<li>
											<Link to="/">
												<i className="fa-solid fa-chevrons-right" />
											Home
											</Link>
										</li>
										
										<li>
											<Link to="/about">
												<i className="fa-solid fa-chevrons-right" />
											About
											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fa-solid fa-chevrons-right" />
												Products
											</Link>
										</li>
										<li>
											<Link to="/contact">
												<i className="fa-solid fa-chevrons-right" />
												Contact Us
											</Link>
										</li>
										
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".6s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Products</h5>
									</div>
									<ul className="list-area">
										<li>
											<Link to="/">
												<i className="fa-solid fa-chevrons-right" />
												Dry Offset Inks


											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fa-solid fa-chevrons-right" />
												
												Screen Printing Inks
											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fa-solid fa-chevrons-right" />
												UV Offset Printing Inks

											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fa-solid fa-chevrons-right" />
												
												UV Letterpress Inks
											</Link>
										</li>
										<li>
											<Link to="/">
												<i className="fa-solid fa-chevrons-right" />
												
												UV varnishes and consumables
											</Link>
										</li>
										
										
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".8s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Instagram</h5>
									</div>
									<div className="footer-gallery">
										<div className="gallery-wrap">
											<Gallery />
											{/* <div className="gallery-item">
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-4.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-4.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-5.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-5.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link
														to="/assets/img/footer/gallery-6.jpg"
														className="img-popup"
													>
														<img
															src="assets/img/footer/gallery-6.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>
						©  {new Date().getFullYear()} Color Cosmo {" "} | Powered By
						<a href="https://brightmedia.tech/" target="_blank"> Bright Media</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
