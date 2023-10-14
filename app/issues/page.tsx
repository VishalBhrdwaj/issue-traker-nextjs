
import React from 'react'
import { Button, Table, TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRoot, TableRow } from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '@/prisma/client'
import IssueStatusBadge from '../components/IssueStatusBadge'
import delay from 'delay'

const IssuesPage = async () => {
  await delay(2000);
  const issues=await prisma.issues.findMany();
  return (
    <div>
      <TableRoot variant='surface'>
          <TableHeader>
            <TableRow>
            <TableColumnHeaderCell>Id</TableColumnHeaderCell>
            <TableColumnHeaderCell className='hidden md:table-cell'>Title</TableColumnHeaderCell>
            <TableColumnHeaderCell className='hidden md:table-cell'>Description</TableColumnHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              issues.map( issue =>(
                <TableRow key={issue.id}>
                  <TableCell>{issue.title}
                    <div className='block md:hidden'>
                      <IssueStatusBadge status={issue.status}/>
                    </div>
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                  <IssueStatusBadge status={issue.status}/>
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
      </TableRoot>
    </div>
  )
}

export default IssuesPage
