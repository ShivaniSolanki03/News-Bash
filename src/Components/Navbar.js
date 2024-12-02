import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
      message: '',
      showAlert: false, // To control alert visibility
    };
  }

  toggleDarkMode = () => {
    this.setState(
      (prevState) => ({
        isDarkMode: !prevState.isDarkMode,
        message: !prevState.isDarkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled',
        showAlert: true, // Show the alert
      }),
      () => {
        // Hide the alert after 3 seconds
        setTimeout(() => {
          this.setState({ showAlert: false });
        }, 3000);
      }
    );
  };

  render() {
    const { isDarkMode, message, showAlert } = this.state;

    // Apply dark mode class globally to the body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    return (
      <div>
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">News-Bash</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li> */}
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <button
                className={`btn ms-3 ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
                onClick={this.toggleDarkMode}
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </nav>

        {/* Alert for Dark Mode Message */}
        {showAlert && (
          <div className={`alert ${isDarkMode ? 'alert-dark' : 'alert-success'} alert-dismissible fade show`} role="alert">
            <strong>{message}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;

