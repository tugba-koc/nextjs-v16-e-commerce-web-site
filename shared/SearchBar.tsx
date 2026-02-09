'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState<string>('');

  const params = useSearchParams(); // get current query params
  const router = useRouter();
  const pathname = usePathname(); // get current path

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const newParams = new URLSearchParams(params.toString());
    newParams.set('q', value);

    router.push(`${pathname}?${newParams}`);
  };

  return (
    <InputGroup className='w-full max-w-lg'>
      <InputGroupInput
        value={search}
        onChange={handleChange}
        placeholder='Ürün ara...'
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align='inline-end'></InputGroupAddon>
    </InputGroup>
  );
}
