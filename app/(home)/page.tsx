import Hero from "@/components/hero";
import { Mandate } from "@/components/sections/mandate";
import { Model } from "@/components/sections/model";
import { Territories } from "@/components/sections/territories";
import { Consular } from "@/components/sections/consular";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Mandate />
      <Model />
      <Territories />
      <Consular />
      <Contact />
    </>
  );
}
