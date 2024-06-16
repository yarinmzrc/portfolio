import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const LINKEDIN_LINK = "https://www.linkedin.com/in/yarinmzrc/";
const GITHUB_LINK = "https://github.com/yarinmzrc";

function Footer() {
  const iconClasses =
    "h-4 w-4 transition-all duration-200 hover:scale-110 hover:text-white";
  return (
    <footer className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-4">
        <p className="text-sm">Designed & Built by Yarin Mizrachi</p>
        <Image src="/logo.svg" alt="portfolio logo" width={14} height={14} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href={LINKEDIN_LINK} target="_blank">
          <LuGithub className={iconClasses} />
        </Link>
        <div className="h-5 border-l border-l-primary"></div>
        <Link href={GITHUB_LINK} target="_blank">
          <LuLinkedin className={iconClasses} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
