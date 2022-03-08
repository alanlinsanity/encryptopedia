import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ( {

  tagline: {
    paddingTop: 15,
    display: "flex",
    height: "40%",
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "gagarin",
    fontSize: "20px",
  },
}));

const Title = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <div className="title">Encryptopedia</div>
        <div className={classes.tagline}>
           The Encyclopedia of Crypto
        </div>
      </Container>
    </div>
  )
}

export default Title