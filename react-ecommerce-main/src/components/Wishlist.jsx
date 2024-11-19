import React from "react";
import { Link } from "react-router-dom";

export default function Wishlist({ wishListItems, setWishListItems }) {
  const removeFromWishlist = (id) => {
    let filteredWishlist = wishListItems.filter(
      (item) => item.product.id !== id
    );
    setWishListItems(filteredWishlist);
  };
  return (
    <>
      <div
        className="my-44 drop-shadow-2xl  "
        style={{ filter: "drop-shadow(0px 4px 6px rgba(139, 92, 246, 0.6))" }}
      >
        <div className="flex h-full m-auto bg-white justify-center rounded-md flex-col md:w-[60%] mt-14 mx-3 md:m-auto overflow-y-auto ">
          {" "}
          <div className="flex-1 overflow-y-auto px-4  py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <div className="text-lg font-medium text-gray-900">
                Your Wishlist
              </div>
            </div>

            {wishListItems?.length === 0 && (
              <div className="m-auto  flex justify-center items-center">
                <span className="font-semibold mt-10 md:mt-5 text-2xl text-gray-800">
                  Sorry!! Wishlist is Empty :)
                </span>
              </div>
            )}

            {wishListItems?.length > 0 && (
              <div className="mt-8">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {wishListItems?.map((product, index) => (
                      <Link
                        to={`/product/${product.product.id}`}
                        key={product.product.id}
                        className="flex hover:bg-gray-200 cursor-pointer my-2 px-3 rounded-md py-6"
                      >
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product?.product?.thumbnail}
                            alt={product?.product?.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={product?.href}>
                                  {product?.product?.title}
                                </a>
                              </h3>
                              <p className="ml-4">
                                ${" "}
                                {Math.ceil(
                                  product?.product?.price -
                                    product?.product?.price /
                                      product?.product?.discountPercentage
                                ) * product?.qty}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {product?.product?.brand} |{" "}
                              {product?.product?.category}
                            </p>
                          </div>
                          <div className="flex flex-1  mt-2 justify-end  text-sm">
                            <div className="flex">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeFromWishlist(product?.product?.id);
                                }}
                                type="button"
                                className="font-medium bg-indigo-600 text-white px-2 rounded-md "
                              >
                                Remove from wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
