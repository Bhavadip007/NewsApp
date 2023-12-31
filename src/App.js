import './App.css';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import News from './components/News';
import {Routes,Route} from "react-router-dom";

const App = () => {
  const pageSize = 5;

  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Navbar/>
        <LoadingBar
        height={5}
        color='#f11946'
        progress={progress}
        />
        <Routes>
        <Route exact path="/"element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/>}/>    
        <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
        <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>}/>
        <Route exact path="/sport" element={<News setProgress={setProgress}  key="sport" pageSize={pageSize} country="in" category="sport"/>}/>
        <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
      </div>
    )
}

export default App;
