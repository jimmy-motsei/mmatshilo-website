export function CTA({ href, children }:{href:string;children:any}){
  return <a href={href} className="inline-block px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700">{children}</a>;
}
