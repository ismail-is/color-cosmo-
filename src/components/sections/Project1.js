
import { useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Project1() {
	useEffect(() => {
		const mainBoxes = document.querySelectorAll('.main-box, .box')
		const getSlide = mainBoxes.length - 1
		const slideCal = 100 / getSlide + '%'

		const boxes = document.querySelectorAll('.box')
		boxes.forEach(box => {
			box.style.width = slideCal
		})

		boxes.forEach(box => {
			box.addEventListener('mouseenter', () => {
				boxes.forEach(b => b.classList.remove('active'))
				box.classList.add('active')
			})
		})

		// Cleanup event listeners when component unmounts
		return () => {
			boxes.forEach(box => {
				box.removeEventListener('mouseenter', () => {
					boxes.forEach(b => b.classList.remove('active'))
					box.classList.add('active')
				})
			})
		}
	}, [])
	return (
		<>
			<section className="project-section fix section-padding" id="projects">
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							our complete projects
							<i className="fa-regular fa-arrow-right-long" />
						</h6>
						<h2 className="wow fadeInUp" data-wow-delay=".2s">
							Our Latest Projects
						</h2>
					</div>
				</div>
				<div className="container-fluid">
					<div className="project-wrapper">
						<div className="main-box">
							<div className="box wow fadeInUp">
								<div className="project-content">
									<h3>
										<Link to="#">quality equipment</Link>
									</h3>
									<Link to="#" className="icon">
										<i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>

							<div className="box bg-1 wow fadeInUp wow" data-wow-delay=".2s">
								<div className="project-content">
									<h3>
										<Link to="#">quality equipment</Link>
									</h3>
									<Link to="#" className="icon">
										<i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>

							<div
								className="box bg-2 active wow fadeInUp wow"
								data-wow-delay=".4s"
							>
								<div className="project-content">
									<h3>
										<Link to="#">quality equipment</Link>
									</h3>
									<Link to="#" className="icon">
										<i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>

							<div className="box bg-3 wow fadeInUp wow" data-wow-delay=".6s">
								<div className="project-content">
									<h3>
										<Link to="#">quality equipment</Link>
									</h3>
									<Link to="#" className="icon">
										<i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>

							<div className="box bg-4 wow fadeInUp wow" data-wow-delay=".8s">
								<div className="project-content">
									<h3>
										<Link to="#">quality equipment</Link>
									</h3>
									<Link to="#" className="icon">
										<i className="fa-solid fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
