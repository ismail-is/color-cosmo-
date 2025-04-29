import { Link } from "react-router-dom"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
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
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
}

export default function News1() {
	return (
		<>
			{/* <section className="news-section fix section-padding fix section-bg-2">
				
				<div className="container">
				
					<div className="row">
						
						<div className="col-lg-6">
							<div className="news-right-items">
								<div
									className="news-card-items wow fadeInUp"
									data-wow-delay=".2s"
								>
									<div className="news-content">
										
										<h4>
											Vision
										</h4>
										<p>
										To become a market-leading manufacturer of innovative, high-quality industrial inks and pigment pastes, known for reliability, customization, and consistency across global printing and packaging industries
										</p>
										
									</div>
									<div className="news-image">
										<img src="assets/img/allimg/2.png" alt="img" />
									</div>
								</div>
								
							</div>
						</div>
						<div className="col-lg-6">
							<div className="news-right-items">
								
								<div
									className="news-card-items wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className="news-content">
										
										<h4>
										Mission
										</h4>
										<p>
										We aim to deliver competitively priced inks and trusted technical support to our clients, offering tailor-made solutions that enhance print quality across various substrates and packaging formats
										</p>
										
									</div>
									<div className="news-image">
										<img src="assets/img/allimg/1.png" alt="img" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}


			<section className="service-section fix section-padding section-bg" id="services" style={{  backgroundImage: `url('assets/img/allimg/bg/2.png')`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'}} >

				<div className="bg-shape">
					{/* <img src="assets/img/service/bg-shape.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="section-title text-center">
						{/* <h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							our services
							<i className="fa-regular fa-arrow-right-long" />
						</h6> */}
						<h2 className="wow fadeInUp" data-wow-delay=".2s" style={{color:' rgb(203, 35, 154)',fontSize:'30px'}}>
					
						Color Cosmo’s Vision & Mission

						</h2>
						{/* <p style={{color:'black'}}>We offer a comprehensive range of services, including custom color matching, specialty coatings, and high-performance UV, UV LED  printing inks, tailored to meet the diverse needs of various industries. Our expertise ensures precision, durability, and vibrant results across all applications. With cutting-edge technology and a commitment to quality, we deliver innovative solutions that enhance product performance and visual appeal.</p> */}
					</div>
				</div>
				<div className="container-fluid">
					<div className="swiper service-slider-2">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="https://wadaangroup.com/wp-content/uploads/2025/03/QC2.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-sharp fa-solid fa-eye" />
									</div>
									<div className="content">
										<h3>
											<Link to="#">Vision</Link>
										</h3>
										<p style={{textAlign:'justify'}}>
										To become a market-leading manufacturer of innovative, high-quality industrial inks and pigment pastes, known for reliability, customization, and consistency across global printing and packaging industries
										</p>
										<Link to="/contact" className="link-btn">
								 {/* <i className="fa-solid fa-arrow-right" /> */}
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="https://wadaangroup.com/wp-content/uploads/2025/03/COLOR-MATCH.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-solid fa-rocket" />
									</div>
									<div className="content">
										<h3>
											<Link to="#">Mission</Link>
										</h3>
										<p>
										We aim to deliver competitively priced inks and trusted technical support to our clients, offering tailor-made solutions that enhance print quality across various substrates and packaging formats
										</p>
										<Link to="/contact" className="link-btn">
										 {/* <i className="fa-solid fa-arrow-right" /> */}
										</Link>
									</div>
									<div className="items-shape">
										<img src="assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
						
							
						</Swiper>
						{/* <div className="swiper-dot mt-5">
							<div className="dot" />
						</div> */}
					</div>
				</div>
				{/* <div className="container">
					<div className="service-pagi-items">
						<div className="service-dot" />
						<div className="array-buttons">
							<button className="array-prev h1p">
								<i className="fa-solid fa-arrow-left-long" />
							</button>
							<button className="array-next h1n">
								<i className="fa-solid fa-arrow-right-long" />
							</button>
						</div>
					</div>
				</div> */}
			</section>


			
		</>
	)
}
