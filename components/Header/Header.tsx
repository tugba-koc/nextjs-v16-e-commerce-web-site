import SearchBar from '@/shared/SearchBar';
import Image from 'next/image';
import AuthElements from './AuthElements';
import ShortSearchResult from '../ShortSearchResult';

const Header = () => {
  return (
    <div className='px-8 flex gap-10 items-center justify-between h-16 bg-white shadow-sm'>
      <Image
        src='/images/main-logo.png'
        width={120}
        height={40}
        alt='main logo'
      />
      <SearchBar />
      <AuthElements />
    </div>
  );
};

export default Header;
