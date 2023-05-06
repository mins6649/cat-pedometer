import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';

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
    const subscription = subscribe();
    return () => subscription && subscription.remove(); //clean up: no memory leaks
  }, []);

  // console.log(currentStepCount);

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