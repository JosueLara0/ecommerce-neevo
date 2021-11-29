// Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Context
import { ProductListProvider } from "./Context/ProductListContext";
import { CartProvider } from "./Context/CartContext";
import { WishListProvider } from "./Context/WishListContext";

// Layouts
import MainLayout from "./Layouts/MainLayout";

// Views
import Home from "./Views/Home";
import ProductInfo from "./Views/ProductInfo";
import WishList from "./Views/WishList";
import Cart from "./Views/Cart";
import Payment from "./Views/Payment";
import NotFound from "./Views/NotFound";

function App() {
  return (
    <ProductListProvider>
      <CartProvider>
        <WishListProvider>
          <Router>
            <MainLayout>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>

                <Route path="/productInfo/:id" exact>
                  <ProductInfo />
                </Route>

                <Route path="/wishList" exact>
                  <WishList />
                </Route>

                <Route path="/cart" exact>
                  <Cart />
                </Route>

                <Route path="/payment" exact>
                  <Payment />
                </Route>

                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </MainLayout>
          </Router>
        </WishListProvider>
      </CartProvider>
    </ProductListProvider>
  );
}

export default App;
