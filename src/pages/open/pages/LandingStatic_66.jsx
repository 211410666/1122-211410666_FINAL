import { Link } from 'react-router-dom';

const LandingStatic_66 = () => {
  return (
    <>
      <div className='wild-oasis'>
        <div className='antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative'>
          <header className='border-b border-primary-900 px-8 py-5'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
              <Link className='flex items-center gap-4 z-10' to='/'>
                <img width='48px' height='36px' src='/logo.webp' />
                <span>The Wild Oasis(211410666)</span>
              </Link>
              <nav className='z-10 text-xl'>
                <ul className='flex gap-16 items-center'>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/cabins'
                    >
                      Cabins
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/about'
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/contact'
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='hover:text-accent-400 transition-colors'
                      to='/login'
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className='flex-1 px-8 py-12 grid'>
            <main className='max-w-7xl mx-auto w-full'>
              <div>
                <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
                  Our Luxury Cabins
                </h1>
                <p className='text-primary-200 text-lg mb-10'>
                  Cozy yet luxurious cabins, located right in the heart of the
                  Italian Dolomites. Imagine waking up to beautiful mountain
                  views, spending your days exploring the dark forests around,
                  or just relaxing in your private hot tub under the stars.
                  Enjoy nature's beauty in your own little home away from home.
                  The perfect spot for a peaceful, calm vacation. Welcome to
                  paradise.
                </p>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-001.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 001
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>2</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$250</span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/17'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-002.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 002
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>2</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$325</span>
                          <span className='line-through font-semibold text-primary-600'>
                            $350
                          </span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/18'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-003.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 003
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>4</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$300</span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/19'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-004.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 004
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>4</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$450</span>
                          <span className='line-through font-semibold text-primary-600'>
                            $500
                          </span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/20'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-005.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 005
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>6</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$350</span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/21'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-006.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 006
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>6</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$700</span>
                          <span className='line-through font-semibold text-primary-600'>
                            $800
                          </span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/22'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-007.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 007
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>8</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$500</span>
                          <span className='line-through font-semibold text-primary-600'>
                            $600
                          </span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/23'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex border-primary-800 border'>
                    <div className='flex-1 relative'>
                      <img
                        src='/images/cabin-008.jpg'
                        className='h-full w-fill object-cover'
                      />
                    </div>
                    <div className='flex-grow'>
                      <div className='pt-5 pb-4 px-7 bg-primary-950'>
                        <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
                          Cabin 008
                        </h3>
                        <div className='flex gap-3 items-center mb-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                            data-slot='icon'
                            className='h-5 w-5 text-primary-600'
                          >
                            <path d='M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z'></path>
                          </svg>
                          <p className='text-lg text-primary-200'>
                            For up to <span className='font-bold'>10</span>{' '}
                            guests
                          </p>
                        </div>
                        <p className='flex gap-3 justify-end items-baseline'>
                          <span className='text-3xl font-[350]'>$1400</span>
                          <span className='text-primary-200'>/ night</span>
                        </p>
                      </div>
                      <div className='bg-primary-950 border-t border-t-primary-800 text-right'>
                        <a
                          className='border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
                          href='/cabins/24'
                        >
                          Details &amp; reservation →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingStatic_66;
