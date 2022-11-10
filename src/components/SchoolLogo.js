import React from 'react'

export default function SchoolLogo({team}) {
	return (
			<img style={{display: 'inline-block', backgroundColor: 'white'}} src={team.logoLink} alt="School Logo"/>
		)

}