import AI from "@/sections/home/AI";
import Exampels from "@/sections/home/Exampels";
import Hero from "@/sections/home/Hero";
import ML from "@/sections/home/ML";
import Technologies from "@/sections/home/Technologies";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Exampels />
      <AI />
      <Technologies />
      <ML />
    </main>
  );
}
