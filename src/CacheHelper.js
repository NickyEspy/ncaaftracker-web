import React from 'react'

//Cache Explainer: https://medium.com/javascript-dots/cache-api-in-javascript-644380391681#:~:text=You%20can%20cache%20a%20resource,data%20and%20set%20the%20cache.&text=%7D)%3B%7D)%3B

const cache = {}
const cacheTime = 100000000
let cacheTimer = 0


function getCacheTimer(time) {
	const now = new Date().getTime()
  	if (cacheTimer < now + time) {
    	cacheTimer = now + time
  	}
  	return cacheTimer
}

export { cache, cacheTime, cacheTimer, getCacheTimer }