import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

const BACKFILL_DAYS = 7
function PedometerCounter() {
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
      // make post for 31 days
      const dailyStepsResult = await Pedometer.getStepCountAsync(start, end);
      console.log("TESTING", dailyStepsResult);
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
     
      const dailyStepsResult = await Pedometer.getStepCountAsync(start, end);

        console.log(start)
        console.log(end)
        console.log(dailyStepsResult)
        console.log("CEES STINKY")
    }
    console.log('--------------')
    return(result.join(','));
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