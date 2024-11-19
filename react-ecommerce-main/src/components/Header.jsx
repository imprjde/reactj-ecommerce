import { Disclosure } from "@headlessui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

export default function Header({ children, cartItems, wishListItems }) {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 z-10">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div>
              {" "}
              <Link
                to="/"
                className="text-white border px-2 py-1 rounded-md  font-extrabold text-2xl md:text-3xl"
              >
                E-SHOP
              </Link>
            </div>

            <div>
              <div className="absolute cursor-pointer inset-y-0 right-0   flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  to="/cart"
                  className="relative rounded-full mr-2 mt-2  bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <FaShoppingCart size={28} className="text-white" />
                </Link>
                <span className="bg-red-500 text-white px-2 rounded-full mb-4 -ml-4 z-20 font-semibold mr-5 ">
                  {cartItems?.length}
                </span>

                <Link
                  to="/wishlist"
                  className="relative rounded-full mr-2 mt-2  bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <CiHeart size={28} className="text-white" />
                </Link>
                <span className="bg-yellow-500 text-white px-2 rounded-full mb-4 -ml-4 z-20 font-semibold mr-5 ">
                  {wishListItems?.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {children}
      </>
    </Disclosure>
  );
}
