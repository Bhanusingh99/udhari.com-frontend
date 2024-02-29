import HomeScrollEffect from "@/components/shared/HomeScrollEffect";
import LandingPage from "@/components/shared/LandingPage";
import CardsInfo from "@/components/shared/info";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingPage/>
      <HomeScrollEffect/>
      <CardsInfo/>
    </>
  );
}
