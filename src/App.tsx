import NavbarComponent from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Footer from "./components/Footer";
import TermsOfUse from "./pages/TermsOfUse";
import LegalMentions from "./pages/LegalMentions";

export default function App() {
    return (
        <div className="">
            <NavbarComponent />
            <div className="overflow-x-hidden min-h-screen px-4 max-w-6xl mx-auto py-4 md:py-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/legal-mentions" element={<LegalMentions />} />
                    <Route path="/details/:id" element={<ItemDetails />} />
                </Routes>
            </div>
            <div className="bg-white p-8">
                <Footer />
            </div>            
        </div>
    )
}
