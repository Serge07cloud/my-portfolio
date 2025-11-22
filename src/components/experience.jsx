const Experience = () =>
{
  return (
    <>
      <div className="text-center mx-auto max-w-6xl pb-24 sm:pb-24 lg:pb-24">
        <h1 className="text-5xl font-bold tracking-tight text-balance dark:text-white sm:text-5xl">Work <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500">Experience</span>
        </h1>
        <div className="text-lg font-normal py-5 text-pretty text-gray-600 sm:text-xl/8">
          A selection of my work that demonstrates my skills in software engineering, from concept to deployment.
        </div>
        <div className="grid place-content-center lg:grid-cols-3 lg:gap-3 mt-20">

          <a href="#" className="block max-w-sm p-6 mb-7 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Section 1</p>
          </a>

          <a href="#" className="block max-w-sm p-6 mb-7 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Section 2</p>
          </a>

          <a href="#" className="block max-w-sm p-6 mb-7 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Section 3</p>
          </a>
        </div>
      </div>
    </>
  )
};

export default Experience
