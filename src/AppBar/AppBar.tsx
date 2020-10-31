import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, useHistory} from "react-router-dom"
interface Props {
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position : "static",
      flexGrow: 1,
      backgroundColor : "#ededed",
    },
    toolBar : {
        display : "flex",
      justifyContent : "space-between",
    },
    statusInfo : {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize : 28,
      lineHeight : 1.14,
      letterSpacing : -0.7,
      border: "none",
    }
  })
);

const MainBar: React.FC<Props> = (props) => {
    const history = useHistory();
    const classes = useStyles();
    useEffect(()=>{
    }, [localStorage.getItem("jwtToken")]);

    const logOut = () => {
        localStorage.removeItem("jwtToken");
        history.push("/");
        window.location.reload(false);

    }
   
    return <AppBar className={classes.root}>
        <Toolbar className={classes.toolBar}>
        <div>로고 </div>
        {
            localStorage.getItem("jwtToken") ?
            <Button className={classes.statusInfo} onClick={logOut}>{`로그아웃`}</Button>  :
            <Button className={classes.statusInfo} href="signin">로그인</Button>
        } 
        {/* <Button><Link to="/signin"> <div className={classes.statusInfo}></div>로그인</Link></Button> */}
        </Toolbar> 
    
    </AppBar>

}

export default MainBar;
