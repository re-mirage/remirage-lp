'use client';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';

import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Member } from '@/types/team';
import { Button } from '@/components/buttons/button';

interface MembersTableProps {
  members: Member[];
}

const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  const [sortColumn, setSortColumn] = useState<keyof Member>('username');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortedMembers = [...members].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredMembers = sortedMembers.filter((member) =>
    Object.values(member).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (column: keyof Member) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ column }: { column: keyof Member }) => (
    <span className="ml-2 inline-block">
      {sortColumn === column ? (
        sortDirection === 'asc' ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )
      ) : (
        <ChevronUp className="h-4 w-4 opacity-20" />
      )}
    </span>
  );

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search members..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="cursor-pointer" onClick={() => handleSort('username')}>
                Username <SortIcon column="username" />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('email')}>
                Email <SortIcon column="email" />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('first_name')}>
                First Name <SortIcon column="first_name" />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('last_name')}>
                Last Name <SortIcon column="last_name" />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('role')}>
                Role <SortIcon column="role" />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('rate')}>
                Rate <SortIcon column="rate" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedMembers.map((member, index) => (
              <motion.tr
                key={member.email}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-gray-50"
              >
                <TableCell className="font-medium">{member.username}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.first_name}</TableCell>
                <TableCell>{member.last_name}</TableCell>
                <TableCell>{member.role.join(', ')}</TableCell>
                <TableCell>${member.rate}/hr</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, filteredMembers.length)} of {filteredMembers.length}{' '}
          members
        </div>
        <div className="space-x-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(filteredMembers.length / itemsPerPage))
              )
            }
            disabled={currentPage === Math.ceil(filteredMembers.length / itemsPerPage)}
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MembersTable;
