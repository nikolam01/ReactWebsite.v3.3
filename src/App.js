import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Sections
import PageWrapper from "./components/PageWrapper";
import AdminWrapper from "./components/AdminWrapper";
import Portfolio from "./components/Common/Portfolio";
import Services from "./components/Common/Services";
import Footer from "./components/Common/Footer";
import Projects from "./components/Common/Projects";
import CV from "./components/Common/CV";
import Form from "./components/Common/Form";
import CVPrototype from "./CVPrototype";

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Me from "./components/Pages/Me";
import Swipe from "./components/Common/Swipe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:3000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 1200)); // 1500 ms
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }
    });
  }
  render() {
    return (
      <Router>
        <Route
          path="/admin"
          render={(props) => (
            <AdminWrapper>
              <Login {...props} />
            </AdminWrapper>
          )}
        />
        <Route
          exact={true}
          path="/"
          render={(props) => (
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>
          )}
        />
        <Route
          exact={true}
          path="/experiment"
          render={(props) => (
            <PageWrapper>
              <CVPrototype {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path="/about"
          render={(props) => (
            <PageWrapper>
              <About {...props} />
              <Footer {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <PageWrapper>
              <Form />
            </PageWrapper>
          )}
        />
        <Route
          path="/form"
          render={(props) => (
            <PageWrapper>
              <Contact {...props} />
              <Footer {...props} />
            </PageWrapper>
          )}
        />
        <Route
          exact={true}
          path="/cv"
          render={(props) => (
            <PageWrapper>
              <CV {...props} />
              <Footer {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path="/projects"
          render={(props) => (
            <PageWrapper>
              <Projects {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/services"
          render={(props) => (
            <PageWrapper>
              <Services {...props} />
              <Footer {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path="/portfolio"
          render={(props) => (
            <PageWrapper>
              <Portfolio {...props} />
              <Footer {...props} />
            </PageWrapper>
          )}
        />

        <Route
          exact={true}
          path="/me"
          render={(props) => (
            <PageWrapper>
              <Me {...props} />
              <br></br>
              <br></br>
              <br></br>
              <Footer {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path="/swipe"
          render={(props) => (
            <PageWrapper>
              <Swipe {...props} />
              <Footer {...props} />
            </PageWrapper>
          )}
        />
      </Router>
    );
  }
}
export default App;
