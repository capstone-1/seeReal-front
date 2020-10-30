import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import DeleteIcon from "../../resources/icons/campaign_delete_btn.png";
import InputBase from '@material-ui/core/InputBase';
import * as campaignCostInterface from "../../models/campaignCost";
import InputCampainCost from "./InputCampainCost";
interface Props {
  data : campaignCostInterface.CampaignCost,
  indexOfData : number,
  deleteData(idx : number) : void,
  updateData(idx : number, input : campaignCostInterface.CampaignCost) : void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1300,
      height: 60,
      borderBottom: "2px solid #ededed",
      display : "flex",
      flexDirection : 'row',
      justifyContent : "space-around",
      alignItems : "center",

      fontSize : 22,
      lineHeight : 1.18,
      letterSpacing : -0.55,
      color : "black",
      fontFamily : "NanumSquareR, sans-serif",

      paddingBottom : 20,

        
    },
    dateInput : {
        display:"flex",
        flexDirection : "row",
        justifyContent : "space-between",
        // flex : 5,
    },
    dateBox : {
        width: 150,
        height: 60,
  
        fontSize : 22,
        lineHeight : 1.18,
        letterSpacing : -0.55,
        color : "black",
        fontFamily : "NanumSquareR, sans-serif",

        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",

        flex: 2,
      },
      detailInput : {
          width : 612,
          height : 60,
        //   backgroundColor : "#e8f2ff",

          fontSize : 22,
          lineHeight : 1.18,
          letterSpacing : -0.55,
          color : "black",
          fontFamily : "NanumSquareR, sans-serif",

          paddingLeft : 28,
          

          textAlign: "left",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        //   flex: 6,
      },
      button : {
          width : 110,
          height : 54,
          borderRadius : 5,
          boxSizing : "border-box",
          border : "solid 2px #22479f",
          backgroundColor : "#ffffff",


          fontSize : 24,
          lineHeight : 1.13,
          letterSpacing : -0.6,
          fontFamily : "NanumSquareR, sans-serif",
          color : "#22479f",
        
          textAlign: "center",
        //   flex : 1,
      },
      textCenter : {
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        flex : 1,
      },
      deleteBox : {
          width : 42,
          height : 42,
      },
      numberFormat : {
        width : 220,
        height: 60,
      fontFamily : "NanumSquareR, sans-serif",
      color : "#000000",
      fontSize : 24,
      lineHeight: 2.5,
      letterSpacing : -0.6,
      textAlign: "right",
      justifyContent: "center",
      
    },
    surFix : {
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      fontSize: 24,
      letterSpacing: -0.6,
      color: "black",
      paddingLeft : 10,
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      flex : 1,
      
  },
  moneyFormat : {
      display : "flex",
      flexDirection : "row",
  }
  })
);

const EditCampaignCost: React.FC<Props> = (props) => {
  const [isEdit, setIsEdit] = useState(true);
  const classes = useStyles();
  const changeEditState = () => {
    setIsEdit(false);
  }

  const updateData = (data : campaignCostInterface.CampaignCost) => {
    props.updateData(props.indexOfData, data);
    setIsEdit(true)
  }

  const DataView = () => {
    return (
      <>
        <img className={classes.deleteBox} src={DeleteIcon} onClick={()=> props.deleteData(props.indexOfData)} alt="profile"></img>
      <div className={classes.dateInput}>
          <div className ={classes.dateBox}>{props.data.useDate}</div>
      </div>
      <div className={classes.detailInput}> 
      {props.data.content}
      </div>
      <div className={classes.moneyFormat}>
        <div className={classes.numberFormat}>
            {props.data.cost!.toLocaleString("kr-KR")}
        </div>
        <div className={classes.surFix}>
            원
        </div>
      </div>
      <button className={classes.button} onClick={changeEditState}> 수정</button>
      </>
    )
  }
  const EditView = () => {
    return <InputCampainCost data={props.data} addDataList={updateData}  />
  }
  
  return (
    <div className={classes.root}>
      {
        isEdit ? <DataView/> : <EditView/>
      }
    </div>
  );
};

export default EditCampaignCost;
