import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import Button from '@material-ui/core/Button';
import { Link} from "react-router-dom";
import Campaign from "../company/input/Campaign";
import CampaignCost from "../company/input/CampaignCost";
import LastYearMainActivity from "../company/input/LastYearMainActivity";
import TaxIncome from "../company/input/TaxIncome";
import TaxOutcome from "../company/input/TaxOutcome";
import * as CampaignInterface from "../models/campaign";
import * as CampaignCostInterface from "../models/campaignCost";
import * as ActivityInterface from "../models/activity";
import * as TaxIncomInterface from "../models/taxIncome";
import * as TaxOutcomInterface from "../models/taxOutcome";
import Combination from "../company/input/Combination";
import axios from "axios";
import apiPath from "../apiPath";
interface Props {
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width : 1320,
    },
    Toptitle : {
        display:"flex",
        flexDirection : "row",
        width : "100%",
        textAlign : "left",
        alignItems : "flex-end",
        marginBottom : 27,
    },
    TopMainTitle : {
        width : 381,
        fontFamily: "NanumSquareB, sans-serif",
      fontSize : 52,
      lineHeight : 1.13,
      letterSpacing : -1.7,
      marginRight : 26,
    },
    TopSubTitle : {
        width : 242,
        fontFamily: "NanumSquareR, sans-serif",
      fontSize : 32,
      lineHeight : 1.13,
      letterSpacing : -0.8,
    },
    belowBar : {
        width : 1320,
        height : 8,
        display:"flex",
        flexDirection : "row",
    },
    belowBarLeft : {
        width : "50%",
        height: "100%",
        border: "none",
        backgroundColor : "#e8f2ff",
    },
    belowBarRight: {
        width : "50%",
        height: "100%",
        border: "none",
        backgroundColor : "#22479f",
    },
    subTitleBox : {
        width : "100%",
        height : 40,
        display: "flex",
        marginTop : 138,
        marginBottom : 80,
    },
    subFrontSquare : {
        height : "100%",
        width : 12,
        backgroundColor : "#22479f",
    },
    subTitleContents : {
        fontFamily: "NanumSquareB, sans-serif",
        fontSize : 32,
        lineHeight : 1.13,
        letterSpacing : -0.8,
    },
    nextButtonBox : {
        display : "flex",
        justifyContent : "flex-end",
        paddingRight : 40,
        marginBottom : 50,
    },
    nextButton : {
        width : 190,
        height : 68,
        backgroundColor : "#ededed",
        fontFamily: "NanumSquareB, sans-serif",
        fontSize : 26,
        lineHeight : 1.15,
        letterSpacing : -0.65,
        display : "flex",
        justifyContent : "center",
        textAlign : "center",
        alignItems : "center",
        color: "black",
        border : "none",
        borderRadius : 5,
    },
    sendButtonBox : {
        display : "flex",
        justifyContent : "center",
    },
    sendButton : {
        width: 700,
        height : 92,
        borderRadius : 10,
        backgroundColor : "#ededed",
        display : "flex",
        justifyContent : "center",
        textAlign : "center",
        alignItems : "center",
        border : "none",
        fontFamily: "NanumSquareB, sans-serif",
        fontSize : 36,
        lineHeight : 1.14,
        letterSpacing : -0.9,
    },
    contentsBox : {
        display: "flex",
        flexDirection : "column",
        justifyContent : "space-between",
    },
    contentSpace : {
        position: "relative",
        marginBottom : 120,
    },
    contents : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
    },
    space : {
        display : "flex",
        justifyContent : "center",
    }
  })
);

const CompanyInput: React.FC<Props> = (props) => {
    const classes = useStyles();
    const SubTitleContents = [" 회계 정보 입력", "세입 세출 보고서 입력", "사업 보고서 입력"]
    const [currentState, setCurrentState] = useState(1);
    const [taxIncome, setTaxIncome] = useState<TaxIncomInterface.TaxIncome>(TaxIncomInterface.defaultData);
    const [taxOutcome, setTaxOutcome] = useState<TaxOutcomInterface.TaxOutcome>(TaxOutcomInterface.defaultData);
    const [mainActivity, setMainActivity] = useState<Array<ActivityInterface.Activity>>([ActivityInterface.defaultData,ActivityInterface.defaultData,ActivityInterface.defaultData]);
    const [campaign, setCamapign] = useState<Array<CampaignInterface.Campaign>>([]);
    const [campaignCost, setCampaignCost] = useState<Array<CampaignCostInterface.CampaignCost>>([]);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [currentState])
    const moveNextStep = () => {
        setCurrentState(currentState+1);
    }

    const uploadData = async() => {
        try {
            const header = {
                headers: {Authorization : localStorage.getItem("jwtToken")}
            };
            await axios.post(apiPath.addCompanyTaxIncome() , taxIncome, header);
            console.log(taxIncome);
            await axios.post(apiPath.addCompanyTaxOutcome() ,taxOutcome, header );
            console.log(taxOutcome);
            await axios.post(apiPath.addCompanyActivity() , {activity : mainActivity }, header );
            await axios.post(apiPath.addCompanyCampaign() , {campaign :campaign }, header );
            await axios.post(apiPath.addCompanyCampaignCost() , {campaignCost : campaignCost}, header );
        } catch (error) {
            console.log(error);
        }

    }

    const updateCombinationData = (activityData : Array<ActivityInterface.Activity>,
        campaignData : Array<CampaignInterface.Campaign>,
        campaignCostData : Array<CampaignCostInterface.CampaignCost> ) => {
            setMainActivity(activityData);
            setCamapign(campaignData);
            setCampaignCost(campaignCostData);
        }

    const TopTitle = () => {
        return  <div>
            <div className={classes.Toptitle}>
                <div className={classes.TopMainTitle}> 기부단체 회원가입</div>
                <div className={classes.TopSubTitle}> 상세 정보 작성하기</div>
            </div>
            <div className={classes.belowBar}>
                <div className={classes.belowBarLeft}></div>
                <div className={classes.belowBarRight}></div>
            </div>
                </div>
    }

    const SubTitle =() => {
        return <div className={classes.subTitleBox}>
            <div className={classes.subFrontSquare}></div>
            <div className={classes.subTitleContents}>&nbsp;{`${SubTitleContents[currentState]}`}</div>
        </div>
    }

    const MoveButton = () => {
        return <div className= {classes.contentsBox}>
            { SubTitleContents.length-1 === currentState ? 
                <div className={classes.sendButtonBox}>
                    <button className={classes.sendButton} onClick={uploadData}> 제출하기</button>
                </div> :
                <div className={classes.nextButtonBox}>
                    <button className={classes.nextButton} onClick={moveNextStep}> 다음</button>
                </div>
            }
        </div>
    }

    const Contents = () => {
        return <div>
            {
                currentState === 0 ? <div>회의해야함</div> :
                    currentState === 1 ?  <div>
                        <div className={classes.contentSpace}>
                            <TaxIncome viewName="수익" setData={setTaxIncome} data={taxIncome}/>
                        </div>
                        <div className={classes.contentSpace}>
                            <TaxOutcome viewName="지출" setData={setTaxOutcome} data={taxOutcome}/>
                        </div>
                    </div> :
                        <div className={classes.space}>
                            <Combination setDataList={updateCombinationData}/>
                            {/* <div className={classes.contentSpace}>
                                <LastYearMainActivity data={mainActivity} setDataList={setMainActivity} />
                            </div> */}
                            {/* <div className={classes.contentSpace}>
                                <Campaign data={campaign} setDataList={()=>setCamapign} />
                            </div> */}
                            {/* <div className={classes.contentSpace}>
                                <CampaignCost data={campaignCost} setDataList={setCampaignCost}/>
                            </div> */}
                        </div>
            }
        </div>
    }

   
    return <div>
        <TopTitle/>
        <SubTitle />
        <Contents/>
        <MoveButton/>
    </div>

}

export default CompanyInput;
