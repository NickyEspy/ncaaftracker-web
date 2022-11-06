import React from 'react'
import SchoolLogo from './SchoolLogo'


export default function RankedTeam({rankedTeam}) {
	return (
		<>
			<div style={{backgroundColor: "white", marginBottom: 1, borderBottom: '1px solid black', verticalAalign: 'middle', paddingLeft: 20}}>
				<SchoolLogo team={rankedTeam}/>
				<div style={{display: 'inline-block', marginLeft: 10}}>
					<h2 style={{display: 'block', marginLeft: 0 , marginBottom: 0, marginTop: 0}}>{rankedTeam.ranking}. {rankedTeam.name}</h2>
					<p style={{display: 'block', marginLeft: 20 , marginBottom: 0, marginTop: 0, fontSize: '12px'}}>Rank Pts: {rankedTeam.dbRankingScore}</p>
					<p style={{display: 'block', marginLeft: 20 , marginBottom: 0, marginTop: 0, fontSize: '12px'}}>Record: {rankedTeam.totalWins} - {rankedTeam.totalLosses}</p>
					<p style={{display: 'block', marginLeft: 20 , marginBottom: 0, marginTop: 0, fontSize: '12px'}}>Strength Of Schedule: {rankedTeam.strengthOfScheduleRank}</p>

				</div>
			</div>
		</>
	)
}

//<p style={{display: 'inline-block', marginBottom: 0, marginTop: 0}}>Rank Pts: {rankedTeam.dbRankingScore}     Record: {rankedTeam.totalWins} - {rankedTeam.totalLosses}     Strength Of Schedule: {rankedTeam.strengthOfScheduleRank}</p>
