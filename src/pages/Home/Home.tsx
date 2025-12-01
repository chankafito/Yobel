import { Hero } from "./sections/Hero";
import { Values } from "./sections/Values";
import { Services } from "./sections/Services";
import { BigImage } from "./sections/BigImage";
import { Industries } from "./sections/Industries";

export default function Home() {

  return (
    <>
      <Hero />
      <Values />
      <Services/>
      <BigImage />
      <Industries/>
    </>
  );
}
