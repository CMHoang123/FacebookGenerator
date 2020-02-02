import React from "react";
import {
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  Container,
  InputLabel,
  Typography,
  Grid,
  withStyles,
  styled,
  Fab,
  Button,
  IconButton
} from "@material-ui/core";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import "typeface-roboto";
import ImageIcon from "@material-ui/icons/Image";
import { compose, spacing, palette } from "@material-ui/system";
import logo192 from "../asset/logo192.png";
import hoangCaoImg from "../asset/HoangCao.jpg";
import pageVamp from "../asset/Pagevamp.png";
import reactSymbol from "../asset/ReactSymbol.png";
import FBWG from "../asset/FBWG.png";
import SymbolicIcon from "../asset/SymbolicIcon.png";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import CssColorPickerButton from "./CssColorPickerButton";
import { connect } from "react-redux";
import { changeColor, changeFont } from "../actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: "#ffffff"
    }
  },
  input: {
    display: "none"
  },
  iconButtonColor: {
    backgroundColor: "#38ba6c",
    color: "#ffffff",
    width: "35px",
    height: "35px"
  },
  fabBlueColor: {
    "& > *": {
      backgroundColor: "#5558ad"
    }
  },
  fabPinkColor: {
    "& > *": {
      backgroundColor: "#d43f82"
    }
  },
  fabOrangeColor: {
    "& > *": {
      backgroundColor: "#eb8934"
    }
  },
  fabGreenColor: {
    "& > *": {
      backgroundColor: "#38ba6c"
    }
  },
  fabCyanColor: {
    "& > *": {
      backgroundColor: "#17ebd9"
    }
  },
  fabPurpleColor: {
    "& > *": {
      backgroundColor: "#8517eb"
    }
  },
  fabWhiteColor: {
    "& > *": {
      backgroundColor: "#ffffff"
    }
  },
  fabBlackColor: {
    "& > *": {
      backgroundColor: "#030303"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  textFont: {
    color: "white"
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  },
  arialFontType: {
    fontFamily: "Arial"
  },
  timeNewRomanFontType: {
    fontFamily: "Times New Roman"
  },
  verdanaFontType: {
    fontFamily: "verdana"
  },
  courierNewFontType: {
    fontFamily: "Courier New"
  }
}));

const StyledGrid = withStyles({
  root: {
    paddingLeft: "5%"
  }
})(Grid);

const Box = styled("div")(compose(spacing, palette));

function SideEdit(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    theme: "",
    fontName: "",
    fileInputLink: "",
    logoInputLink: ""
  });

  let font = "Arial";
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
    props.changeFont(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "#8a8a8a",
        marginTop: "0px",
        paddingBottom: "903%"
      }}
    >
      <div>
        <h4>Theme</h4>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-theme-native-simple" color="primary">
            Theme
          </InputLabel>
          <Select
            value={state.theme}
            onChange={handleChange("theme")}
            inputProps={{
              name: "theme",
              id: "outlined-theme-native-simple"
            }}
            color="primary"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            className={classes.selectEmpty}
          >
            <MenuItem value="Spruce">Spruce</MenuItem>
            <MenuItem value="Shutter">Shutter</MenuItem>
            <MenuItem value="Sublime">Sublime</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <h4>Font</h4>
        <ThemeProvider theme={theme}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              htmlFor="outlined-fontName-native-simple"
              color="primary"
            >
              Font Family
            </InputLabel>
            <Select
              value={state.fontName}
              onChange={handleChange("fontName")}
              inputProps={{
                name: "fontName",
                id: "outlined"
              }}
              color="primary"
              labelId="outlined-label"
              id="outlined"
              className={classes.selectEmpty}
            >
              <MenuItem value="Arial">
                <Typography className={classes.arialFontType}>Arial</Typography>
              </MenuItem>
              <MenuItem value="Times New Roman">
                <Typography className={classes.timeNewRomanFontType}>
                  Times New Roman
                </Typography>
              </MenuItem>
              <MenuItem value="verdana">
                <Typography className={classes.verdanaFontType}>
                  verdana
                </Typography>
              </MenuItem>
              <MenuItem value="Courier New">
                <Typography className={classes.courierNewFontType}>
                  Courier New
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
      <div>
        <h4>Suggested Color</h4>
        <div className={classes.root}>
          <Fab
            className={classes.fabBlueColor}
            onClick={() => {
              props.changeColor("#5558ad");
            }}
          ></Fab>
          <Fab
            className={classes.fabPinkColor}
            onClick={() => {
              props.changeColor("#d43f82");
            }}
          ></Fab>
          <Fab
            className={classes.fabOrangeColor}
            onClick={() => {
              props.changeColor("#eb8934");
            }}
          ></Fab>
          <Fab
            className={classes.fabGreenColor}
            onClick={() => {
              props.changeColor("#38ba6c");
            }}
          >
          </Fab>
          <Fab
            className={classes.fabCyanColor}
            onClick={() => {
              props.changeColor("#17ebd9");
            }}
          >
          </Fab>
          <Fab
            className={classes.fabPurpleColor}
            onClick={() => {
              props.changeColor("#8517eb");
            }}
          >
          </Fab>
        </div>
      </div>
      <div>
        <CssColorPickerButton />
      </div>
      <div>
        <h4>Skin</h4>
        <div className={classes.root}>
          <Fab className={classes.fabWhiteColor}> </Fab>
          <Fab className={classes.fabBlackColor}> </Fab>
        </div>
      </div>
      <div>
        <h4>Upload Logo</h4>
        <div className={classes.root}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            onChange={handleChange("logoInputLink")}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              aria-label="upload picture"
              component="span"
              className={classes.iconButtonColor}
            >
              <ImageIcon className={classes.color} />
            </IconButton>
          </label>
        </div>
        <h5>Logo path: {state.logoInputLink.split("\\")[2]}</h5>
      </div>
      <div>
        <h4>Homepage Image</h4>
        <Box p={3}>
          <StyledGrid container spacing={0}>
            <StyledGrid item xs={4}>
              <div>
                <img src={logo192} width="60px" height="60px" />
              </div>
            </StyledGrid>
            <StyledGrid item xs={4}>
              <div>
                <img src={hoangCaoImg} width="60px" height="60px" />
              </div>
            </StyledGrid>
            <StyledGrid item xs={4}>
              <div>
                <img src={pageVamp} width="60px" height="60px" />
              </div>
            </StyledGrid>
          </StyledGrid>
          <StyledGrid container spacing={0}>
            <StyledGrid item xs={4}>
              <div>
                <img src={FBWG} width="60px" height="60px" />
              </div>
            </StyledGrid>
            <StyledGrid item xs={4}>
              <div>
                <img src={reactSymbol} width="60px" height="60px" />
              </div>
            </StyledGrid>
            <StyledGrid item xs={4}>
              <div>
                <img src={SymbolicIcon} width="60px" height="60px" />
              </div>
            </StyledGrid>
          </StyledGrid>
        </Box>
        <Box p={0}>
          <StyledGrid container spacing={5}>
            <StyledGrid item xs={5}>
              <Button
                variant="contained"
                component="label"
                color="primary"
                onChange={handleChange("fileInputLink")}
              >
                <ImageIcon />
                Upload
                <input type="file" style={{ display: "none" }} />
              </Button>
            </StyledGrid>
            <StyledGrid item xs={5}>
              <Button variant="contained" component="label">
                <AspectRatioIcon />
                Reposition
              </Button>
            </StyledGrid>
          </StyledGrid>
          <h5>File path: {state.fileInputLink.split("\\")[2]}</h5>
        </Box>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  navigationChange: state.navigationChange
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
  changeFont: font => dispatch(changeFont(font))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideEdit);
