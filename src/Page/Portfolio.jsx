// import React from 'react'

export default function Portfolio() {
  return (
    <>
      <section
        className="w-full px-[12%] py-10 scroll-mt-20 h-screen"
        id="work"
      >
        <h4 className="text-center mb-2 text-lg">What I Offer</h4>
        <h1>Welcome to guvi</h1>
        <h2 className="text-center text-5xl">My Portfolio</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 p-3">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 my-10 gap-5">
          <div className="aspect-square bg-[url('')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer"></div>
        </div>
      </section>
    </>
  );
}
