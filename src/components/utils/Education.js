import React from 'react'
import '../styles/Education.css'

export default function Education(props) {
    var summary = []
    for (var i in props.summary) {
        summary.push(<li key={i}>{props.summary[i]}</li>)
    }
    return (
        <div className='educationWrapper'>
            <h1 className='collegeTitle'>{props.college}</h1>
            <h2 className='years'>{props.title}  {props.years}</h2>
            <h2 className='summary'>{summary}</h2>
        </div>
    )
}
