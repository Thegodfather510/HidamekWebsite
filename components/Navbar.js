import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";

const MyImage = React.forwardRef(({ href }, ref) => {
  return (
    <a href={href}>
      <Image src="/static/images/Hidamek.png" width={119} height={50} />
    </a>
  );
});
const Navbar = ({ page }) => {
  return (
    <>
      <nav className="fixed flex items-center justify-between w-full h-16 shadow-lg bg-gray-50">
        <div className="pt-1 pl-8">
          <Link href="/" passHref>
            <MyImage />
          </Link>
        </div>
        <div className="relative pr-4 lg:hidden">
          <Menu>
            <Menu.Button className="border-0 focus:outline-none">
              <MenuIcon />
            </Menu.Button>
            <Menu.Items
              as="div"
              className="fixed inset-0 z-50 flex flex-col w-3/4 h-full pt-24 text-lg font-semibold bg-white border-r border-gray-200 focus:outline-none"
            >
              <Menu.Item
                as="div"
                className="py-4 pl-2 border-t-2 border-b-2 border-red-200"
              >
                {({ active }) => (
                  <Link className={`${active && "bg-blue-500"} `} href="/">
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item
                as="div"
                className="py-4 pl-2 border-b-2 border-red-200"
              >
                {({ active }) => (
                  <Link className={`${active && "bg-blue-500"}`} href="/about">
                    About Us
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item
                as="div"
                className="py-4 pl-2 border-b-2 border-red-200"
              >
                {({ active }) => (
                  <Link
                    className={`${active && "bg-blue-500"}`}
                    href="/products"
                  >
                    Products
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item
                as="div"
                className="py-4 pl-2 border-b-2 border-red-200"
              >
                {({ active }) => (
                  <Link
                    className={`${active && "bg-blue-500"}`}
                    href="/projects"
                  >
                    Projects
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item
                as="div"
                className="py-4 pl-2 border-b-2 border-red-200"
              >
                {({ active }) => (
                  <Link
                    className={`${active && "bg-blue-500"}`}
                    href="/contactus"
                  >
                    Contact
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="hidden pr-10 text-xl font-semibold lg:flex">
          <div
            className={`px-4 ${page !== "home" ? "hover:" : ""}text-red-500`}
          >
            <Link href="/">Home</Link>
          </div>
          <div
            className={`px-4 ${page !== "about" ? "hover:" : ""}text-red-500`}
          >
            <Link href="/about">About us</Link>
          </div>
          <div
            className={`px-4 ${
              page !== "products" ? "hover:" : ""
            }text-red-500`}
          >
            <Link href="/products">Products</Link>
          </div>
          <div
            className={`px-4 ${
              page !== "projects" ? "hover:" : ""
            }text-red-500`}
          >
            <Link href="/projects">Projects</Link>
          </div>
          <div
            className={`px-4 ${page !== "Home" ? "hover:" : ""}text-red-500`}
          >
            <Link href="/contactus">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
