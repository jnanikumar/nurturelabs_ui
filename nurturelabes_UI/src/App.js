import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Section from "./Components/Section";
import PersonIcon from "@material-ui/icons/Person";
import BarChartIcon from "@material-ui/icons/BarChart";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PieChartIcon from "@material-ui/icons/PieChart";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ViewHeadlineRoundedIcon from "@material-ui/icons/ViewHeadlineRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import ShareSharpIcon from "@material-ui/icons/ShareSharp";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import MouseOutlinedIcon from "@material-ui/icons/MouseOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import LaunchIcon from "@material-ui/icons/Launch";
import InputIcon from "@material-ui/icons/Input";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
function App() {
  const [userData, setUserData] = useState({
    asset: " ",
    type: " ",
    chain: {
      name: " ",
    },
    amount: " ",
    state: " ",
    user: " ",
    referral_earnings: " ",
    Loading:true
  });
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
      );
      const { data } = await res.json();
      console.log(data);

      const newUser = { ...data[0] };

      setUserData((prev) => newUser);
      console.log(userData);
    };

    getData();
  }, []);

  return (
    

    <div className="App">
      {userData.Loading?<div>Loading</div>:
      <div>
      <div className="alert" width="100%" height="40px">
        <strong>Lorem Ipsum is a simply dummy text of the printing</strong>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-2 sidebarseperation"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* style={{display:"flex",flexDirection:"row"}} */}
            <div style={{ width: "95%" }}>
              <div>
                <div className="nameRow">
                  <div className="nameAvatar">
                    <strong>N</strong>
                  </div>
                  <div className="name">
                    <strong style={{ color: "white" }}>Name</strong>
                  </div>
                  <div className="nameIcon">
                    <p>
                      <ArrowBackIcon />
                    </p>
                  </div>
                  <div className="verticalLine"></div>
                </div>
                <div>
                  <Section sectionName={"Home"} Icon={AppsRoundedIcon} />
                  <Section sectionName={"Section1"} Icon={AssessmentIcon} />
                  <Section sectionName={"Section2"} Icon={ShowChartIcon} />
                  <Section sectionName={"Section3"} Icon={PieChartIcon} />
                  <Section sectionName={"Section4"} Icon={AppsRoundedIcon} />
                  <Section sectionName={"Section5"} Icon={AssessmentIcon} />
                  <Section sectionName={"Section6"} Icon={ShareSharpIcon} />
                  <Section sectionName={"Section7"} Icon={PieChartIcon} />
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-5 availableAmount">
                  <div className="nameAvatar" style={{ marginLeft: "10px" }}>
                    <strong>N</strong>
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <strong>$0.90</strong>
                  </div>
                </div>
                <div className="col-5 stockName">
                  <div>
                    <strong>Buy $XYZ</strong>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <LanguageOutlinedIcon />
                <span><ToggleOffOutlinedIcon /></span>
              </div>
            </div>
            <div
              height="100%"
              width="1px"
              style={{ borderLeft: "1px solid white", marginLeft: "auto" }}
            ></div>
          </div>

          <div className="col-7 ">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontWeight: "800",
                  fontSize: "20px",
                  borderBottom: "3px solid blue",
                  marginTop: "25px",
                }}
              >
                Section
              </span>
              <span
                className="id"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "200px",
                  marginTop: "15px",
                }}
              >
                <div style={{ marginLeft: "5px", color: "blue" }}>
                  <MouseOutlinedIcon />
                </div>

                <div style={{ marginLeft: "10px" }}>
                  <strong>
                    0.2$XYZ{" "}
                    <span
                      class="badge"
                      style={{ backgroundColor: "#51E1ED", color: "blue" }}
                    >
                      Tier1
                    </span>
                  </strong>
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <ArrowDropDownOutlinedIcon />
                </div>
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#51E1ED",
                padding: "20px",
                margin: "10px 0px",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "blue",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <spam>
                Lorem Ipsum is a simply dummy text of the printing and
                typesetting Industry
              </spam>
              <spam
                style={{
                  padding: "4px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  width: "10%",
                  textAlign: "center",
                  marginTop: "4px",
                }}
              >
                Tutorial
              </spam>
            </div>
            <div
              style={{
                backgroundColor: "#252b2b",
                padding: "20px",
                marginTop: "15px",
                borderRadius: "15px",
              }}
              height="100px"
              width="90%"
            >
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "25px",
                  margin: "0 10px 5px 10px",
                }}
              >
                Your rewards
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "30px",
                    margin: "1px 10px 10px 10px",
                    marginBottom: "15px",
                  }}
                >
                  $0.26231428
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{
                    marginLeft: "15px",
                    fontSize: "13px",
                    fontWeight: "600",
                    borderRadius: "10px",
                    width: "150px",
                    height: "40px",
                  }}
                >
                  <LaunchIcon /> Custom Link
                </button>
              </div>
              <div>
                <span class="badges" style={{ backgroundColor: "#484b4b" }}>
                  $40 AVAX
                </span>
                <span class="badges" style={{ backgroundColor: "#484b4b" }}>
                  $10 BNB
                </span>
                <span class="badges" style={{ backgroundColor: "#484b4b" }}>
                  $210 BTC
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div
                  style={{
                    backgroundColor: "#252b2b",
                    padding: "5px",
                    marginTop: "10px",
                    borderRadius: "15px",
                  }}
                  height="200px"
                  width="90%"
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "25px",
                      margin: "10px",
                    }}
                  >
                    12.5% of fee
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "450",
                        fontSize: "16px",
                        margin: "1px 10px 15px 10px",
                        marginBottom: "10px",
                      }}
                    >
                      Your Referral Link for xyz
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#484b4b",
                      padding: "5px",
                      margin: "10px 100px 10px 10px",
                      borderRadius: "10px",
                    }}
                  >
                    <p style={{ margin: "5px 0 5px 30px" }}>
                      https://unityexchange.design{" "}
                      <span style={{ marginLeft: "50px" }}>
                        <FileCopyOutlinedIcon />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div
                  style={{
                    backgroundColor: "#252b2b",
                    padding: "5px",
                    marginTop: "10px",
                    borderRadius: "15px",
                  }}
                  height="200px"
                  width="90%"
                >
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "25px",
                      margin: "10px",
                    }}
                  >
                    12.5% of fee
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "450",
                        fontSize: "16px",
                        margin: "1px 10px 15px 10px",
                        marginBottom: "10px",
                      }}
                    >
                      Your Referral Link for xyz
                    </p>
                  </div>
                  <div
                    width="100%"
                    style={{
                      backgroundColor: "#484b4b",
                      padding: "5px",
                      margin: "10px 100px 10px 10px",
                      borderRadius: "10px",
                    }}
                  >
                    <p style={{ margin: "5px 0 5px 30px" }}>
                      https://unityexchange.design{" "}
                      <span style={{ marginLeft: "50px" }}>
                        <FileCopyOutlinedIcon />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    borderBottom: "2px solid blue",
                    marginTop: "15px",
                    marginRight: "15px",
                  }}
                >
                  First Tab
                </span>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    marginTop: "15px",
                  }}
                >
                  Second Tab
                </span>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#484b4b",
                  padding: "8px",
                  borderRadius: "10px",
                  fontWeight: "400",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                <span style={{ width: "25%",fontWeight:"500" }}>ASSET</span>
                <span style={{ width: "25%",fontWeight:"500" }}>AMOUNT</span>
                <span style={{ width: "25%",fontWeight:"500"  }}>USER ACCOUNT</span>
                <span style={{ width: "25%",fontWeight:"500"  }}>REFERAL EARNING</span>
              </div>
              <div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#252b2b",
                    padding: "5px",
                    borderRadius: "10px",
                    fontWeight: "400",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  
                  <spam
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                    }}
                  >
                    <spam><img style={{paddingRight:"15px"}} src={userData.img}/>{userData ? userData.asset : " "}</spam>
                    <spam></spam>
                    <spam
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <spam>{userData ? userData.type : " "}</spam>
                      
                      <span class="badges" style={{ backgroundColor: "#484b4b" }}>
                      {userData ? userData.chain.name : " "}
                </span>
                    </spam>
                  </spam>
                 
                  <spam
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                    }}
                  >
                    <spam>{userData ? userData.amount : " "} BNB</spam>
                    <spam
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <spam>{userData ? userData.state : " "}</spam>
                    </spam>
                  </spam>
                  <spam
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                    }}
                  >
                    <spam>
                      {userData.user.slice(0, 5)}...
                      {userData.user.slice(-6, -1)}
                    </spam>
                  </spam>
                  <spam
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                    }}
                  >
                    <spam>
                      {userData ? userData.referral_earnings : " "} BNB
                    </spam>
                    <spam
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <spam className="spam-link">View On BSC Scan </spam>
                    </spam>
                  </spam>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-3"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div
              height="100%"
              width="1px"
              style={{ borderRight: "1px solid white", marginRight: "25px" }}
            ></div>
            <div>
              <div className="row">
                <div className="col-5 avalance">
                  <div className="" style={{ marginLeft: "10px" }}>
                    <img src={userData.chain.img} height="18px" width="18px"/>
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <strong>Avalance</strong>
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </div>
                <div
                  className="col-5 id"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div style={{ marginLeft: "10px", color: "blue" }}>
                    <MouseOutlinedIcon />
                  </div>

                  <div style={{ marginLeft: "10px" }}>
                    <strong>204xy....5</strong>
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div
                className=""
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div style={{ marginLeft: "0px" }}>
                  <ArrowBackOutlinedIcon />
                </div>

                <div style={{ marginLeft: "10px" }}>
                  <strong>Custom Link</strong>
                </div>
              </div>
              <br></br>
              <p>https://testnetxyzxyz/trade?ref=</p>
              <div style={{ width: "100%" }}>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter"
                />
              </div>
              <div>
                <br></br>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{
                    marginLeft: "15px",
                    fontSize: "13px",
                    fontWeight: "600",
                    borderRadius: "10px",
                    width: "150px",
                  }}
                >
                  <LaunchIcon /> Custom Link
                </button>
                <button
                  type="button"
                  class="btn cancelButton"
                  style={{
                    border: "1px solid white",
                    marginLeft: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    borderRadius: "10px",
                    width: "150px",
                    color: "white",
                  }}
                >
                  <InputIcon /> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>}
    </div>
  );
}

export default App;
