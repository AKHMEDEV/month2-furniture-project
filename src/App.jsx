import { Route, Routes } from "react-router-dom";
import {
  BlogPage,
  GarantPage,
  HomePage,
  NotFoundPage,
  PaymentPage,
  ReturnPage,
  BasketPage,
  DetailsPage,
  AllProductsPage,
  CatalogPage,
  AboutUsPage,
} from "./pages";
import { MainLayout } from "./layout";
import FavoritePage from "./pages/Favourites";
import ContactsPage from "./pages/Contacts";
import Ns from "./pages/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="products" element={<AllProductsPage />} />
        <Route path="product/:id" element={<DetailsPage />} />
        <Route path="delivery" element={<PaymentPage />} />
        <Route path="contact" element={<ContactsPage />} />
        <Route path="basket" element={<BasketPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="return" element={<ReturnPage />} />
        <Route path="garant" element={<GarantPage />} />
        <Route path="catalog" element={<CatalogPage/>}/>
        <Route path="blog" element={<BlogPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Ns />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
