import React, {useState, useEffect} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props{}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: 600,
        height: 621,
        objectFit: "contain",
        borderRadius: 20,
        border : "2px solid #73a8ed",
        //borderTopStyle : "hidden",
    },
    titlebox : {
        width: "100%",
        height: 73,
        backgroundColor : "#22479f",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        display: "flex",
        alignItems : "center",
        justifyContent : "center",
    },
    titleName : {
        fontSize: 28,
        color: "#ffffff",
        fontFamily: "NanumSqaureB"
    },
    contextBox: {
        display: "flex",
        marginTop : 37,
        marginLeft: 48,
        marginRight : 20,
        flexDirection : "column",
        justifyContent : "flex-start",
        height : 450,
    },
    contextContents: {
        display : "flex",
        width: "100%",
        flexDirection : "row",
        alignItems : "center",
        marginBottom : 30,
        height: 35,
        fontSize : 24
    },
    contentsTitle: {
        flex: "1 1 0",
        textAlign: "left",
    },
    contentsMoney: {
        flex: "2 1 0",
        textAlign: "center",
    }
  })
);




const AssetStatus : React.FC<Props> = (props) => {
    const classes = useStyles();
    const assetList = ["총자산가액", "유동자산", "주식 및 출자지분", "금융", "비유동자산", "토지", "건물", "기타"]
    return <div className = {classes.root} >
        <div className = {classes.titlebox}>
           <div className={classes.titleName}> 자산현황 </div>
        </div>
        <div className = {classes.contextBox}>
            {
                assetList.map((asset, idx) => {
                    return(
                    <div className = {classes.contextContents} key={idx}>
                        <div className = {classes.contentsTitle}>{asset}</div>
                        <div className = {classes.contentsMoney}>10000000000000 원</div>
                    </div>
                    )
                })
            }
        </div>
    </div>;
}

export default AssetStatus;

