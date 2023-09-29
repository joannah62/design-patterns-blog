import { basePath } from '../../../next.config'
import Image from 'next/image'

export default function NextjsBlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a
          href={`${basePath}/nextjs-posts`}
      >
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Back
        </div>
      </a>
      <div className='pt-2'>
        <h1 className={`mb-3 text-4xl font-semibold text-center`}>Creating and Deploying a Next.js App</h1>
        <h1 className={`mb-3 text-xl font-light text-center`}>with GitHub Pages and Actions - it couldn't be easier</h1>
      </div>

      <div className="flex h-auto flex-col items-left justify-between p-24">
        <p>
          With Next.js, GitHub Actions, and GitHub Pages, you can build, deploy, and host a simple static site - perfect for all your day-to-day blogging needs - And the best thing is, you can get up and running in a few short, easy steps!
        </p>
        <h3 className='font-semibold pt-12 text-lg'>
          1. First, you're going to want to create a Next.js app
        </h3>
        <p className='pt-2'>
          Next.js is a React framework that lets you easily generate static sites. All you need to get started with Next.js is Node 16 (or later).
        </p>
        <p className='pt-2'>
          Once you have Node installed, all you need to do is use the CLI tool <code className="font-mono font-bold ">create-next-app</code>. To do this, open up your terminal, navigate to the directory in which you wish to create the app, and run the following command:
        </p>
        <code className="font-mono font-bold pt-2 pb-2 text-center">npx create-next-app@latest</code>
        <p className='pt-2'>
          where <code className="font-mono font-bold">@latest</code> is going to ensure that you are using the latest version of Next.js.
        </p>
        <p className='pt-2'>
          After running this command, you will be asked to enter a name for your project. Enter your preferered project name and hit enter. This will be followed by further promts, such as whether or not you would like to use TypeScript and TailwindCSS. Feel free to hit enter on all of the default settings unless you have any particular preferences. Next.js has recently moved to using App Router in place of the previously used Pages Router. The use of App Router is recommended in the Next.js docs.
        </p>
        <p className='pt-2'>
          After a few moments your Next.js app should be ready to use! After navigating into the project you can run <code className="font-mono font-bold">npm run dev</code> to start the development server. You can then view the application at <code className="font-mono font-bold">http://localhost:3000</code>. And there's your Next.js app! Feel free to play around with the <code className="font-mono font-bold">page.tsx</code> file in the <code className="font-mono font-bold">app</code> directory and view the changes.
        </p>
        <h3 className='font-semibold pt-12 text-lg'>
          2. Next, you're going to want to set up a GitHub Pages project
        </h3>
        <p className='pt-2'>
          Per GitHub account, GitHub can host one static user site, or unlimited static project sites. In this blog, I will take you through setting up a project site.
        </p>
        <p className='pt-2'>
          To start, log into Gitub and create a new repository - where the repository name will be the subdomain of the static site. Set the visibility to Public.
        </p>
        <p className='pt-2'>
          Once the repository has been created, you are going to follow the commands that GitHub provides for pushing an existing repository from the command line. In the command line, navigate to your Next.js app. Follow the commands on the GitHub repository set up page to set the remote origin, rename the branch to <code className="font-mono font-bold">main</code>, and push the code to GitHub. After running those commands, refreshing the page will show you the project in GitHub.
        </p>
        <p className='pt-2'>
          Now it's time to build and deploy this project using GitHub Actions, and host using GitHub Pages.
        </p>
        <p className='pt-2'>
          Navigate to the Settings page from the top navigation bar.
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/1.png`}
                alt="Screenshot of Settings tab on nav bar"
                width={700}
                height={40}
          />
        </div> */}
        <p className='pt-2'>
          From there navigate to "Pages" on the right-hand side.
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/2.png`}
                alt="Screenshot of Pages tab on nav bar"
                width={250}
                height={250}
          />
        </div> */}
        <p className='pt-2'>
          You will then be asked for a Source. Select GitHub Actions from the drop down.
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/3.png`}
                alt="Screenshot of GitHub Actions options"
                width={250}
                height={200}
          />
        </div> */}
        <p className='pt-2'>
          Next.js will be recommended to you as a suggested workflow. Click on "Configure".
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/4.png`}
                alt="Screenshot of default Next.js Configuration"
                width={350}
                height={270}
          />
        </div> */}
        <p className='pt-2'>
          This will generate a workflow yml file for the GitHub Actions build and deploy workflow. Commit this file.
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/5.png`}
                alt="Screenshot of button tto commit changes"
                width={225}
                height={45}
          />
        </div> */}
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
        <Image
              src={`${basePath}/6.png`}
              alt="Screenshot of commit message"
              width={350}
              height={360}
        />
        </div> */}
        <p className='pt-2'>
          Navigate to the "Actions" tab on the nav toolbar.
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/7.png`}
                alt="Screenshot of Actions tab on nav bar"
                width={650}
                height={40}
          />
        </div> */}
        <p className='pt-2'>
          You will see that this build failed. Click on the build to view the error message.
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/8.png`}
                alt="Screenshot of failed build"
                width={460}
                height={160}
          />
        </div> */}
        <p className='pt-2'>
          You will see a very clear error message stating that <code className="font-mono font-bold">"next export" does not work with App Router</code> and asking us instead to use <code className="font-mono font-bold">"output: export" in next.config.js</code>.
        </p>
        <p className='pt-2'>
          Open your project locally in your prefered code editor, and open the <code className="font-mono font-bold">next.config.js</code> file. Your nextConfig should be empty and look like this:
        </p>
        <code className="font-mono font-bold pt-2 pb-2 text-center">const nextConfig = &#123;&#125;</code>
        <p className='pt-2'>
          add <code className="font-mono font-bold">output: 'export',</code> inside the object. This will enable a static export.
        </p>
        {/* <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/9.png`}
                alt="Screenshot of next config code"
                width={300}
                height={120}
          />
        </div> */}
        <p className='pt-2'>
        Commit and push these changes to GitHub (after pulling the workflow yml file from the remote) and your build should be successful. Under the deploy step in the "Actions" tab you should be able to see where your project site is being hosted. Click on this link to view it.
        </p>
        <h3 className='font-semibold pt-12 text-lg'>
          NB:
        </h3>
        <p className='pt-2'>
          If you have set up a project site (as described above), your site will be deployed under a sub-path (your project name). In this case you should add another config option to the <code className="font-mono font-bold">next.config.js</code> file which will allow you to set a prefix for the application: <code className="font-mono font-bold">basePath</code>.
        </p>
        <p className='pt-2'>
          Simply add the line <code className="font-mono font-bold">basePath: '/example-app',</code> where "example-app" is replaced with your project name.
        </p>
        <p className='pt-2'>
          You may also notice images failing to load correctly, as the basePath is not included on their location. To fix this you could hardcode the prefix into the src attribute on the anchor tag e.g. <code className="font-mono font-bold">src="/example-app/test-file.svg"</code>, however you could also choose to import the basePath from <code className="font-mono font-bold">next.config.js</code>:
        </p>
        <code className="font-mono pt-2 pb-2 font-bold text-center">import &#123; basePath &#125; from '../next.config'</code>
        <p className='pt-2'>
          and prefix the src attribute with this variable:.
        </p>
        <code className="font-mono pt-2 pb-2 font-bold text-center">src=&#123;`$&#123;basePath&#125;/test-file.svg`&#125;</code>
      </div>
    </main>
  )
}
