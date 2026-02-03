import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <InputGroup className='w-full max-w-lg'>
      <InputGroupInput placeholder='Ürün ara...' />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align='inline-end'></InputGroupAddon>
    </InputGroup>
  );
}
