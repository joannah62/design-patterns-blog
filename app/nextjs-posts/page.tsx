import { basePath } from '../../next.config'

export default function NextjsBlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a
          href={`${basePath}`}
      >
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Back
        </div>
      </a>
      <div>
      <h1 className={`mb-3 text-5xl font-semibold text-center`}>Next.js Related Blog Posts</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href={`${basePath}/nextjs-posts/create-and-deploy-nextjs-app`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Create and Deploy Next.js app using GitHub Actions{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            How to start a Next.js app and deploy using GitHub Actions.
          </p>
        </a>
      </div>
    </main>
  )
}
