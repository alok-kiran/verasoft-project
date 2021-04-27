import * as React from 'react'
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser, faMobile, faAt, faHome, faPhoneSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import ClipLoader from 'react-spinners/ClipLoader'

const Modal = (props: any) => {
  const { show, handleClose } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="crossIcon" >
          <div>
          </div>
          <div onClick={handleClose}>
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              className="iconTwo"
              style={{ color: "white", fontSize: "35px" }}
            />
          </div>
        </div>
        <div className="firstIcon" >
          <div className="processing">
            <ClipLoader color={'white'} loading={true} size={80} />
            <p className="spinnerText">Processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = (props: any) => {
  const [loader, setLoader] = React.useState(false);
  const { first_name = '', last_name = '', gender = '', email = '', activity = {}, id = '', mobile_phone = '', home_phone = '', work_phone = '', carrier_status = {} } = props;
  return (
    <div>
      <div className="header">
        <div className="name">
          <FontAwesomeIcon
            icon={faStar}
            className="startIcon"
            size="lg"
          />
          {first_name && <span className="nameText">{first_name} {last_name}</span>}
        </div>
        <div>
          <button className="btn" onClick={() => {
            setLoader(true)
          }}>New Order</button>
        </div>
      </div>
      <div className="details">
        <div className="itemOne">
          <div className="profileIcon">
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
            />
          </div>
          {gender &&<div className="gender">
            {gender}
          </div>}
          {!gender &&<div className="genderEmpty">
            MALE
          </div>}
        </div>
        <div className="itemTwo">
          <div className="idNumber">
            <div>
              <FontAwesomeIcon
                icon={faUser}
                size='sm'
              />
            </div>
            <div className="smallText">{id ? `# ${id}` : ''}</div>
          </div>
          <div className="idNumber">
            <div>
              <FontAwesomeIcon
                icon={faMobile}
                size='sm'
              />
            </div>
            <div className="smallText">
              {mobile_phone}
            </div>
          </div>
          <div className="idNumber">
            <div>
              <FontAwesomeIcon
                icon={faPhoneSquare}
                size='sm'
              />
            </div>
            <div className="smallText">
              {work_phone}
            </div>
          </div>
          <div className="idNumber">
            <div>
              <FontAwesomeIcon
                icon={faHome}
                size='sm'
              />
            </div>
            <div className="smallText">{home_phone}</div>
          </div>
          <div className="idNumber">
            <div>
              <FontAwesomeIcon
                icon={faAt}
                size='sm'
              />
            </div>
            <div className="smallText">
              {email}
            </div>
          </div>
        </div>
        <div className="itemThree">
          <div className="activityText">
            <p>90-DAY COMMUNICATION ACTIVITY </p>
          </div>
          <div className="mediums">
            <div className="mediumOne">
              <div className="messageType">
                {activity.sms}
              </div>
              <div className="footerText">
                <div className="since">SMS</div>
              </div>
            </div>
            <div className="mediumTwo">
              <div className="messageType">
                {activity.email}
              </div>
              <div className="footerText">
                <div className="since">EMAIL</div>
              </div>
            </div>
            <div className="mediumThree">
              <div className="messageType">
              {activity.orders}
              </div>
              <div className="footerText">
                <div className="since">ORDERS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemFour">
          <div className="title">
            SMS CARRIER STATUS
          </div>
          <div className="status">
          {carrier_status && carrier_status.status && carrier_status.status.length ? carrier_status.status : ''}
          </div>
          <div className="dateOfStart">
            <div className="since">SINCE {carrier_status && carrier_status.since && carrier_status.since.length ? moment(carrier_status.since).format("MMM D, YYYY") : ''}</div>
          </div>
        </div>
      </div>
      <Modal show={loader} handleClose={()=> {
        setLoader(false)
      }} 
      disabled={true}
      />
    </div>
  )
}

export default Header;