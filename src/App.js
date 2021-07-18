import './App.scss';
import { Icons } from './REACT-ICONS/Icons';
import {Toastify} from './REACT-TOASTIFY/Toastify';
import {ReactModal} from './REACT-MODAL/ReactModal';
import {ReactTooltip} from './REACT-TOOLTIP/ReactTooltip';
import {ReactCountup} from './REACT-COUNTUP/Countup';
import { IdleTimerContainer } from './IDLE-TIMER/IdleTimerContainer';
import { ColorPicker } from './REACT-COLOR/ColorPicker';
import { CreditCard } from './CREDIT-CARDS/CreditCard';


function App() {
  return (
    <div className="App">
      <CreditCard/>
    </div>
  );
}

export default App;

// Every component contains different package.



