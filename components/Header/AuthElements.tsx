'use client';

import { Heart, ShoppingCart, UserRound } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';
import { DropdownMenuForProfile } from '@/shared/DropdownMenuForProfile';
import { useTranslations } from 'next-intl';

const AuthElements = () => {
  const { data: session } = useSession();
  const t = useTranslations('Profile');

  return (
    <div className='flex gap-3'>
      {!session?.user ? (
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
      ) : (
        <DropdownMenuForProfile />
      )}

      <h1>{t('orders')}</h1>

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
