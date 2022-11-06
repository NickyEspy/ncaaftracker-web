import React, {
  useState, 
  useEffect
} from 'react'
import RankList from './RankList'
import WeekSelector from './WeekSelector'
import firebase from "firebase/app"
import { getFirestore, collection, getDocs, doc, getDoc, orderBy, limit } from "firebase/firestore";
import db from './firebase'
import LogoLink from './LogoLink'
import { cache, cacheTime, cacheTimer, getCacheTimer } from './CacheHelper'


//Tutorial: https://www.youtube.com/watch?v=hQAHSlTtcmY
//Tutorial firebase: https://www.youtube.com/watch?v=3ZEz-iposj8
//Firebase docs: https://firebase.google.com/docs/firestore/quickstart#web-version-9
//Material UI Docs: https://mui.com/material-ui/react-box/
//Youtube JS Caching tutorial: https://www.youtube.com/watch?v=uw6mWGNLhlo

//Set isTest to true when you are working on UI so that it doesnt use real api calls
const isTest = false
const testRankedTeams = [
      {name: "Memphis", id: "1", ranking: 1, logoLink: LogoLink("1"), dbRankingScore: "123", totalWins: 8, totalLosses: 0, strengthOfScheduleRank: 17},
      {name: "Tulane", id: "2", ranking: 2, logoLink: LogoLink("2"), dbRankingScore: "323", totalWins: 5, totalLosses: 3, strengthOfScheduleRank: 92}
      ]

function App() {

  const [rankedTeams, setRankedTeams] = useState([])
  const [week, setWeek] = useState(9)
  const weekList = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


  const getWeeklyRankings = async () => {
    const querySnapshot = await getDocs(collection(db, "WeeklyRankings", `${week}`, "Rankings"))
    const teams = []
    querySnapshot.forEach((doc) => {
      const team = doc.data()
      team.logoLink = LogoLink(doc.id)
      teams.push(team)
    });
    const sortedTeams = sortByRanking(teams)
    return sortedTeams
  }

//This calls getWeeklyRankings every time week is updated
useEffect(() => {
  if (isTest) {
    setRankedTeams(testRankedTeams)
  } else {
    fetchAndSetRankedTeams()
  }
}, [week])

 const fetchAndSetRankedTeams = async () => {
    const cacheForWeek = await fetchCacheForWeek(week, cacheTime)
    cache[week] = cacheForWeek
    setRankedTeams(cacheForWeek.rankedTeams)
 }

 //This sorts
 const sortByRanking = (teams)  => {
  const sortedTeams = teams.sort(function(a, b) {
    if  (a['ranking'] > b['ranking']) {
      return 1
    }
    if  (a['ranking'] < b['ranking']) {
      return -1
    }
    return 0;
  })
  return sortedTeams
 }


 //This gets called everytime a button is pressed and updates the week
 const handleWeekChange = (week) => {
  setWeek(week)
 }

const fetchCacheForWeek = async (week, time) => {
  const now = new Date().getTime()
  if (cache[week] == undefined || 
      cache[week].rankedTeams == undefined ||
      cache[week].rankedTeams == null ||
      cache[week].cacheTimer < now
      ) 
  {
    const cacheForWeek = {}
    const fetchedRankedTeams = await getWeeklyRankings()
    cacheForWeek.rankedTeams = fetchedRankedTeams
    cacheForWeek.cacheTimer = getCacheTimer(time)
    return cacheForWeek
  } else {
    return cache[week]
  }
}

//TODO 1: Refactor buttons into a component - Done
//TODO 2: Style everything 
//TODO 3: Get school logos added - Done
//TODO 4: Store rankings in cache - Done
//TODO 5 optional : SPIKE - can I get data to last beyond 1 session
//TODO 6 optional: Add modal to display all games for team when team row is selected
//TODO 7: Add explainer descriper how the poll works
//TODO 8: Get it live

  return (
    <>
      <h1 style={{textAlign: 'center'}}>PROVE IT POLL</h1>
      <WeekSelector weekList={weekList} handleWeekChange={handleWeekChange}/>
      <h2 style={{paddingLeft: 20}}>Rankings for week {week}</h2>
      <RankList rankedTeams={rankedTeams}/>
    </>
    )
}

export default App;
