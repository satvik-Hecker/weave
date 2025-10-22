import Image from "next/image";
import { RoundedNavbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-amber-50 relative">      
        <RoundedNavbar></RoundedNavbar>
    </div>
  );
}
