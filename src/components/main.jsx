import Welcome from "./welcome";
import Projects from "./projects";
import Experience from "./experience";
import ReachMe from "./reachMe";

const Main = () =>
{
  return (
    <>
      <div className="isolate dark:bg-gray-900">
        <Welcome />
        <Projects />
        <Experience />
        <ReachMe />
      </div>
    </>
  )
};

export default Main
