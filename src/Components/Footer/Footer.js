import { Link } from "react-router-dom";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-between">
          <ul className="flex items-center">
            <li className="mr-6">
              <Link className="text-white" to="/#">
                <ion-icon class="text-white" name="logo-facebook"></ion-icon>
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-white" to="/#">
                <ion-icon class="text-white" name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-white" to="/#">
                <ion-icon class="text-white" name="logo-youtube"></ion-icon>
              </Link>
            </li>
          </ul>

          <Link to="/#" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </Link>
        </div>
        <h5 className="text-secondary text-start text-xl font-bold py-5">
          Resources
        </h5>
        <div className="grid grid-cols-3 gap-4">
          <nav className="col-span-1">
            <ul className="text-white">
              <FooterLink title="Support-A-Creator" />
              <FooterLink title="Distribute on Epic Games" />
              <FooterLink title="Careers" />
              <FooterLink title="Company" />
            </ul>
          </nav>

          <nav className="col-span-1">
            <ul className="text-white">
              <FooterLink title="Fan Art Policy" />
              <FooterLink title="UX Research" />
              <FooterLink title="Store EULA" />
            </ul>
          </nav>

          <nav className="col-span-1">
            <ul className="text-white">
              <FooterLink title="Online Services" />
              <FooterLink title="Community Rules" />
              <FooterLink title="Epic Newsroom" />
            </ul>
          </nav>
        </div>
        <h5 className="text-secondary text-start text-xl font-bold py-5">
          Made By Epic Games
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
