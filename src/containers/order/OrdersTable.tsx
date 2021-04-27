import React, {useState} from 'react'
import './styles.scss';
import Order from './Order'
import RecentOrders from './RecentOrders'

const OrdersTable = (props: any) => {
  if(Object.keys(props).length === 0) return null
  const [activeTab, setActiveTab] = useState("orders_AAA");
  const arrayData = [props];
  const allKeys = Object.keys(arrayData[0])
  const tabSwitch = (t: any) => {
    setActiveTab(t) 
  }
  return (
    <div>
      <div className="Orders">
        {allKeys.map((item: any) => {
          return <Order order={item} key={item} tabSwitch={tabSwitch} activeTab={activeTab} />
        })}
      </div>
      {Object.keys(arrayData[0][activeTab]).length > 0 ? (<RecentOrders activeTab={activeTab} data={arrayData[0][activeTab]}/>) : (
           <div className="emptyErrors">
             No Items
           </div>
      )}
    </div>
  )
}

export default OrdersTable