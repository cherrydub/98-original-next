import BottomDesktopBar from "./BottomDesktopBar";
import LeftDesktopNav from "./LeftDesktopNav";
import MainDesktop from "./MainDesktop";
// import "98.css";

export default function Home() {
  return (
    <>
      <LeftDesktopNav />
      <MainDesktop />
      <BottomDesktopBar />
    </>
  );
}
