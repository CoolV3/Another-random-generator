import Image from "next/image";
import HomePage from "@/components/homepage";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <HomePage/>
    </div>
  );
}
