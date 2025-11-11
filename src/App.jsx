import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/Hero";
import TaskBoard from "./components/Tasks/TaskBoard/TaskBoard";

export default function App() {
  return (
    <>
      <div className="mx-4">
        <Header />
        <div className="flex flex-col justify-center items-center">
          <HeroSection />
          <TaskBoard />
        </div>
        <Footer />
      </div>
    </>
  );
}
