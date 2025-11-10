import Link from 'next/link';
export default function Header(){
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="container py-3 flex items-center gap-6">
        <Link href="/" className="font-semibold">Dr M. Motsei</Link>
        <nav className="hidden md:flex gap-4 text-sm">
          <Link href="/healing">Healing</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/books">Books</Link>
          <Link href="/corporate-wellness">Corporate</Link>
          <Link href="/events">Events</Link>
          <Link href="/media">Media</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="ml-auto text-sm flex gap-3">
          <Link href="/cart">Cart</Link>
          <Link href="/account">Sign in</Link>
        </div>
      </div>
    </header>
  );
}
