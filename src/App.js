import React, {
  useState, 
  useEffect
} from 'react'
import RankList from './RankList'
import WeekSelector from './WeekSelector'
import firebase from "firebase/app"
import { getFirestore, collection, getDocs, doc, getDoc, orderBy, limit } from "firebase/firestore";
import db from './firebase'
import LogoLink from './components/LogoLink'


//Tutorial: https://www.youtube.com/watch?v=hQAHSlTtcmY
//Tutorial firebase: https://www.youtube.com/watch?v=3ZEz-iposj8
//Firebase docs: https://firebase.google.com/docs/firestore/quickstart#web-version-9
//Material UI Docs: https://mui.com/material-ui/react-box/
//Youtube JS Caching tutorial: https://www.youtube.com/watch?v=uw6mWGNLhlo

function App() {


  const [rankedTeams, setRankedTeams] = useState([])
  const [week, setWeek] = useState(9)
  const weekList = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


  //This gets rankings for a particular week and sets them to rankedTeams
  const getWeeklyRankings = async () => {
    const querySnapshot = await getDocs(collection(db, "WeeklyRankings", `${week}`, "Rankings"))
    const teams = []
    querySnapshot.forEach((doc) => {
      const team = doc.data()
      team.logoLink = LogoLink(doc.id)
      teams.push(team)
    });
    const sortedTeams = sortByRanking(teams)
    setRankedTeams(sortedTeams)
  }

//This calls getWeeklyRankings every time week is updated
 useEffect(() => {
  getWeeklyRankings()
 }, [week])

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




//TODO 1: Refactor buttons into a component - Done
//TODO 2: Style everything 
//TODO 3: Get school logos added - Done
//TODO 4: Store rankings in cache
//TODO 5: Get it live

  return (
    <>
      <WeekSelector weekList={weekList} handleWeekChange={handleWeekChange}/>
      <RankList rankedTeams={rankedTeams}/>
    </>
    )
}

export default App;
