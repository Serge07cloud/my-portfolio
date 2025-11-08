import Welcome from "./Welcome";
import Projects from "./Projects";
import Expertise from "./Expertise";
import Calling from "./Calling";

const Main = () =>
{
  return (
    <>
      <div className="isolate dark:bg-gray-900">
        <Welcome />
        <Projects />
        <Expertise />
        <Calling />
      </div>
    </>
  )
};

export default Main
