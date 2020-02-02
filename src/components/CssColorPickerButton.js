import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { changeColor, changeFont } from "../actions";

class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "52",
      g: "235",
      b: "186",
      a: "1"
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ color: color.rgb });
    const red = this.rgbToHex(color.rgb.r);
    const green = this.rgbToHex(color.rgb.g);
    const blue = this.rgbToHex(color.rgb.b);
    this.props.changeColor("#" + red + green + blue);
  };

  rgbToHex = rgb => { 
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  componentDidMount() {}

  render() {
    const styles = reactCSS({
      default: {
        color: {
          color: 'white',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
        },
        swatch: {
          margin: '8px',
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div>
        <h4>Customize color</h4>
        <div style={styles.swatch} onClick={this.handleClick}>
          <Fab style={styles.color}>
            <AddIcon />
          </Fab>
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navigationChange: state.navigationChange
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
  changeFont: font => dispatch(changeFont(font))
});

export default connect(mapStateToProps, mapDispatchToProps)(SketchExample);
