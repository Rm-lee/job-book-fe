import React from "react";
import time from "../images/time.png";
import cta from "../images/Group 1.png";
import line from "../images/Line.png";
import icon from "../images/save-this-job-icon.png";
import Styled from "styled-components";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

function Home() {
  // this is where we will display information related to the app
  return (
    <div>
      <div style={{ background: "#F3F8F9" }}>
        <Container
          text
          style={{
            textAlign: "center",
            width: "100vw",
            height: "90vh"
          }}
        >
          <img
            src={cta}
            style={{
              fontSize: "4em",
              marginBottom: 0,
              paddingTop: "3em"
            }}
          />
          <Header
            as="h2"
            content="Keep your job search organized and all in one place"
            inverted
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginTop: "1.5em",
              marginBottom: ".5em",
              color: "black"
            }}
          />
          <img style={{ marginBottom: "4em" }} src={line} />
          <Button style={{ background: "#08A6C9" }} primary size="huge">
            <a style={{ color: "#ffff" }} href="http://localhost:3000/login">
              Get Started
            </a>
          </Button>
        </Container>
      </div>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                {<img style={{ width: "25px", height: "25px" }} src={icon} />}{" "}
                Problem
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Job searchers, already stressed, can't keep track of various
                postings on various sites. Bookmarking is just making the
                situation feel overwhelming.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                {<img style={{ width: "25px", height: "25px" }} src={icon} />}{" "}
                Solution
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                A Chrome extension that lets you grab and save job postings with
                a rating of how interested you are in the job saving you time to
                continue your job search.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                style={{ marginBottom: "1.5em" }}
                src={time}
              />
              <img src={line} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center"></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <img style={{ width: "25px", height: "25px" }} src={icon} />{" "}
                "What is Save This Job?"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Save This Job is a Chrome extension that allows users to save
                and rate job listings with a front-end dashboard to easily
                view/update jobs that you saved!
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <img style={{ width: "25px", height: "25px" }} src={icon} />{" "}
                "How do I get the extension?"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                The extension is available for download in the chrome web store.
                Click <a href="http://localhost:3000/login">here</a> to get
                started.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            <img style={{ width: "25px", height: "25px" }} src={icon} /> Save
            and Rate Job Listings
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Lack of central organization for job postings causes it to be
            overwhelming to keep track of relevant job postings, adds
            unnecessary stress to an already stressful process. Save This Job
            lets you grab and save job postings with a rating of how interested
            you are in the job.
          </p>
          <Button style={{ background: "#08A6C9", color: "#ffff" }} size="huge">
            <a
              style={{ color: "#ffff" }}
              href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl"
            >
              Download Chrome Extension
            </a>
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <img style={{ width: "25px", height: "25px" }} src={icon} />
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            <img style={{ width: "25px", height: "25px" }} src={icon} /> Kanban
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Visualize the state of your job search in a kanban board. See how
            many applications, interviews and offers you’ve received in one
            view.
          </p>
          <Button style={{ background: "#08A6C9" }} size="huge">
            <a style={{ color: "#ffff" }} href="http://localhost:3000/login">
              Get Started
            </a>
          </Button>
        </Container>
      </Segment>

      <Segment
        inverted
        vertical
        style={{ padding: "5em 0em", background: "#08A6C9" }}
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Home;
