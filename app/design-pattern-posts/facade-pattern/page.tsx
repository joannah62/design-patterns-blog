import { basePath } from '../../../next.config'
import Image from 'next/image'

export default function FacadePatternBlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a
          href={`${basePath}/design-pattern-posts`}
      >
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Back
        </div>
      </a>
      <div className='pt-2'>
        <h1 className={`mb-3 text-4xl font-semibold text-center`}>Facade</h1>
        <h1 className={`mb-3 text-xl font-light text-center`}>How to use the Facade Design Pattern</h1>
      </div>

      <div className="flex h-auto flex-col items-left justify-between p-24">
        <p>
          The Facade pattern is a structural design pattern. It is a simplified interface to a more complex set of classes. It is therefore used to abstract the complexity out of code and reduce coupling.
        </p>
        <p className={`pt-2`}>
          The Facade pattern can be implemented when we need to interact with complex systems: perhaps some methods may need to be called in a particular order, or perhaps we are working with a library where our application only requires a subset of the functionality offered. In this way, a Facade may also be used to limit the functionality we allow the client code to access (to only what is relevant or necessary).
        </p>
        <p className={`pt-2`}>
          To picture how the Facade pattern works simply, we might consider making a burger. Overall, we will want to prepare a burger, but there are some complex steps done in a specific order to get our result. First, we want to cook the burger patty, then we will want to toast the bread. Next we will want to shred the lettuce, and finally we will want to stack our burger.
        </p>
        <p className={`pt-2`}>
          We can think of these steps like sub system classes our Facade class will call to create a burger.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/35.png`}
                alt="Code for sub system classes"
                width={439}
                height={361}
          />
        </div>
        <p className={`pt-2`}>
          Now we can define our Facade class: this can be our BurgerMaker class, which will instantiate these subsytem classes when initialised (in the __init__ method). We can then define our method on the Facade class which will build our burger. In turn, this method will call the relevant methods on our sub system classes in the required order to effectively build our burger.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/36.png`}
                alt="Code for Facade class"
                width={373}
                height={304}
          />
        </div>
        <p className={`pt-2`}>
          In this way, our client can build a burger without having to know or worry about each of the steps under the hood. If we need to change any of our subsystem classes (e.g. the temperature we cook the burger at), we only need to change this in the sub system Grill class - and not in the Facade class or client.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/37.png`}
                alt="Code for calling our Facade class"
                width={346}
                height={157}
          />
        </div>
      </div>
    </main>
  )
}
