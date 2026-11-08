import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuButton = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    const updateHash = () => setActive(window.location.hash.slice(1));
    updateHash();
    window.addEventListener('hashchange', updateHash);
    const closeOnOutside = (event) => {
      if (!nav.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutside);
    return () => {
      window.removeEventListener('hashchange', updateHash);
      document.removeEventListener('pointerdown', closeOnOutside);
    };
  }, []);

  return (
    <nav ref={nav} aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          menuButton.current.focus();
        }
      }}
      className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-[#0b0c10]/95 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 sm:px-16">
        <a href="#" onClick={() => setOpen(false)} className="text-base font-semibold tracking-tight text-white">
          Sherezade Maqueda<span className="text-[#c5a6bd]">.</span>
        </a>
        <button ref={menuButton} type="button" aria-expanded={open} aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white md:hidden">
          {open ? 'Close' : 'Menu'}
        </button>
        <ul id="main-navigation" className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b border-white/10 bg-[#0b0c10] p-5 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined}
                onClick={() => { setActive(link.id); setOpen(false); }}
                className={`block rounded-lg px-3 py-3 text-sm transition-colors md:px-0 md:py-2 ${active === link.id ? 'text-[#c5a6bd]' : 'text-secondary hover:text-white'}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
