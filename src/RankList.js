import React from 'react'
import RankedTeam from './RankedTeam'

export default function RankList({rankedTeams}) {
	return (	
		rankedTeams.map((rankedTeam) => {
			return <RankedTeam rankedTeam={rankedTeam} />
		})
	)
}