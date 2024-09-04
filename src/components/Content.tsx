import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setUsers } from '@/state/slices/tableSlice';
import { FilterKeys } from '@/types';
import { useEffect } from 'react';
import SearchInput from './SearchInput';
import UserTable from './UserTable';
import { ModeToggle } from './ModeToggle';

export const Content: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data)));
  }, [dispatch]);

  const filterKeys: FilterKeys[] = ['name', 'username', 'email', 'phone'];

  return (
    <div className="container p-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">User Table</h1>
        <ModeToggle />
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {filterKeys.map((key) => (
          <SearchInput key={key} filterKey={key} />
        ))}
      </div>
      <UserTable />
    </div>
  );
};
