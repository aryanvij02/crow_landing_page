import Header from "../components/Header";
import NewHero from "../components/NewHero";
import DemoVideo from "../components/DemoVideo";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import WhyCrow from "../components/WhyCrow";
import NewCTA from "../components/NewCTA";
import NewFooter from "../components/NewFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Header />
      <main className="flex-1 w-full">
        <NewHero />
        <DemoVideo />
        <Problem />
        <Solution />
        {/* <HowItWorks /> */}
        {/* <WhyCrow /> */}
        <Features />
        <NewCTA />
      </main>
      <NewFooter />
    </div>
  );
}
