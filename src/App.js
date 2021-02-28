import { useState } from 'react';
import ReactSlider from 'react-slider';
import './App.css';

function App() {
  const [km,setKm] = useState(50)
  return (
    <div className="App">
          <div className="label">
          Looking for: {km}
          </div>
        <div className="slider">
          <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              defaultValue={km}
              onBeforeChange={val => console.log('onBeforeChange value:', val)}
              onChange={val => {
                console.log('onChange value:', val)
                setKm(val)
              }}
              onAfterChange={val => console.log('onAfterChange value:', val)}
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
        </div>
    </div>
  );
}

export default App;
