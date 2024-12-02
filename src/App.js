// import './App.css';
// import React, { Component } from 'react';
// import Navbar from './Components/Navbar'; // Assuming you have this Navbar component
// import News from './Components/News';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes  // Use Routes instead of Switch
// } from "react-router-dom";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general" />} />
//             <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" category="business" />} />
//             <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />
//             <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" category="general" />} />
//             <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="health" />} />
//             <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="science" />} />
//             <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="sports" />} />
//             <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="technology" />} />
//             <Route exact path="/about" element={<About />} /> {/* About Route */}
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
// import './App.css';
// import React, { Component } from 'react';
// import Navbar from './Components/Navbar';
// import News from './Components/News';
// import About from './Components/About'; // Import the About component
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

// export default class App extends Component {
//   pageSize = 28;
//   render() {
//     return (
      
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general" />} />
//             <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" category="business" />} />
//             <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />
//             <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" category="general" />} />
//             <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="health" />} />
//             <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="science" />} />
//             <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="sports" />} />
//             <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="technology" />} />
//             <Route exact path="/about" element={<About />} /> {/* About Route */}
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About'; // Import the About component
import Chatbot from './Components/Chatbot'; // Import the Chatbot component
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 28;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* News Routes */}
            <Route exact path="/" element={<News pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" category="technology" />} />

            {/* About Route */}
            <Route exact path="/about" element={<About />} />
          </Routes>

          {/* Chatbot is always displayed on the right side of the screen */}
          <Chatbot />
        </Router>
      </div>
    );
  }
}
