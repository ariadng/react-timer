# Timer
A simple timer component for React applications.

## How to use
Install the library using NPM:

```
npm install --save @ariadng/react-timer
```

Or using Yarn:

```
yarn add @ariadng/react-timer
```

Then, import the library and insert `<Timer />` component to your code:

```jsx
import { useState } from 'react';
import { Timer } from '@ariadng/react-timer';

const App = () => {
  
  const [ timer, setTimer ] = useState(null);
  
  return (
    <div>
      <Timer setRef={ref => { setTimer(ref) }} />
    </div>
  );
  
};

export default App;
```

By using `setRef` prop as written in the code above, now we have `timer` state object to control the component. Below is the list of methods we can use on the timer object.

| Method | Description |
| --- | --- |
| timer.**start()** | Start the timer. |
| timer.**pause()** | Pause the timer. |
| timer.**reset()** | Reset the timer. |

## Styling
Currently, this library doesn't include any styling so you can style the component using CSS however you need.
