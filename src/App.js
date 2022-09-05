import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


// be7d363204974eaa810e3a442c6cc8c4

export class App extends Component {
 pageSize=5;
//  apikey= process.env.REACT_APP_NEWS_API

 state = {
  progress: 0
 }

 setProgress = (progress) => {
  this.setState({progress: progress})
 }
  render() {
    return (
     
      <div>
       <Router>
        <Navbar />
         <LoadingBar
         height={3}
        color='#f11946'
        progress={this.state.progress}
       />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key='general' pageSize={this.pageSize} country="in" category='General'/>} />
          <Route exact path="/Business" element={<News setProgress={this.setProgress}  key='business' pageSize={this.pageSize} country="in" category='Business'/>} />
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress}  key='entertainment' pageSize={this.pageSize} country="in" category='Entertainment'/>} />
          <Route exact path="/General" element={<News setProgress={this.setProgress}  key='general' pageSize={this.pageSize} country="in" category='General'/>} />
          <Route exact path="/Health" element={<News setProgress={this.setProgress}  key='health' pageSize={this.pageSize} country="in" category='Health'/>} />
          <Route exact path="/Science" element={<News setProgress={this.setProgress}  key='science' pageSize={this.pageSize} country="in" category='Science'/>} />
          <Route exact path="/Sports" element={<News setProgress={this.setProgress}  key='sports' pageSize={this.pageSize} country="in" category='Sports'/>} />
          <Route exact path="/Technology" element={<News setProgress={this.setProgress}  key='technology' pageSize={this.pageSize} country="in" category='Technology'/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App

