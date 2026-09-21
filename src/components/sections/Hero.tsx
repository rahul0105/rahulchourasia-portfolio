// import Image from "next/image";
// import { Mail } from "lucide-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// export default function Hero() {
//     return (
//         <section id='home' className='relative overflow-hidden'>
//             <div className='mx-auto max-w-7xl px-6 lg:px-8'>
//                 <div className='grid min-h-[calc(100vh-80px)] items-center gap-10 py-16 lg:grid-cols-2 lg:gap-8 lgpy-20'>
//                     {/* Left Content */}
//                     <div className='max-w-xl'>
//                           <p className='mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500'>
//               WEBSITE & MOBILE DEVELOPER
//             </p>

//             <h1 className='text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
//               Hi, I&apos;m Rahul.
//               <br />
//               I build modern{" "}
//               <span className="text-blue-600">
//                 web and mobile applications.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
//               I create responsive, user-friendly applications using React,
//               Next.js and React Native. Focused on clean code, practical
//               solutions and real business value.
//             </p>

//             <div className='mt-8 flex flex-wrap items-center gap-4'>
//               <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
//                 View My Work →
//               </a>

//               <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
//                 Contact Me
//               </a>
//             </div>

//             <div className='mt-6 flex flex-wrap items-center gap-4'>
//                <a
//     href="https://github.com/YOUR_USERNAME"
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="GitHub"
//     className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
//   >
//     <FontAwesomeIcon
//       icon={faGithub}
//       className="h-[18px] w-[18px]"
//       aria-hidden="true"
//     />
//     <span>GitHub</span>
//   </a>

//   <a
//     href="https://www.linkedin.com/in/YOUR_USERNAME"
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="LinkedIn"
//     className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
//   >
//     <FontAwesomeIcon
//       icon={faLinkedin}
//       className="h-[18px] w-[18px]"
//       aria-hidden="true"
//     />
//     <span>LinkedIn</span>
//   </a>

//   <a
//     href="mailto:YOUR_EMAIL@example.com"
//     aria-label="Email"
//     className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
//   >
//     <Mail
//       size={18}
//       strokeWidth={1.8}
//       aria-hidden="true"
//     />
//     <span>Email</span>
//   </a>
//             </div>
//                     </div>
//                     {/* Right Visual */}
//           <div className='relative'>
//             <Image
//               src="/images/rahul-hero.webp"
//               alt="Rahul Chourasia - Frontend and Mobile Developer"
//               width={700}
//               height={700}
//               priority
//             />
//              {/* Availability Badge */}
//   <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-200">
//   <span
//     className="relative flex h-2.5 w-2.5"
//     aria-hidden="true"
//   >
//     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//     <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
//   </span>

//   <span>Open to Freelance Projects</span>
// </div>
//           </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import Image from "next/image";
import { Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="grid items-center gap-10 py-12 sm:py-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:gap-8 lg:py-20">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              WEBSITE & MOBILE DEVELOPER
            </p>

            
<h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-[42px] lg:text-6xl">
    
              Hi, I&apos;m Rahul.
              <br />
              I build modern{" "}
              <span className="text-blue-600">
                web and mobile applications.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
              I create responsive, user-friendly applications using React,
              Next.js and React Native. Focused on clean code, practical
              solutions and real business value.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href="https://github.com/rahul0105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rahul--chourasia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:contact@rahulchourasia.in"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
<div className="relative">
  {/* Soft background glow */}
  <div
    className="absolute inset-[10%] -z-10 rounded-full bg-blue-100/60 blur-3xl"
    aria-hidden="true"
  />

  {/* Hero Image */}
  <div className="relative w-full">
    <Image
      src="/images/rahul-hero.webp"
      alt="Rahul Chourasia - Frontend and Mobile Developer"
      width={700}
      height={700}
      priority
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="h-auto w-full"
    />

    {/* Top fade */}
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-50 to-transparent"
      aria-hidden="true"
    />

    {/* Bottom fade */}
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent"
      aria-hidden="true"
    />

    {/* Left fade */}
    <div
      className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent"
      aria-hidden="true"
    />

    {/* Right fade */}
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent"
      aria-hidden="true"
    />
  </div>

  {/* Availability Badge */}
  <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-lg ring-1 ring-slate-200 sm:bottom-6 sm:right-6 sm:px-4 sm:py-2.5 sm:text-sm">
    <span
      className="relative flex h-2.5 w-2.5"
      aria-hidden="true"
    >
      <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </span>

    <span>Open to Freelance Projects</span>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}