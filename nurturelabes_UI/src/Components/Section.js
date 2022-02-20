import React from 'react'
import './Section.css'
export default function Section({sectionName,Icon}) {
  return (
    <div className='section'>
        <div className='sectionIcon'>
                <Icon/>
        </div>
        <div className="sectionName">
                {sectionName}
        </div>
    </div>
  )
}
