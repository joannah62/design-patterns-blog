import { basePath } from '../../../next.config'
import Image from 'next/image'

export default function BuilderPatternBlogPage() {
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
        <h1 className={`mb-3 text-4xl font-semibold text-center`}>Builder</h1>
        <h1 className={`mb-3 text-xl font-light text-center`}>How to use the Builder Design Pattern</h1>
      </div>

      <div className="flex h-auto flex-col items-left justify-between p-24">
        <p>
          The Builder pattern is a creational design pattern, where the intent is to &quot;separate the construction of a complex object from its representation&quot;. This means that the same construction code can be used to produce different representations of an object. Objects are created step by step in the Builder class, rather than the passing through of a large number of parameters into a constructor.
        </p>
        <p className={`pt-2`}>
          Rather than calling the constructor method of a class directly to contruct an object (in which case the construction and represenation of an object are closely tied), in the Builder method construction is left to the Builder - separating it from the representaion of the object.
        </p>
        <p className={`pt-2`}>
          For example, say we wanted to make a pizza using the Builder pattern.
        </p>
        <p className={`pt-2`}>
          The first thing we would want to do is create the Pizza class, however we want to pass through a builder object into the constructor of the Pizza class. We will populate the class fields from the builder object.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/10.png`}
                alt="Code for Pizza class"
                width={555}
                height={186}
          />
        </div>
        <p className={`pt-2`}>
          Next, we are going to want to create our PizzaBuilder class. We can set our default fields in the constructor, but will then want to define the setter methods. By returning a reference to the builder at the end of each setter method with the populated values, we will be able to chain these methods when it comes to creating the object. Finally, we would want to define the build method on the PizzaBuilder class where we return a new instance of Pizza, passing in the instance of the PizzaBuilder as the parameter - this will return our final product.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/11.png`}
                alt="Code for PizzaBuilder class"
                width={412}
                height={733}
          />
        </div>
        <p className={`pt-2`}>
          Then, to create our pizza, we simply instantiate our PizzaBuilder, set the fields we want using the builder methods, and finally build the pizza to return a Pizza object.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/12.png`}
                alt="Code to create pizza object"
                width={915}
                height={42}
          />
        </div>
        <p className={`pt-2`}>
          Now say we actually ran a pizza take-away with set menu items. Writing out each step to build a pepperoni pizza every time we needed it could prove tedious. This is where we can introduce a new class: The Director. The Director will manage all of the pizza making. We will pass the builder into the Director, and define methods for the different types of pizza that can be made.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/13.png`}
                alt="Code for Director class"
                width={991}
                height={439}
          />
        </div>
        <p className={`pt-2`}>
          By using a director, we no longer need to write out each step - instead we can create a Director object and call the methods on this to make the pizzas we desire.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/14.png`}
                alt="Code for creating pizza using Director"
                width={589}
                height={97}
          />
        </div>
      </div>
    </main>
  )
}
