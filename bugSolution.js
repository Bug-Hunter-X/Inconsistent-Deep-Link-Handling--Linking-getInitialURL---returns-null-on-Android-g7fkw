// bugSolution.js
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const checkInitialURL = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
      } else {
        // Retry after a short delay to account for potential race conditions
        setTimeout(checkInitialURL, 200); 
      }
    };

    checkInitialURL();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Handle the deep link here
      console.log('Deep link received:', initialUrl);
    }
  }, [initialUrl]);

  return (
    <View>
      {/* ... your app content ... */}
    </View>
  );
}

export default App;