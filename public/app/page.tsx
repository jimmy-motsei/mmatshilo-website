import Hero from '@/components/Hero'
import { CTA } from '@/components/CTA'
import content from '@/content/site.json'

export default function Page(){
  const c:any = content;
  return (
    <div>
      <Hero title={c.home.hero.title} sub={c.home.hero.sub}>
        <CTA href="/academy">{c.home.hero.ctas[0]}</CTA>
        <CTA href="/healing">{c.home.hero.ctas[1]}</CTA>
        <CTA href="/books/hearing-visions-seeing-voices">{c.home.hero.ctas[2]}</CTA>
      </Hero>

      <section className="container grid md:grid-cols-3 gap-6 py-8">
        {c.home.pillars.map((p:any)=> (
          <div key={p.title} className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-stone-700 mt-2">{p.body}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
