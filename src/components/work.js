import React, { Component, useState } from "react";
import Chatty from "../images/chatty.png";
import pearup from "../images/pearup.png";
import jungle from "../images/jungle.png";
import tweeter from "../images/tweeter.png";
import { Container, Row, Col } from "reactstrap";
import { PropTypes } from "prop-types";
import {
  Paper,
  Grid,
  withStyles,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Modal
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const useStyles = makeStyles({
  media: {
    height: 220
  }
});

function MediaCard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="portfolio" href="#portfolio">
      <div className="bgimg-2 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
        </div>
      </div>
      <div id="portfolio-box">
        <h3 className="work">MY WORKS</h3>
        <p className="work">
          <em>Here are some of my latest works I did.</em>
        </p>
        <br />

        <div className="grid-container">
          <div className="box">
            <Card className={classes.card} href="#open-modal">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pearup}
                  title="Social Media for introverts"
                />
                <div id="open-modal" class="modal-window">
                  <div>
                    <a href="#" title="Close" class="modal-close">
                      Close
                    </a>
                    <h1>Voilà!</h1>
                    <div>
                      A CSS-only modal based on the :target pseudo-class. Hope
                      you find it helpful.
                    </div>
                  </div>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pear-UP!
                  </Typography>
                  <Typography>
                    Matching users base on common interests and for scheduling a
                    meetup with someone to do an activity within a coworker
                    space on the fly type of app
                  </Typography>
                  <Typography
                    variant="body3"
                    color="textSecondary"
                    component="p"
                  >
                    Made using React on Rails, with Postgres DB, Bootstrap and
                    SASS for styling
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/tnathalang/Pear-Up-"
                  target="_blank"
                >
                  Github Link
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="box">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={jungle}
                  title="eCommerce Plateform"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jungle
                  </Typography>
                  <Typography>
                    An e-commerce Ruby on Rails app, offers a review system and
                    purchase options with Stripes. Required Users to have an
                    account
                  </Typography>
                  <Typography
                    variant="body3"
                    color="textSecondary"
                    component="p"
                  >
                    Made using React on Rails, with Postgres DB, Bootstrap and
                    SASS for styling
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/tnathalang/jungle-rails"
                  target="_blank"
                >
                  Github Link
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="box">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Chatty}
                  title="Chatting app"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chatty
                  </Typography>
                  <Typography>
                    A minimal chatting app built with React, support multiple
                    users. You can also change colors of your name! no log ins
                    needed
                  </Typography>
                  <Typography
                    variant="body3"
                    color="textSecondary"
                    component="p"
                  >
                    Made using React and SASS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/tnathalang/chatty"
                  target="_blank"
                >
                  Github Link
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="box">
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={tweeter}
                  title="A Twitter clone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tweeter
                  </Typography>
                  <Typography>
                    A twitter clone project to help learn front-end without
                    frameworks and css practice. You can send tweets and they
                    are stored.
                  </Typography>
                  <Typography
                    variant="body3"
                    color="textSecondary"
                    component="p"
                  >
                    Made with Ruby on Rails, with Postgres DB, Bootstrap and CSS
                    3 for styling
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/tnathalang/tweeter"
                  target="_blank"
                >
                  Github Link
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;

// class Work extends Component {
//   render() {
//     return (

//         <Container>
//           <Row>
//             <Col xs="6">
//               <div class="container">
//                 <img src={pearup} className="hover" alt="Pear-UP!" />
//                 <a
//                   className="tech-stack"
//                   href="https://github.com/tnathalang/Pear-Up-"
//                 >
//                   Made using React, Bootstrap, Rails and Postgres
//                 </a>
//                 <p className="text-work">
//                   Matching base on common interest and asking someone to do an
//                   activity within a coworker space on the fly type of app
//                 </p>
//               </div>
//               <div>
//                 <img src={jungle} className="hover" alt="Jungle" />
//                 <a
//                   className="tech-stack"
//                   href="https://github.com/tnathalang/jungle-rails"
//                 >
//                   Made using Ruby on Rails, Bootstrap
//                 </a>
//                 <p className="text-work">
//                   An e-commerce Rails app, have review system and purchase
//                   system with Stripes
//                 </p>
//               </div>
//             </Col>
//             <Col xs="6">
//               <div>
//                 <img src={Chatty} className="hover" alt="Chatty" />
//                 <a
//                   className="tech-stack"
//                   href="https://github.com/tnathalang/chatty"
//                 >
//                   Made using React, CSS 3
//                 </a>
//                 <p className="text-work">
//                   A minimal chatting app built with React, support multiple
//                   users
//                 </p>
//               </div>
//               <div>
//                 <img src={tweeter} className="hover" alt="Tweeter" />
//                 <a
//                   className="tech-stack"
//                   href="https://github.com/tnathalang/tweeter"
//                 >
//                   Made using JQuery, AJAX, Express, Node.js and CSS
//                 </a>
//                 <p className="text-work">
//                   A twitter clone project to help learn front-end and css
//                   practice
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//     );
//   }
// }

// export default Work;
