import { TableRoot, TableHeader, TableRow, TableColumnHeaderCell, TableBody, TableCell } from '@radix-ui/themes'
import React from 'react'
import IssueStatusBadge from '../components/IssueStatusBadge'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
  const issues=[1,2,3,4,5]

  return (
    
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
          <TableRow key={issue}>
            <TableCell><Skeleton/>
              <div className='block md:hidden'>
                <Skeleton/>
              </div>
            </TableCell>
            <TableCell className='hidden md:table-cell'>
            <Skeleton/>
            </TableCell>
            <TableCell className='hidden md:table-cell'><Skeleton/></TableCell>
          </TableRow>
        ))
      }
    </TableBody>
</TableRoot>
  )
}

export default Loading