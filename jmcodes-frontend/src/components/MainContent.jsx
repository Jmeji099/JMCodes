import React from 'react'
import BlogPostOverview from './BlogPostOverview'

function MainContent() {
  return (      
    <div className='bg-slate-200 h-full w-full mt-20'>
        {/* Create the feed here. */}
        <div className='p-10'>
            <BlogPostOverview />
        </div> 
    </div>
  )
}

export default MainContent