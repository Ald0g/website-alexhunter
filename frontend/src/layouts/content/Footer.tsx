
"use client";

import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <Footer container>
      <div className="w-full">
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
		<Link to={"/"}>
			<div className="flex items-center mb-4">
				<img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Alex Hunter</span>
			</div>
		</Link>
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <FooterIcon href="#" icon={BsFacebook} /> */}
            <FooterIcon target="_blank" href="https://www.instagram.com/alexhunter____?igsh=NHgwb2kxcG1mamcz&utm_source=qr" icon={BsInstagram} />
            {/* <FooterIcon href="#" icon={BsTwitter} /> */}
            <FooterIcon target="_blank" href="https://github.com/Ald0g" icon={BsGithub} />
            <FooterIcon target="_blank" href="https://www.linkedin.com/in/alexhunter4" icon={BsLinkedin} />
            {/* <FooterIcon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}
