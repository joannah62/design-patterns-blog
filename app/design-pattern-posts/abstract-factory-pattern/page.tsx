import { basePath } from '../../../next.config'
import Image from 'next/image'

export default function AbstractFactoryPatternBlogPage() {
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
        <h1 className={`mb-3 text-4xl font-semibold text-center`}>Abstract Factory</h1>
        <h1 className={`mb-3 text-xl font-light text-center`}>How to use the Abstract Factory Design Pattern</h1>
      </div>

      <div className="flex h-auto flex-col items-left justify-between p-24">
        <p>
          In the previous blog post we took a look at the Factory Method design pattern: where a superclass is used as a common interface to create objects, while subclasses are able to alter the specifics around the object which is created. The Abstract Factory pattern is also a creational design pattern, and can be thought of as incorporating further abstraction to the Factory Method pattern. The key difference between the Factory Method pattern and the Abstract Factory patterns is that the former produces only one instance, while the later can be used to create multiple related instances - i.e. a superfactory which can create other factories. This is useful for when we need to create families of compatible objects. Rather than calling the concrete classes we can interact with the abstract interface which will create compatible objects. The abstraction layer provides us a lot of flexibility as we can then switch between different families of objects easily.
        </p>
        <p className={`pt-2`}>
          Let&apos;s stick to the theme of Vehicles, and say that we have a store selling cars and bikes. These vehicles may either be everyday on-road vehicles, or off-road vehicles used for adventuring. We&apos;ll want to have our standard on-road vehicles created in a standard factory, but our more adventurous off-road vehicles will need to be created in a different factory that specialises in all-terrain vehicles.
        </p>
        <p className={`pt-2`}>
          To start, let&apos;s define our abstract products (the types of objects which will be related as part of a family i.e. on-road or off-road).
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/26.png`}
                alt="Code for abstract products"
                width={265}
                height={258}
          />
        </div>
        <p className={`pt-2`}>
          Ideally, we want to be able to create 4 vehicles: on-road bikes, off-road bikes, on-road cars and off-road cars. These can be considered our concrete products: they will build on our abstract products above to define the products that our concrete factories will create.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/27.png`}
                alt="Code for concrete products"
                width={591}
                height={531}
          />
        </div>
        <p className={`pt-2`}>
          Now we are going to create our abstract Vehicle factory, which will be able to create a bike and a car.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/28.png`}
                alt="Code for abstract vehicle factory class"
                width={289}
                height={190}
          />
        </div>
        <p className={`pt-2`}>
          We can now implement concrete factories which will produce our concrete products. Each of the factories will create a family of related objects, for example here the OnRoadVehicleFactory will create our on-road bikes and cars, while the OffRoadVehicleFactory will create our off-road bikes and cars.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/29.png`}
                alt="Code concrete factories"
                width={451}
                height={411}
          />
        </div>
      </div>
    </main>
  )
}
