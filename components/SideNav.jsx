import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SideNav = ({ setOpen, isOpen }) => {
  //   const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();
  const home = pathname === '/';
  const about = pathname === '/about';
  const services = pathname === '/services';
  const contact = pathname === '/contact';
  return (
    <Div>
      <motion.div
        className='toggle__backround__opacity w-full min-h-screen z-20 '
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}>
        <motion.div
          initial={{ opacity: 0, x: -800 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className='nav__links w-10/12 bg-white  min-h-screen'>
          <div className='flex items-center p-4 justify-between'>
            <Link href='/'>
              <a className='logo text-yellow-700 font-extrabold md:text-4xl text-xl tracking-wider'>
                DIVINECAKE
              </a>
            </Link>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.8}
              size={25}
            />
          </div>
          <div className='flex flex-col p-5'>
            <Link href='/'>
              <a
                className={`font-bold text-xl mb-10 hover:text-yellow-600 ${
                  home ? 'text-yellow-600' : 'text-gray-700'
                }`}>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a
                className={`font-bold text-xl mb-10 hover:text-yellow-600  ${
                  about ? 'text-yellow-600' : 'text-gray-700'
                } `}>
                About
              </a>
            </Link>
            <Link href='/services'>
              <a
                className={`font-bold text-xl mb-10 hover:text-yellow-600  ${
                  services ? 'text-yellow-600' : 'text-gray-700'
                }`}>
                Services
              </a>
            </Link>
            <Link href='/contact'>
              <a
                className={`font-bold mb-10 text-xl hover:text-yellow-600  ${
                  contact ? 'text-yellow-600' : 'text-gray-700'
                } `}>
                Contact
              </a>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Div>
  );
};

export default SideNav;

const Div = styled.div`
  .toggle__backround__opacity {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
  }

  .logo {
    font-family: 'Langar', cursive;
  }

  .nav__links {
  }
`;