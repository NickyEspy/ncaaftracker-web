import React from 'react'

export default function RankedTeam({rankedTeam}) {
	return (
		<div>
		{rankedTeam.ranking}. {rankedTeam.name}
		</div>
	)
}

