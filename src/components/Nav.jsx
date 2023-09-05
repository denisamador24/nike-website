import { headerLogo } from '../assets/images';
import { close, hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {
  const [toggleMenuLinks, setToggleMenuLinks] = useState(false);

  const handleMenu = () => {
    setToggleMenuLinks(prev => !prev);
  }

  return (
    <nav className='flex justify-between items-center max-container'>

      {/* logo */}
      <a href="/">
        <img
          src={headerLogo}
          alt="Logo"
          width={130}
          height={29}
        />
      </a>

      {/* desktop links */}
      <div className='flex-1 max-lg:hidden'>
        <NavLinks links={navLinks} />
      </div>

      {/* mobile menu links */}
      <div className='hidden max-lg:block relative'>
        <div
          onClick={handleMenu}
        >
          <img
            src={toggleMenuLinks ? close : hamburger}
            alt="menu"
            width={25}
            height={25}
          />
        </div>

        {toggleMenuLinks && (
          <div className='absolute top-12 right-0 p-8 bg-white shadow-md rounded'>
            <NavLinks links={navLinks} />
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLinks({ links }) {

  return (
    <ul className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16'>
      {links.map(link => (
        <li key={link.label} className='text-center'>
          <a
            href={link.href}
            className='font-montserrat leading-normal text-lg text-slate-gray'
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Nav