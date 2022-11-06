import React from 'react'
import SchoolLogo from './SchoolLogo'


export default function RankedTeam({rankedTeam}) {
	return (
		<>
			<SchoolLogo team={rankedTeam}/>
			<h2>{rankedTeam.ranking}. {rankedTeam.name}</h2>
			<p>{rankedTeam.totalWins} - {rankedTeam.totalLosses}</p>
		</>
	)
}
