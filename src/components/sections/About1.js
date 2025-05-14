
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css"
export default function About1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<section className="about-section fix section-padding" id="about">
				<div className="about-shape-1 float-bob-x">
					<img src="assets/img/about/about-shape-1.png" alt="img" />
				</div>
				<div className="about-shape-2 float-bob-x">
					{/* <img src="assets/img/about/about-shape-2.png" alt="img" /> */}
				</div>
				<div className="container">
					<div className="about-wrapper">
						<div className="row g-4">
							<div className="col-lg-6">
								<div className="about-image">
									<img
										src="assets/img/allimg/a1.png"
										alt="img"
										className="wow fadeInLeft"
										data-wow-delay=".2s"
									/>
									<div
										className="about-image-2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<img src="assets/img/allimg/a3.png" alt="img" />
										{/* <div className="video-box">
											<a
												onClick={() => setOpen(true)}
												className="video-btn video-popup"
											>
												<i className="fas fa-play" />
											</a>
										</div> */}
									</div>
									<div className="about-line-shape">
										<img src="assets/img/about/about-shape-3.png" alt="img" />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-content">
									<div className="section-title">
										{/* <h6 className="wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											<i className="fa-regular fa-arrow-right-long" />
										</h6> */}
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
										Our Ink Solutions Are Crafted For Quality Printing
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
									We manufacture custom industrial inks for dry offset, screen, UV offset, and letterpress printing—designed for durability, brilliance, and precision across all packaging types.
									</p>
									<ul className="list-items wow fadeInUp" data-wow-delay=".2s">
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Precision-Engineered Inks for Unmatched Print Quality
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Custom Ink Solutions Tailored to Your Printing Needs
										</li>
										<li>
											{" "}
											<i className="fa-solid fa-circle-check" />
											Reliable and High-Performance Inks for Every Application
										</li>
									</ul>
									{/* <div className="about-author">
										<div
											className="author-image wow fadeInUp"
											data-wow-delay=".2s"
										>
											<img src="assets/img/about/author.png" alt="author-img" />
											<div className="content">
												<p>Trastek, CEO</p>
												<h4>Brooklyn Simmons</h4>
											</div>
										</div>
										<img
											src="assets/img/about/signature.png"
											alt="img"
											className="wow fadeInUp"
											data-wow-delay=".4s"
										/>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
