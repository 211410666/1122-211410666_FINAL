import { Link } from 'react-router-dom';
import { useCabinsOpen } from '../features/cabin/useCabinsOpen';
import { CabinsList } from '../components/CabinsList';

const Landing_66 = () => {
  const { cabins, isLoading } = useCabinsOpen();
  console.log('Landing_66 cabins', cabins);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className='wild-oasis'>
        <div className='antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative'>
          <header className='border-b border-primary-900 px-8 py-5'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
              <Link className='flex items-center gap-4 z-10' to='/'>
                <img width='48px' height='36px' src='/logo.webp' />
                <span>The Wild Oasis(劉泓伸,211410666)</span>
              </Link>
              <nav className='z-10 text-xl'>
                <ul className='flex gap-16 items-center'>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/landing'
                    >
                      Home_66
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/cabins'
                    >
                      Cabins_66
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/about'
                    >
                      About_66
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/contact'
                    >
                      Contact us_66
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/login'
                    >
                      Login_66
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className='flex-1 px-8 py-12 grid'>
            <CabinsList cabins={cabins} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing_66;
