import { getWorksData } from '@/app/getData'
import Link from 'next/link';
import React from 'react'

const DashboardWorksPage = async () => {
  const works = await getWorksData();
  return (
    <div>
      <ul>
        {works && works.map((work) => (
          <li key={work.WorkID}>
            <Link href={`/dashboard/works/${work.WorkID}`}>{work.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DashboardWorksPage