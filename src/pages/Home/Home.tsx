import { Hero } from "./sections/Hero";
import { Values } from "./sections/Values";
import { Services } from "./sections/Services";
import { BigImage } from "./sections/BigImage";
import { Industries } from "./sections/Industries";
import { Statistics } from "./sections/Statistics";
import { Certificates } from "./sections/Certificates";
import { Faqs } from "./sections/Faqs";

export default function Home() {

  return (
    <>
      <Hero />
      <Values />
      <Services/>
      <BigImage />
      <Industries/>
      <Statistics />
      <Certificates />
      <Faqs />
    </>
  );
}
