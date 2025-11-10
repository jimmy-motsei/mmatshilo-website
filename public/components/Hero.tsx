import React from 'react';
export default function Hero({ title, sub, children }:{title:string;sub?:string;children?:React.ReactNode}){
  return (
    <section className="container py-12">
      <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
      {sub && <p className="text-stone-700 mt-3 max-w-2xl">{sub}</p>}
      <div className="mt-6 flex flex-wrap gap-3">{children}</div>
    </section>
  );
}
