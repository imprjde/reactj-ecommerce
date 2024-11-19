import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderPlaced from "./components/OrderPlaced";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const limit = 30;

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/products?limit=${limit}`
      );
      setProducts(resp.data.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = (product) => {
    const isProductExist = cartItems.some(
      (item) => item.product.id === product.id
    );

    if (!isProductExist) {
      setCartItems([...cartItems, { product, qty: 1 }]);
      toast.success("Item Successfully Added to Cart !", {
        position: "top-center",
      });
    } else {
      toast.warn("Item Already in Cart !", {
        position: "top-center",
      });
    }
  };

  const handleAddToWishlist = (product) => {
    const isProductExist = wishListItems.some(
      (item) => item.product.id === product.id
    );
    if (!isProductExist) {
      setWishListItems([...wishListItems, { product, qty: 1 }]);
      toast.success("Item Successfully Added to Wishlist !", {
        position: "top-center",
      });
    } else {
      toast.warn("Item Already in Wishlist !", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} wishListItems={wishListItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={handleAddToWishlist}
                cartItems={cartItems}
                wishListItems={wishListItems}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={handleAddToWishlist}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                wishListItems={wishListItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishListItems={wishListItems}
                setWishListItems={setWishListItems}
              />
            }
          />

          <Route path="/order-placed" element={<OrderPlaced />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
