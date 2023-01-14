import React from "react";

function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="wrapper-page">
        {children}

        <section className="section-home">
          <h1>Home Page</h1>
        </section>
      </div>
    </>
  );
}

export default Home;
