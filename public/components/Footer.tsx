export default function Footer(){
  return (
    <footer className="mt-16 border-t border-stone-200">
      <div className="container py-8 text-sm text-stone-600">
        <p>We honour the wisdom of our elders, the dignity of every body, and the right of each person to choose their path to healing.</p>
        <p className="mt-2">© {new Date().getFullYear()} Dr M. Motsei</p>
      </div>
    </footer>
  );
}
