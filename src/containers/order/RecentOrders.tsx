import React, { useState, useEffect } from 'react'
import moment from 'moment'
import BeatLoader from 'react-spinners/BeatLoader'
const RecentOders = (props: any) => {
  const { data } = props;
  const [finalData, setData] = useState([]);
  const [loader, setLoader] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('');
  
  const goToErrorTab = ()=> {
    setLoading(false)
    setLoader(true);
    setFirstActive(false)
    setSecondActive(true)
    setTimeout(()=> {
      setLoader(false)
    },2000)
  }
  const clickFirstTab = ()=> {
    setLoading(true)
    setFirstActive(true)
    setSecondActive(false)
    setLoader(false);
    if(data){
      setTimeout(()=> {
        setData(data.sent)
      setLoading(false)
      }, 2000)
    }
  }

  useEffect(()=> {
    clickFirstTab()
  }, [])

  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const firstStyle = firstActive ? 'sentTab' : 'errorTab';
  const secondaryStyle = secondActive ? 'sentTab' : 'errorTab';
  console.log(['sortBy', sortBy]);
  return (
    <div>
      <div className="recentContaier">
        <div className="sentAndErrors">
          <div className={firstStyle} onClick={() => {
           clickFirstTab()
          }}>
            <p className="simpleText">SENT</p>
          </div>
          <div className={secondaryStyle} onClick={() => {
            goToErrorTab()
          }}>
            <p className="simpleText">ERRORS</p>
          </div>
        </div>
        <div className="recentOrders">RECENT ORDERS</div>
      </div>

      {firstActive && (
        loading ? (
          <div className="emptyErrors">
          <BeatLoader color='#7D869A' loading={true} size={15} />
        </div>
        ) :         <div className="sentHeader">
        <div className="tableHeader">
          <div className="headerText" onClick={() => setSortBy("sent_dt")}>DATE & TIME</div>
          <div className="headerText" onClick={() => setSortBy("subject")}>SUBJECT</div>
          <div className="headerText" onClick={() => setSortBy("type")}>COMMUNICATION TYPE</div>
          <div className="headerText" onClick={() => setSortBy("order_id")}>ORDER #</div>
          <div className="headerText"></div>
        </div>
        <div>
          {finalData.map((item: any, index: any) => {
            const time = `${moment().format("YYYY-MM-DD")}Z${item.sent_tm}`;
            return (
              <div className="orderSection" key={index}>
                <div className="dateAndTime">
                  <div className="title">
                    {moment(item.sent_dt).format("MMM D, YYYY")}
                  </div>
                  <div className="subTitle">
                    {moment(time).format("hh:mm A")}
                  </div>
                </div>
                <div className="dateAndTime">
                  <div className="title">
                    {item.subject.title}
                  </div>
                  <div className="subTitle">
                    {item.subject.email}
                  </div>
                </div>
                <div className="dateAndTime">
                  <div className="title">
                    {item.type}
                  </div>
                </div>
                <div className="dateAndTime">
                  <div className="title">
                    {item.order_id}
                  </div>
                </div>
                <div className="dateAndTime" onClick={() => alert("SENT SUCCESSFULLY!")}>
                  <div className="sendAgain">
                    RESEND
                 </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      )}

      {
        secondActive && (
          <div className="emptyErrors">
            {loader ? <BeatLoader color='#7D869A' loading={true} size={15} /> : 'No Items'}
          </div>
        )
      }
    </div>
  )
}
export default RecentOders;