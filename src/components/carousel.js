import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

const imgUrl = [
  "https://i.ibb.co/gVpcW78/pv-featured-images.jpg",
  "https://i.ibb.co/MGZhP6j/piano-music-hdmi-sound-recording-and-reproduction-piano.jpg",
  "https://i.ibb.co/0qXLK9v/transparent-piano.jpg",
  "https://i.ibb.co/KDkDJyk/piano-icon-30.jpg"
];

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const { currentImageIndex } = this.state;
    const lastIndex = imgUrl.length - 1;
    const index = currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const { currentImageIndex } = this.state;
    const lastIndex = imgUrl.length - 1;
    const index = currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  }

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  };

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  render() {
    return (
      <Grid container direction="row" alignItems="center">
        <div className={styles.arrow_left}>
          <Button style={{ color: "white" }}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="5x"
              onClick={this.previousSlide}
            />
          </Button>
        </div>
        <Grid item xs={12}>
          <img src={imgUrl[this.state.currentImageIndex]} alt="" className={styles.img_style} />
        </Grid>
        <div className={styles.info}>
          Welcome to our website! Take a look around and feel free to contact us
          for more information.
        </div>
        <div className={styles.arrow_right}>
          <Button style={{ color: "white" }}>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="5x"
              onClick={this.nextSlide}
            />
          </Button>
        </div>
      </Grid>
    );
  }
}
