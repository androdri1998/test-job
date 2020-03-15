import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions/users';
import { getTransactions } from '../../store/actions/extract';
import ExtractRender from './ExtractRender';

import { breadcrumbsExtract } from '../../utils/breadcrumbs.constants';
import { userId } from '../../utils/userIntial';

export default function ExtractApp(){
  const dispatch = useDispatch();
  const userFromReducer = useSelector(state => state.userReducer.user);
  const transactionsFromReducer = useSelector(state => state.extractReducer.transactions);
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser(userId);
      dispatch(userData);
    }

    const getTransactionsData = async () => {
      const Data = await getTransactions(userId);
      dispatch(Data);
    }

    getUserData();
    getTransactionsData();
  }, [dispatch]);

  useEffect(() => {
    setUser(userFromReducer);
  }, [userFromReducer]);

  useEffect(() => {
    setTransactions(transactionsFromReducer);
  }, [transactionsFromReducer]);
  
  return (
    <ExtractRender
      username={user? user.username: "teste"}
      transactions={transactions}
      breadcrumbs={breadcrumbsExtract}/>
  );
}