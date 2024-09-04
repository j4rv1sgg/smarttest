import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { setFilter } from '../state/slices/tableSlice';
import { AppState } from '../types';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  filterKey: keyof AppState['filters'];
}

const SearchInput: React.FC<SearchInputProps> = ({ filterKey }) => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector((state) => state.app.filters[filterKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ key: filterKey, value: e.target.value }));
  };

  return (
    <Input
      placeholder={`Search ${filterKey}`}
      value={filterValue}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
