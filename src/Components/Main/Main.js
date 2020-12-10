import React, {Component} from 'react';

import mac from '../../images/home/mac-laptop.jpg';
import appleTv from '../../images/icons/apple-tv-logo.png';
import servantLogo from '../../images/icons/servant-logo.png';
import newIpad from '../../images/icons/new-ipad-logo.png';


import Fourth from './Fourth/Fourth'
import Rating from './Rating/Rating'
import Youtube from '../Youtube/Youtube'



class Main extends Component{
	render () {
		return (
			<div>
				<section className="main-highlight-wrapper">
					<div className="container"> 
						<div className="row h-100 align-items-center justify-content-center text-center">
							<div className="col-12">
								<div className="model">
									16-inch model
								</div>

								<div className="product-title">
									MacBook Pro
								</div>

								<div className="brief-description">
									The best for the brightest.
								</div>

								<div className="links-wrapper">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul> 
								</div>

								<div className="main-image-wrapper">
									<img src={mac}/>
								</div>
							</div>				
						</div>

						<Rating />

					</div>
				</section> 

				<section className="second-hightlight-wrapper">
					<div className="container"> 
						<div className="row h-100 align-items-center justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper">
									iPhone 11 Pro 
								</div> 

								<div className="description-wrapper">
									Pro cameras. Pro display. Pro performance.
								</div>

								<div className="price-wrapper">
									From $24.95/mo. or $599 with trade‑in.
								</div>

								<div className="links-wrapper">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul> 
								</div>
							</div>				
						</div>
					</div>
				</section> 

				<section className="third-highlight-wrapper">
					<div className="container"> 
						<div className="row h-100 align-items-center justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper">
									iPhone 11 
								</div> 
								<div className="description-wrapper">
									Just the right amount of everything.
								</div>
								<div className="price-wrapper">
									From $16.62/mo. or $399 with trade‑in.
								</div>
								<div className="links-wrapper">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul> 
								</div>
							</div>				
						</div>
					</div>
				</section> 

				<section className="fourth-heghlight-wrapper">
					<div className="row">

						<Fourth wrapperClass="left-side-wrapper" innerclassName="left-side-inner-wrapper" imgName="watch-series5-logo"  description="With the new Always-On Retina display. 
									You’ve never seen a watch like this."/>
						<Fourth wrapperClass="right-side-wrapper" innerclassName="right-side-inner-wrapper" imgName="apple-card-logo" description="Get 3% Daily Cash on purchases from Apple using Apple Card."/>


					</div>
				</section> 

				<section className="fifth-heghlight-wrapper">
					<div className="row">
						<div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
							<div className="left-side-inner-wrapper">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={appleTv} />
									</div>
								</div>

								<div className="tvshow-logo-wraper">
									<img src={servantLogo} />
								</div>

								<div className="watch-more-wrapper">
									<a href="#">Watch the trailer</a>
								</div>				
							</div>				
						</div>

						<div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
							<div className="right-side-inner-wrapper">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										AirPods Pro
									</div>
								</div>

								<div className="description-wraper">
									Magic like you’ve never heard.
								</div>

								<div className="links-wrapper">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul> 
								</div>	
							</div>			
						</div>

					</div>
				</section> 

				<section className="sixth-heghlight-wrapper">
					<div className="row">
						<div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
							<div className="left-side-inner-wrapper">
								<div className="model">
									16-inch model
								</div>

								<div className="product-title-small">
									MacBook Pro
								</div>

								<div className="description-wraper">
									The best for the brightest.
								</div>

								<div className="links-wrapper">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul> 
								</div>				
							</div>				
						</div>

						<div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
							<div className="right-side-inner-wrapper">
								<div className="top-logo-wrapper">
									<div className="logo-wrapper">
										<img src={newIpad} />
									</div>
								</div>

								<div className="description-wraper">
									Like a computer. Unlike any computer.
								</div>

								<div className="links-wrapper">
									<ul>
										<li><a href="">Learn more</a></li>
										<li><a href="">Buy</a></li>
									</ul> 
								</div>
							</div>			
						</div>

					</div>
				</section>

				<section className="youtubeVideosWrapper">
					
					<Youtube />

				</section>


			</div>
		)		
	}

}

export default Main;








	 