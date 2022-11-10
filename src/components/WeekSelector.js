import React from 'react'

export default function WeekSelector({weekList, handleWeekChange}) {
	return (
		weekList.map((week) => {
          return <button onClick={() => handleWeekChange(week)}>week {week}</button>
        })
	)
}