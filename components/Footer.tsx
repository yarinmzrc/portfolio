import Image from "next/image";

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4">
      <p className="text-sm">Designed & Built by Yarin Mizrachi</p>
      <Image src="/logo.svg" alt="portfolio logo" width={14} height={14} />
    </footer>
  );
}

export default Footer;
