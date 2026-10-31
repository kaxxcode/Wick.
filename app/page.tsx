import { Capabilities } from "@/components/capabilities";
import { Faq, FinalCta, Footer } from "@/components/closing";
import { Demo } from "@/components/demo";
import { Device } from "@/components/device";
import { EarlyAccess } from "@/components/early-access";
import { Hero } from "@/components/hero";
import { How } from "@/components/how";
import { Intro } from "@/components/intro";
import { Nav } from "@/components/nav";
import { Problem } from "@/components/problem";
import { UseCases } from "@/components/use-cases";
import { WhyNow } from "@/components/why-now";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Device />
        <Problem />
        <How />
        <Demo />
        <Capabilities />
        <UseCases />
        <WhyNow />
        <EarlyAccess />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
