import { createContext, useState, useEffect } from 'react';
import { Pedometer } from 'expo-sensors';

export const pedometerContext = createContext();

const BACKFILL_DAYS = 7

const PedometerProvider = (props) => {
    const user = props.user
    const cats = props.cats
    const datesArr = user.dates
    const totalCats = user.user_cats
    const [totalSteps, setTotalSteps] = useState(datesArr.reduce( (acc, obj) =>  acc + obj.steps, 0))
    const remainingSteps = totalSteps  - (totalCats.length * 10000)
    const [catsToBeCollected, setCatsToBeCollected] = useState(Math.max(Math.floor(remainingSteps / 10000),0))
    const [dailySteps, setDailySteps] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [catUserOwns, setCatUserOwns] = useState(user.user_cats.map(userCat => userCat.cat)) 
    const [openGatcha, setOpenGatcha] = useState(false)
    
    const gotcha = async()=>{
        setOpenGatcha(true)
        let randomInt = Math.ceil(Math.random() * cats.length)
        var catObj = {user_id: user.id, cat_id: randomInt}
        
        await fetch(`http://10.129.2.160:5555/user_cats`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(catObj),
        })
        .then(res => res.json())
        .then(data => {
          setOpenGatcha(false)
          setCatsToBeCollected(prev=>prev-1)
          setCatUserOwns([...catUserOwns, data.cat])
      })
    }

    //Total Steps Logic:
    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
    
        if (isAvailable) {
          const end = new Date();
          const start = new Date();
          start.setHours(0,0,0,0);
    
          const arr  = []
          for (i = 0; i < 31; ++i) {
            const dailyStepsResult = await Pedometer.getStepCountAsync(start, end);
            arr.push(dailyStepsResult);
          }
          const dailyStepsResult = await Pedometer.getStepCountAsync(start, end);
          if (dailyStepsResult) {
            setDailySteps(dailyStepsResult.steps);
          }
          // SHOWS CURRENT STEPS!!! when app is open
          return Pedometer.watchStepCount(result => {
              setCurrentStepCount(result.steps);
            });
        }
    };
    useEffect(() => {
        Last7Days();
        const subscription = subscribe();
        return () => subscription && subscription.remove();

    }, []);
    
    async function Last7Days () {
        const result = [];
        let steps = totalSteps
        for (let i=1; i<=BACKFILL_DAYS; i++) {
            const start = new Date();
            const end = new Date();
            end.setDate(end.getDate() - i); 
            end.setHours(23,59,59,99)
            start.setDate(start.getDate() - i); 
            start.setHours(0,0,0,0)
            let dateInput = [start.getFullYear(), start.getMonth()+1, start.getDate()].join('-')
            const savedDates = user.dates
            const doesExist = savedDates.find(i => i.day === dateInput)
      
            if (doesExist != undefined){
                continue
            }
            const dailyStepsResult = await Pedometer.getStepCountAsync(start, end);
            let dayObj = {day: dateInput, steps: dailyStepsResult.steps, user_id: user.id}
       
            await fetch(`http://10.129.2.160:5555/dates`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dayObj),
            })
            .then(res => res.json())
            .then(data => {
                setTotalSteps(prev => prev + dailyStepsResult.steps)
                steps += dailyStepsResult.steps
              })

              
            }
            const remainingSteps = (steps) - (totalCats.length * 10000)
            setCatsToBeCollected(Math.floor(remainingSteps / 10000))
          } 
      return (
            
        <pedometerContext.Provider value={{totalSteps, setTotalSteps, catsToBeCollected, setCatsToBeCollected, dailySteps, setDailySteps, currentStepCount, setCurrentStepCount, catUserOwns, setCatUserOwns, openGatcha, setOpenGatcha, gotcha}}>
            {props.children}
        </pedometerContext.Provider>
    );
};

export default PedometerProvider;

