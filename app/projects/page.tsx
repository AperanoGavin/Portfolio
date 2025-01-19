import { FeaturesSectionDemo } from '@/components/card-gradient'
import React from 'react'

const page = () => {
  return (
    <main >
      <div className="flex justify-center items-center h-screen p-4 sm:p-8 lg:p-[50px]">
        <div>
          <FeaturesSectionDemo />
        </div>
      </div>
    </main>
  )
}

export default page