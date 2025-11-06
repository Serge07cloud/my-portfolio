const Projects = () =>
{
  return (
    <>
      <div className="text-center pb-44">
        <h1 className="text-5xl font-bold tracking-tight text-balance text-white sm:text-5xl">My Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">Projects</span>
        </h1>
        <div className="text-lg font-medium py-5 text-pretty text-gray-400 sm:text-xl/8">
          A selection of my work that demonstrates my skills in software engineering, from concept to deployment.
        </div>

        <div class="bg-gray-900">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article class="flex max-w-xl flex-col items-start justify-between">
                <a href="#">
                  <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169" alt="" />
                </a>
                <div className="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-400">Mar 16, 2020</time>
                  <a href="#" class="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800">Marketing</a>
                </div>
                <div class="group relative grow">
                  <h3 class="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm/6 text-gray-400">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-800" />
                  <div class="text-sm/6">
                    <p class="font-semibold text-white">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Michael Foster
                      </a>
                    </p>
                    <p class="text-gray-400">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>
              <article class="flex max-w-xl flex-col items-start justify-between">
                <a href="#">
                  <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169" alt="" />
                </a>
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-10" class="text-gray-400">Mar 10, 2020</time>
                  <a href="#" class="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800">Sales</a>
                </div>
                <div class="group relative grow">
                  <h3 class="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      How to use search engine optimization to drive sales
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm/6 text-gray-400">Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-800" />
                  <div class="text-sm/6">
                    <p class="font-semibold text-white">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Lindsay Walton
                      </a>
                    </p>
                    <p class="text-gray-400">Front-end Developer</p>
                  </div>
                </div>
              </article>
              <article class="flex max-w-xl flex-col items-start justify-between">
                <a href="#">
                  <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169" alt="" />
                </a>
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-02-12" class="text-gray-400">Feb 12, 2020</time>
                  <a href="#" class="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800">Business</a>
                </div>
                <div class="group relative grow">
                  <h3 class="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Improve your customer experience
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm/6 text-gray-400">Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.</p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-800" />
                  <div class="text-sm/6">
                    <p class="font-semibold text-white">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Tom Cook
                      </a>
                    </p>
                    <p class="text-gray-400">Director of Product</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default Projects
