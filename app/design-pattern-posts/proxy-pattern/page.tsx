import { basePath } from '../../../next.config'
import Image from 'next/image'

export default function ProxyPatternBlogPage() {
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
        <h1 className={`mb-3 text-4xl font-semibold text-center`}>Proxy</h1>
        <h1 className={`mb-3 text-xl font-light text-center`}>How to use the Proxy Design Pattern</h1>
      </div>

      <div className="flex h-auto flex-col items-left justify-between p-24">
        <p>
          The Proxy pattern is a structural design pattern. It allows you to wrap additional functionality around the creation of an object. This can be implemented when access to an object needs to be controlled or restricted, or when we want to perform operations before or after accessing an object without directly modifying the class (e.g. if the class is from a third-party library).
        </p>
        <p className={`pt-2`}>
          The proxy should have the same interface as the class we want to add additional functionality to - this way we can call the same methods that exist on the original class and add functionality without modifying the original class directly.
        </p>
        <p className={`pt-2`}>
          Let&apos;s say we had a document, however we only want it to be viewed by visitors who have &quot;view&quot; access.
        </p>
        <p className={`pt-2`}>
          First we can create a basic visitor class where we are going to pass through an access level. We will also create a class method that will return the access level for a visitor.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/30.png`}
                alt="Code for visitor class"
                width={403}
                height={159}
          />
        </div>
        <p className={`pt-2`}>
          Now onto the document. We can create an interface for this class that will have a display_document method.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/31.png`}
                alt="Code for IDocument interface"
                width={294}
                height={120}
          />
        </div>
        <p className={`pt-2`}>
          We can then define a Document class which will return a document on the display_document method.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/32.png`}
                alt="Code for Document class"
                width={397}
                height={114}
          />
        </div>
        <p className={`pt-2`}>
          Now we are going to create our proxy - this is where we can add additional functionality to control access to our document. It will implement the same IDocument interface, and we will pass through a visitor object (on which the decision will be made whether to display the document or not). In the contructor, we are going to create an instance of the Document class. This will be the object we expand on and wrap additional functionality around.
        </p>
        <p className={`pt-2`}>
          On the proxy, we will define a display_document class. Here we will check if the visitor has permission to view the document. If so, we will call the display_document method from the actual Document class and welcome the visitor back. Otherwise, we will not display the document and will print an access denied message instead.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/33.png`}
                alt="Code for proxy"
                width={655}
                height={309}
          />
        </div>
        <p className={`pt-2`}>
          Now when we pass through a visitor with view access to the Proxy class and call the display_document method, the document will display. However if we pass through a visitor with guest access, the document will not display.
        </p>
        <div className='pt-5 pd-3 flex justify-center items-center'>
          <Image
                src={`${basePath}/34.png`}
                alt="Code for calling proxy"
                width={528}
                height={178}
          />
        </div>
      </div>
    </main>
  )
}
