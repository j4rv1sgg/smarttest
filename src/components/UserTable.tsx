import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { User } from '../types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const UserTable: React.FC = () => {
  const { users, filters } = useAppSelector((state) => state.app);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      Object.entries(filters).every(([key, value]) => {
        const userValue = user[key as keyof User];
        return (
          typeof userValue === 'string' &&
          userValue.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  }, [filters, users])

  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    {!filteredUsers.length && <TableCaption>No such data</TableCaption> }
    </Table>
  );
};

export default UserTable;
