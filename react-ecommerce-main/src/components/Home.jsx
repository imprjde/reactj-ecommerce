import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Product from "./Product";

export default function Home({
  products,
  handleAddToCart,
  handleAddToWishlist,
  cartItems,
  isLoading,
  wishListItems,
}) {
  return (
    <>
      <Header cartItems={cartItems} wishListItems={wishListItems} />
      <ToastContainer />
      <div className="bg-gray-200 my-10  ">
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                <Product
                  isLoading={isLoading}
                  products={products}
                  handleAddToCart={handleAddToCart}
                  handleAddToWishlist={handleAddToWishlist}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
