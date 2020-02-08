import React from "react";
import styles from "./home.module.css";
import { Container } from "@material-ui/core";
import Carousel from "../../components/carousel";
import BottomBar from "../../components/bottom_bar";
import About from "../../page/about";
import News from "../../page/news";
import Gallery from "../../page/gallery";
import Contact from "../../page/contact";
import Event from "../../page/event";

export default class HomePage extends React.Component {
  render() {
    return (
      <Container className={styles.home_page}>
        <Carousel />
        <BottomBar />
        <About />
        <News />
        <Gallery />
        <Event/>
        <Contact />
      </Container>
    );
  }
}
