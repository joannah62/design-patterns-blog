import { basePath } from '../../../next.config'
import Image from 'next/image'

export default function FactoryMethodPatternBlogPage() {
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
        <h1 className={`mb-3 text-4xl font-semibold text-center`}>Factory Method</h1>
        <h1 className={`mb-3 text-xl font-light text-center`}>How to use the Factory Method Design Pattern</h1>
      </div>

      <div className="flex h-auto flex-col items-left justify-between p-24">
        <p>
          The Factory Method pattern is a creational design pattern, where an object&apos;s creation is separatated from it&apos;s use. Here, a superclass is used as a common interface to create objects, while subclasses are able to alter the specifics around the object which is created. In other words, any generalised code these objects can share will be in the superclass, while any specialised code needed for specific types of objects will be applied in the subclasses. In the Factory Method pattern, inputted data dictates how exactly an object is created. There are many applications in which this can be useful. For example, if we wanted to decide what particular object we want to create during runtime based on the input. It is also useful if you are working on a project where, in the future, you may need to expand on the types of objects your code will need to use; this can be cleanly and efficiently handled by a adding subclass which will overwrite the base factory method when creating objects of this new type. No existing code will need to be modified. It provides a solution to allow devs to easily extend existing components. This overcomes complex code where conditionals are utilised to determine implementation and the behaviour of the code - which may be difficult to read, maintain, and violates the single responsibility principle (whereby a class must have one clear responsibility).
        </p>
        <p className={`pt-2`}>
          Let&apos;s visualise this with an example. Say we want to create a vehicle class that may create different vehicle objects, such as cars, bikes, and planes.
        </p>
        <p className={`pt-2`}>
          The first thing we are going to want to do is to create a common interface (the Product). Here this will be our Vehicle class. Within this class, we are going to want to define some method that every vehicle object will need to implement (here I have decided on a &quot;travel&quot; method). We can pass this method as we are just mentioning this is a method we expect each vehicle to implement - we are not actually looking to implement it here.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/21.png`}
                alt="Code for the Vehicle class"
                width={229}
                height={127}
          />
        </div>
        <p className={`pt-2`}>
          Next, we are going to create a Car class which is going to inherit and override the travel method. We can add a basic constructor - here I have put the number of wheels - and in the travel method we can print a simple phrase.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/22.png`}
                alt="Code for basic Car class"
                width={511}
                height={223}
          />
        </div>
        <p className={`pt-2`}>
          In a similar way, we can define a couple more classes, such as a bike and a plane.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/23.png`}
                alt="Code for basic Bike and Plane class"
                width={586}
                height={682}
          />
        </div>
        <p className={`pt-2`}>
          Now we actually want to create our factory class which will build our Vehicle objects. In our VehicleFactory, we are going to create a vehicle where we will pass through a vehicle type (for a simple example we will pass this in as a string). If the vehicle type is passed through as &quot;Car&quot;, we will return a new Car object, and so on for all the other Vehicle types we have defined. We can add an exception for any other type that comes through which we have not defined here.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/24.png`}
                alt="Create factory class"
                width={583}
                height={309}
          />
        </div>
        <p className={`pt-2`}>
          And here is our Factory Method design pattern. We can then create instances of each object, and call the travel method on these to compare the outputs and ensure the suclasses have overwritten this travel method.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/25.png`}
                alt="Creating specific Vehicle objects"
                width={553}
                height={175}
          />
        </div>
      </div>
    </main>
  )
}
