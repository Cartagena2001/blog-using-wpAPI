import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";
import PersonBlog from "../public/assets/person-blog.json";

const SectionHome = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                ¡Hola Bienvenido a mi blog personal!
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                assumenda? Deleniti quasi inventore, libero reiciendis minima
                aliquid tempora. Obcaecati, autem.
              </p>

              <Link href="/blog/">
                <a
                  className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href=""
                >
                  <span className="text-sm font-medium"> Ir a mi blog </span>

                  <svg
                    className="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
            <div>
            <Lottie animationData={PersonBlog} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHome;
