import React from 'react'
import RankedTeam from './RankedTeam'

export default function WeekSelector({weekList, handleWeekChange}) {
	return (
		weekList.map((week) => {
          return <button onClick={() => handleWeekChange(week)}>week {week}</button>
        })
	)
}