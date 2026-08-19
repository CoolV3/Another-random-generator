"use client"

import Image from "next/image";
import HomePage from "@/components/homepage";
import {Info} from "lucide-react";
import {redirect} from "next/navigation";
import {Suspense} from "react";

export default function Home() {
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
              <HomePage/>
              <div className="fixed bottom-0 right-0 p-5"><Info onClick={() => redirect("/info")} className="w-10 h-10 cursor-pointer"/></div>
            </div>
      </Suspense>
  );
}
