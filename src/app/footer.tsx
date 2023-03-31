import Image from 'next/image';
import facebook from '@/../public/socialMediaIcons/facebook.svg';
import twitter from '@/../public/socialMediaIcons/twitter.svg';
import instagram from '@/../public/socialMediaIcons/instagram.svg';

export default function Footer() {
	return (
		<footer className="mx-auto bg-dark-blue px-28 py-20 flex flex-col lg:flex-row lg:justify-center lg:items-center w-full md:w-fit  gap-x-28 gap-y-14 text-white md:rounded-footerRadius">
			<section className="grid grid-cols-1 gap-x-28 gap-y-14 md:grid-cols-3">
				<div className="space-y-2">
					<h3 className="font-merriweather font-medium text-lg uppercase tracking-widest">
						Info
					</h3>
					<ul className="font-ibm_plex_sans opacity-70 space-y-2">
						<li>Formats</li>
						<li>Compression</li>
						<li>Pricing</li>
						<li>FAQ</li>
						<li>Status</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h3 className="font-merriweather uppercase tracking-widest">
						Resources
					</h3>
					<ul className="font-ibm_plex_sans opacity-70 space-y-2">
						<li>Developer API</li>
						<li>Tools</li>
						<li>Blog</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h3 className="font-merriweather uppercase tracking-widest">
						Company
					</h3>
					<ul className="font-ibm_plex_sans opacity-70 space-y-2">
						<li>About Us</li>
						<li>Sustainability</li>
						<li>Terms of Service</li>
						<li>Privacy</li>
					</ul>
				</div>
			</section>

			<section className="font-ibm_plex_sans	text-sm space-y-5">
				<div className="py-5 space-y-2 font-medium">
					<h3>Subscribe to our email newsletter</h3>
					<div className="flex gap-x-2 flex-col lg:flex-row gap-y-3 ">
						<input
							type="text"
							placeholder="Your email"
							className="border-inputBorder border-2 bg-transparent rounded-buttonRadius px-5 py-3	 "
						/>
						<button className="uppercase p-2 bg-specialWhite rounded-buttonRadius text-dark-blue font-bold px-4">
							subscribe
						</button>
					</div>
				</div>
				<div className="space-y-2">
					<span>Follow Us</span>
					<div className="flex gap-x-2.5">
						{/*    icons*/}
						<span className="bg-facebookBlue rounded-iconRadius p-2">
							<Image src={facebook} alt="facebook" />
						</span>
						<span className="bg-twitterBlue rounded-iconRadius p-2">
							<Image src={twitter} alt="twitter" />
						</span>
						<span className="bg-gradient-to-bl from-[#9D23E4] via-[#C47067] to-[#FFB73D] rounded-iconRadius p-2">
							<Image src={instagram} alt="instagram" />
						</span>
					</div>
				</div>
			</section>
		</footer>
	);
}
