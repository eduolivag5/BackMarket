import NavbarComponent from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Footer from "./components/Footer";
import TermsOfUse from "./pages/TermsOfUse";
import LegalMentions from "./pages/LegalMentions";
import { useEffect } from "react";
import CategoryDetails from "./pages/CategoryDetails";

export default function App() {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" }); 
    }, [location.pathname]);

    return (
        <div className="">
            <NavbarComponent />
            <div className="overflow-x-hidden min-h-screen px-4 max-w-6xl mx-auto py-4 md:py-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/legal-mentions" element={<LegalMentions />} />
                    <Route path="/details/:id" element={<ItemDetails />} />
                    <Route path="/category/:id" element={<CategoryDetails />} />
                </Routes>
            </div>
            <div className="bg-white p-8">
                <Footer />
            </div>            
        </div>
    )
}
