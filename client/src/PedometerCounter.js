import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

const BACKFILL_DAYS = 7
function PedometerCounter({user}) {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [dailySteps, setDailySteps] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

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
      // console.log("TESTING", dailyStepsResult);
      if (dailyStepsResult) {
        setDailySteps(dailyStepsResult.steps);
      }
  
      // SHOWS CURRENT STEPS!!! when app is open
      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };
  //WHAT IS SUBSCRIPTioN???
  useEffect(() => {
    Last7Days();
    const subscription = subscribe();
    return () => subscription && subscription.remove(); //clean up: no memory leaks
  }, []);

  useEffect

  // console.log(currentStepCount);
  async function Last7Days () {
    const result = [];
    for (let i=1; i<=BACKFILL_DAYS; i++) {
        const start = new Date();
        const end = new Date();
        end.setDate(end.getDate() - i); 
        end.setHours(23,59,59,99)
        start.setDate(start.getDate() - i); 
        start.setHours(0,0,0,0)

        let dateInput = [start.getFullYear(), start.getMonth()+1, start.getDate()].join('-')
     
      const dailyStepsResult = await Pedometer.getStepCountAsync(start, end);
      let dayObj = {day: dateInput, steps: dailyStepsResult.steps, user_id: user.id}
      // console.log(user.dates)
      const savedDates = user.dates
      const doesExist = savedDates.find(i => i.day === dateInput)
      console.log('day obj',dayObj)
      console.log('here', doesExist)
      if (doesExist === undefined){
        fetch(`http://192.168.1.186:5555/dates`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dayObj),
        })
        .then(res => res.json())
        .then(data => console.log('data', data))
      }
      result.push(dayObj)
      // console.log('result', result)
    }
    return(result);
  } 
  
  return (
    <View>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Today's Current Steps: {dailySteps} steps</Text>
      {/* do not need to use but pretty cool! */}
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
    </View>
  );
}
export default PedometerCounter;