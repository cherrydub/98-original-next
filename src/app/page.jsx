"use client";
import BottomDesktopBar from "./BottomDesktopBar";
import LeftDesktopNav from "./LeftDesktopNav";
import MainDesktop from "./MainDesktop";

export default function Home() {
  return (
    <>
      <LeftDesktopNav />
      <MainDesktop />
      <BottomDesktopBar />
    </>
  );
}
