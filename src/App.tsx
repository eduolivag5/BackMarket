import NavbarComponent from "./components/layout/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Footer from "./components/layout/Footer";
import TermsOfUse from "./pages/TermsOfUse";
import LegalMentions from "./pages/LegalMentions";
import { useEffect } from "react";
import CategoryDetails from "./pages/CategoryDetails";
import ProductsTags from "./pages/ProductsTags";
import EndFastTech from "./pages/EndFastTech";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

export default function App() {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" }); 
    }, [location.pathname]);

    return (
        <div className="">
            <NavbarComponent />
            <main className="
                overflow-x-hidden min-h-screen 
                px-4 max-w-6xl mx-auto 
                py-10 md:pt-24 md:pb-10
            ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/legal-mentions" element={<LegalMentions />} />
                    <Route path="/products/details/:id" element={<ItemDetails />} />
                    <Route path="/products/:tags" element={<ProductsTags />} />
                    <Route path="/category/:id" element={<CategoryDetails />} />
                    <Route path="/category/:id/:tags" element={<ProductsTags />} />
                    <Route path="/end-fast-tech" element={<EndFastTech />} />
                </Routes>
            </main>
            <div className="bg-white p-8 pb-32 md:pb-8">
                <Footer />
            </div>            
        </div>
    )
}
