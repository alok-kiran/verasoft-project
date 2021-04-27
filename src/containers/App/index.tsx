import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.scss';
import Header from '../header/Header';
import OrdersTable from '../order/OrdersTable'
import { useDispatch, useSelector } from "react-redux";
import { getHeader } from '../../redux/reducers/header'
import { getOrders } from '../../redux/reducers/orders'

const App: FC<RouteComponentProps> = (props: RouteComponentProps) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeader())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch]);

  const header = useSelector((state: any) => state.header.header);
  const orders = useSelector((state: any) => state.orders.orders);
  return (
    <div className='App'>
      <Header {...header} />
      <OrdersTable {...orders}/>
    </div>
  );
};

export default App;
