// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)

// Ensures that production builds do not include the error page
let RedwoodDevFatalErrorPage = undefined
if (process.env.NODE_ENV === 'development') {
  RedwoodDevFatalErrorPage =
    require('@redwoodjs/web/dist/components/DevFatalErrorPage').DevFatalErrorPage
}

import { Link, routes } from '@redwoodjs/router'

// ...

// export default RedwoodDevFatalErrorPage ||
//   (() => (
//     <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
//       <div className="mx-auto max-w-max">
//         <main className="sm:flex">
//           <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">
//             🤦‍♂️ Oops.
//           </p>
//           <div className="sm:ml-6">
//             <div className="sm:border-l sm:border-gray-200 sm:pl-6">
//               <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
//                 Something went wrong
//               </h1>
//               <p className="mt-1 text-base text-gray-500">
//                 Sorry about that. Please contact support for help.
//               </p>
//             </div>
//             <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
//               <Link
//                 to={routes.home()}
//                 className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Home
//               </Link>
//               <Link
//                 to={routes.support()}
//                 className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Contact Support
//               </Link>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   ))
export default RedwoodDevFatalErrorPage ||
  (() => (
    <main>
      <style
        dangerouslySetInnerHTML={{
          __html: `
              html, body {
                margin: 0;
              }
              html * {
                box-sizing: border-box;
              }
              main {
                display: flex;
                align-items: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
                text-align: center;
                background-color: #E2E8F0;
                height: 100vh;
              }
              section {
                background-color: white;
                border-radius: 0.25rem;
                width: 32rem;
                padding: 1rem;
                margin: 0 auto;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
              }
              h1 {
                font-size: 2rem;
                margin: 0;
                font-weight: 500;
                line-height: 1;
                color: #2D3748;
              }
            `,
        }}
      />
      <section>
        <h1>
          <span>Something went wrong</span>
        </h1>
      </section>
    </main>
  ))
