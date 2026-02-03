'use client';

import { Heart, ShoppingCart, UserRound } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';

const AuthElements = () => {
  const { data: session } = useSession();

  return (
    <div className='flex gap-3'>
      {!session?.user && (
        <div className='flex items-center gap-1'>
          <Button variant='ghost' size='sm'>
            <Link className='flex items-center gap-1' href='/login'>
              <UserRound />{' '}
              <span className='font-medium text-sm text-gray-800'>
                Giriş Yap
              </span>
            </Link>
          </Button>
        </div>
      )}

      <div className='flex items-center gap-1'>
        <Button variant='ghost' size='sm'>
          <Heart />{' '}
          <span className='font-medium text-sm text-gray-800'>Favorilerim</span>
        </Button>
      </div>
      <div className='flex items-center gap-1'>
        <Button variant='ghost' size='sm'>
          <ShoppingCart />{' '}
          <span className='font-medium text-sm text-gray-800'>Sepetim</span>
        </Button>
      </div>
    </div>
  );
};

export default AuthElements;
