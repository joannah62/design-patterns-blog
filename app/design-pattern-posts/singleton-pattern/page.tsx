import { basePath } from '../../../next.config'
import Image from 'next/image'

export default function SingletonPatternBlogPage() {
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
        <h1 className={`mb-3 text-4xl font-semibold text-center`}>Singleton</h1>
        <h1 className={`mb-3 text-xl font-light text-center`}>How to use the Singleton Design Pattern</h1>
      </div>

      <div className="flex h-auto flex-col items-left justify-between p-24">
        <p>
          The Singleton pattern is another creational design pattern, and one of the most simple. This design pattern is used when we only ever want one instance of a class. This instance may then be accessed globally. This makes it a common use case for database connections (where multiple connections result in higher costs), loggers, or any cases where the instantiation of a class may be costly, use a lot of resources, and/or take a significant amount of time. This one instance can then be used anywhere in the program without having to initialise the class multiple times. Below is one example in Python (there are multile ways this pattern may be implemented in Python), using an approach similar to how a singleton may be constructed in other languages such as TypeScript.
        </p>
        <p className={`pt-2`}>
          As mentioned above, this pattern is relatively easy to set up. Ultimately, we want to ensure that a class can only be instantiated once. If we ant to get an instance after it&apos;s initial instantiation, we would return the existing instance.
        </p>
        <p className={`pt-2`}>
          In order to utilise the singleton pattern, we want to start by creating a Singleton class. In this class, we will be aiming to define a static method &quot;get_instance&quot;. Within our program, we will want to get the singleton by calling this method. This will allow us to ensure when this method is called, we are only returning the one instance of the singleton.
        </p>
        <p className={`pt-2`}>
          The logic behind creating the initial instance of our class, and then returning this one instance when get_instance is called a second time will be in our singleton class. To achieve this, we are going to want to define a class variable which we are initially going to assign the value None (the class has not yet been instantiated). The object will be created on the first call the the get_instance method.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/15.png`}
                alt="Code for class variable"
                width={280}
                height={99}
          />
        </div>
        <p className={`pt-2`}>
          Now that we have this class variable, we can use this to decide when we are going to create a new instance or not in our static get_instance method. We can do this with a simple conditional statement that will check if the class variable __instance has a value and, if it doesn&apos;t, we will instantiate the singleton object by calling Singleton(). Whether we instatiate a new singleton object, or whether it had already been instantiated, we are always going to want to return the instance (set in the class variable).
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/16.png`}
                alt="Code for get_instance static method"
                width={466}
                height={259}
          />
        </div>
        <p className={`pt-2`}>
          Now that we have our get_instance method returning an instance (whether it must be initially instantiated or has been called previously) we need to declare the constructor. Here we will use the dunder method __init__ to create the instance. We are then going to set the class variable (__instance) to self.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/17.png`}
                alt="Code for constructor"
                width={457}
                height={346}
          />
        </div>
        <p className={`pt-2`}>
          Although we have commited to using the get_instance static method to get our class instance, this code does not currently prevent a developer from instatiating a new class directly (by calling Singleton()). We can mitigate this in our constructor by ensuring the the class variable __instance has not yet been set. If it has, we can throw an error to ensure a second object is not instantiated.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/18.png`}
                alt="Returning exception in constructor if instance already exists"
                width={646}
                height={450}
          />
        </div>
        <p className={`pt-2`}>
          The above will now ensure we can only create an instance of this class once. And we have now have a singleton.
        </p>
        <p className={`pt-2`}>
          But how can we prove this works?
        </p>
        <p className={`pt-2`}>
          We may want to ensure that calling the get_instance method multiple times returns the same object.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/19.png`}
                alt="Evaluating results of two get_instance calls"
                width={598}
                height={157}
          />
        </div>
        <p className={`pt-2`}>
          Or perhaps we could mutate the object on our initial call to get the singleton, and see if the object returned on a subsequent call has also been affected.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/20.png`}
                alt="Mutating object on singleton one and printing singleton two"
                width={471}
                height={145}
          />
        </div>
      </div>
    </main>
  )
}
