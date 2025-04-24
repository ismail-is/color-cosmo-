
// import "swiper/css";
import { Link } from "react-router-dom"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: ".h1n",
		prevEl: ".h1p",
	},

	// Pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
	},
}

export default function Hero2() {
	return (
		<>
			<section className="hero-section fix hero-2">
				<div className="array-button">
					<button className="array-prev h1p">
						<i className="fal fa-arrow-right" />
					</button>
					<button className="array-next h1n">
						<i className="fal fa-arrow-left" />
					</button>
				</div>
				<Swiper {...swiperOptions} className="swiper hero-slider-2">
					<div className="swiper-wrapper">
						<SwiperSlide className="swiper-slide">
							<div
								className="slider-image bg-cover"
								style={{ backgroundImage: 'url("assets/img/hero/03.jpg")' }}
							></div>
							<div className="container">
								<div className="row g-4 align-items-center justify-content-center">
									<div className="col-lg-12">
										<div className="hero-content text-center">
											<h5 data-animation="fadeInUp" data-delay="1.3s">
												best Logistic company
											</h5>
											<h1 data-animation="fadeInUp" data-delay="1.5s">
												Warehouse Solutions <br /> for Your Business
											</h1>
											<p data-animation="fadeInUp" data-delay="1.7s">
												Suspendisse volutpat mi sit amet mauris egesta
												pellentesque. Phasellus vitae magna <br /> posuere,
												feugiat nunc vitae, placera magna. Fusce non rhoncus
												lectus.
											</p>
											<div className="hero-button">
												<Link
													to="/about"
													data-animation="fadeInUp"
													data-delay="1.9s"
													className="theme-btn hover-white"
												>
													Explore More
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
												<Link
													to="/contact"
													data-animation="fadeInUp"
													data-delay="1.9s"
													className="theme-btn bg-white"
												>
													Contact Us
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div
								className="slider-image bg-cover"
								style={{ backgroundImage: 'url("assets/img/hero/04.jpg")' }}
							></div>
							<div className="container">
								<div className="row g-4 align-items-center justify-content-center">
									<div className="col-lg-12">
										<div className="hero-content text-center">
											<h5 data-animation="fadeInUp" data-delay="1.3s">
												best Logistic company
											</h5>
											<h1 data-animation="fadeInUp" data-delay="1.5s">
												Warehouse Solutions <br /> for Your Business
											</h1>
											<p data-animation="fadeInUp" data-delay="1.7s">
												Suspendisse volutpat mi sit amet mauris egesta
												pellentesque. Phasellus vitae magna <br /> posuere,
												feugiat nunc vitae, placera magna. Fusce non rhoncus
												lectus.
											</p>
											<div className="hero-button">
												<Link
													to="/about"
													data-animation="fadeInUp"
													data-delay="1.9s"
													className="theme-btn hover-white"
												>
													Explore More
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
												<Link
													to="/contact"
													data-animation="fadeInUp"
													data-delay="1.9s"
													className="theme-btn bg-white"
												>
													Contact Us
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div
								className="slider-image bg-cover"
								style={{ backgroundImage: 'url("assets/img/hero/05.jpg")' }}
							></div>
							<div className="container">
								<div className="row g-4 align-items-center justify-content-center">
									<div className="col-lg-12">
										<div className="hero-content text-center">
											<h5 data-animation="fadeInUp" data-delay="1.3s">
												best Logistic company
											</h5>
											<h1 data-animation="fadeInUp" data-delay="1.5s">
												Warehouse Solutions <br /> for Your Business
											</h1>
											<p data-animation="fadeInUp" data-delay="1.7s">
												Suspendisse volutpat mi sit amet mauris egesta
												pellentesque. Phasellus vitae magna <br /> posuere,
												feugiat nunc vitae, placera magna. Fusce non rhoncus
												lectus.
											</p>
											<div className="hero-button">
												<Link
													to="/about"
													data-animation="fadeInUp"
													data-delay="1.9s"
													className="theme-btn hover-white"
												>
													Explore More
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
												<Link
													to="/contact"
													data-animation="fadeInUp"
													data-delay="1.9s"
													className="theme-btn bg-white"
												>
													Contact Us
													<i className="fa-solid fa-arrow-right-long" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</div>
				</Swiper>
			</section>
		</>
	)
}
