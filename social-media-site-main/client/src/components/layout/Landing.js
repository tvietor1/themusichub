import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeroImage from '../../img/music-hero-img.webp'; // supporting image
import Logo from '../../img/TheMusicHublogo.webp'; //  logo

const Landing = () => {
	// Using useSelector to access isAuthenticated from the Redux store
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Fragment>
			<section className="hero">
				<div className="landing">
					<div className="landing-content">
						<img src={Logo} alt="TheMusicHub Logo" className="logo" />
						<h1 className="x-large">Welcome to TheMusicHub</h1>
						<p>
							A place where music lovers connect, share playlists, and discuss
							the latest trends in the music world.
						</p>
						<Link className="btn btn-primary" to="/signup">
							Join the Community
						</Link>
					</div>
					<div className="landing-img">
						<img src={HeroImage} alt="Music enthusiasts" />
					</div>
				</div>
			</section>

			<section className="block container">
				<h1>How to get started</h1>

				<p>
					<strong>1 </strong>
					Customize your profile. Click your profile image in the top
					right corner, then select the gear icon to personalize your profile with your favorite genres and artists.
				</p>
				<p>
					<strong>2 </strong>
					Explore fellow music lovers and their playlists.
				</p>
				<p>
					<strong>3 </strong>
					Like and share songs and playlists to engage with the community.
				</p>
				<p>
					<strong>4 </strong>
					Start discussions or join existing conversations about your favorite albums, artists, and music events.
				</p>
			</section>

			<section className="container">
				<h1 className="large">What is TheMusicHub?</h1>

				<p>
					TheMusicHub is a community for music enthusiasts to connect, share their love for music, and discover new songs, albums, and artists.
				</p>
			</section>
		</Fragment>
	);
};

export default Landing;
