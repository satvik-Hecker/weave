import Image from "next/image";
import { RoundedNavbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <RoundedNavbar></RoundedNavbar>
        </main>
    </div>
  );
}
