import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/images/logo.png';

const Footer = () => {
    const currentYear=new Date().getFullYear()
  return (
    // < !--Footer -- >
    <footer class="bg-gray-200 py-4 mt-auto">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div class="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" class="h-8 w-auto" />
        </div>
        <div class="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul class="flex space-x-4">
            <li>
              <Link href="/properties">Properties</Link>
            </li>
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
