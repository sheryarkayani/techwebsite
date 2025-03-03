// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Services from "./pages/Services"
// import Home from "./pages/Home"
// import Insights from "./pages/Insights"
// import About from "./pages/About"
// import Navbar from "./components/Navbar"
// import { useEffect, useState } from "react"
// import Footer from "./components/Footer"
// import Contact from "./pages/Contact"

// function App() {
//   const [isAppMounted, setIsAppMounted] = useState(false)
//   useEffect(() => {
//     setIsAppMounted(true)
//   }, [])
//   return (
//     <Router>
//       <div className="min-h-screen bg-[#0a0a13] text-white relative overflow-hidden">
//         <div className="relative z-10">
//           <Navbar />
//           <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/insights" element={<Insights />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   )
// }

// export default App
// App.tsx
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"

// interface LayoutProps {
//   children: React.ReactNode
// }

// function App({ children }: LayoutProps) {
//   return (
//     <div className="min-h-screen bg-[#0a0a13] text-white relative overflow-hidden">
//       <div className="relative z-10">
//         <Navbar />
//         <main>
//           {children}
//         </main>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  const [isAppMounted, setIsAppMounted] = useState(false);
  
  useEffect(() => {
    setIsAppMounted(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#0a0a13] text-white relative overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

