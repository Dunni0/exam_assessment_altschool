import SharedComp from "./SharedComp";
import CounterCustomHook from "./CounterCustomHook";
import CounterReducer from "./CounterReducer";
import Error from "./Error";
import ErrorComp from "./ErrorComp";
import {Routes, Route} from "react-router-dom"


function Router(){
    return (
      <>
        <Routes>
          <Route path="/" element={<SharedComp />}>
              <Route index element={<CounterCustomHook />} />
              <Route path="usereducer/counter" element={<CounterReducer />} />
              <Route path="/errorboundary" element={<ErrorComp />} />
              <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </>
    );
}

export default Router

