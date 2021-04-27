import React from 'react'
import './styles.scss';

const Order = (ooooo: any) => {
      if (!ooooo ) return null
      const {order, subItems, activeTab, tabSwitch} = ooooo;
      console.log([order, subItems]);
      const newClass = order === activeTab ? "orderActive" : "order";
      const myfunction = (o: any) => {
        tabSwitch(o);
      }
      return (
          <div className={newClass} onClick={() => myfunction(order)}>
            <span className="tabName">{order.split("_")[0].toUpperCase()} {order.split("_")[1]}</span>
          </div>
      )
    }

export default Order;