import Logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 lg:px-14 px-8">
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="logo" width={24} height={24} />
        </Link>
      </div>
      <div className=" font-semibold">
        <Link href="/" className="pr-8">
          Snap
        </Link>
        <Link href="mailto:pawanbhayde721@gmail.com">Email</Link>
      </div>
    </nav>
  );
};

export default Navbar;
