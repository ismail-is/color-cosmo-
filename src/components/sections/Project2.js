
import { Link } from "react-router-dom"
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2000,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".project-dot",
	},
	breakpoints: {
		1199: {
			slidesPerView: 5,
		},
		991: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2,
		},
		575: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
}

export default function Project2() {
	return (
		<>
			<section className="project-section section-padding pt-6 fix" id="projects" >
				<div className="container">
					<div className="section-title-area">
						<div className="section-title">
							<h6 className="wow fadeInUp" style={{color:'rgb(203, 35, 154)'}}>
								<i className="fa-regular fa-arrow-left-long" />
								Our Latest Projects
								<i className="fa-regular fa-arrow-right-long" />
							</h6>
							<h2 className="wow fadeInUp" data-wow-delay=".2s">
								Explore Our Project
							</h2>
						</div>
						<Link
							to="/products"
							className="theme-btn wow fadeInUp"
							data-wow-delay=".4s"
						>
							View all Products <i className="fa-regular fa-arrow-right" />
						</Link>
					</div>
				</div>
				<div className="project-wrapper-2">
					<div className="swiper project-slider">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
									<img src="assets/img/allimg/products/1/1.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h3>
												<Link to="/products">Akira</Link>
											</h3>
											{/* <span>
												<i className="fa-sharp fa-solid fa-location-dot" /> 4648
												Rocky, New York
											</span> */}
										</div>
										{/* <h2 className="number">01</h2> */}
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="project-thumb" >
								<img src="assets/img/allimg/products/1/2.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}
										>
											<h3>
												<Link to="/products">Diamond</Link>
											</h3>
											{/* <span>
												<i className="fa-sharp fa-solid fa-location-dot" /> 4648
												Rocky, New York
											</span> */}
										</div>
										{/* <h2 className="number">02</h2> */}
									</div>
								</div>
							</SwiperSlide>
							

							<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/products/1/4.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h3>
												<Link to="/products">Stanley</Link>
											</h3>
											
										</div>
										{/* <h2 className="number">04</h2> */}
									</div>
								</div>
							</SwiperSlide>


							<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/products/1/5.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h3>
												<Link to="/products">Al Ain Farms</Link>
											</h3>
											
										</div>
										{/* <h2 className="number">05</h2> */}
									</div>
								</div>
							</SwiperSlide>


							<SwiperSlide className="swiper-slide" >
								<div className="project-thumb" >
								<img src="assets/img/allimg/products/1/6.png" alt="img" />
									<div className="project-content">
										<div className="content" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}>
											<h3>
												<Link to="/products">Nestle</Link>
											</h3>
											
										</div>
										{/* <h2 className="number">06</h2> */}
									</div>
								</div>
							</SwiperSlide>
							
						</Swiper>
						<div className="project-dot" />
					</div>
				</div>
			</section>
		</>
	)
}
