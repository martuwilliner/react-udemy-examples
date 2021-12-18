import React from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
import { FormCustomHook } from './components/useEffect/FormCustomHook';
import { SimpleForm } from './components/useEffect/SimpleForm';
import { FocusScreen } from './components/useRef/FocusScreen';
import { UseRefCasoReal } from './components/useRef/UseRefCasoReal';
// import { CounterApp } from './components/useState/CounterApp';
//import { CounterWithCounterHook } from './components/useState/CounterWithCounterHook';
import './index.css';
//import {HooksApp} from './HooksApp';

ReactDOM.render(
  <>
  {/* <CounterApp/>
  <hr/> */}
  {/* <CounterWithCounterHook/> */}
  {/* <SimpleForm/> */}
  {/* <FormCustomHook/> */}
  {/* <MultipleCustomHooks/> */}
  {/* <FocusScreen/> */}
  <UseRefCasoReal/>
  </>
  ,
  document.getElementById('root')
);

