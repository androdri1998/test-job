import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions/users';
import { getEmployees } from '../../store/actions/employees';
import EmployeesRender from './EmployeesRender';

import { breadcrumbsEmployees } from '../../utils/breadcrumbs.constants';

export default function EmployeesApp(){
  const dispatch = useDispatch();
  const userFromReducer = useSelector(state => state.userReducer.user);
  const employeesFromReducer = useSelector(state => state.employeesReducer.employees);
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser(1);
      dispatch(userData);
    }

    const getEmployeesData = async () => {
      const employeesData = await getEmployees(1);
      dispatch(employeesData);
    }

    getUserData();
    getEmployeesData();
  }, [dispatch]);

  useEffect(() => {
    setUser(userFromReducer);
  }, [userFromReducer]);

  useEffect(() => {
    setEmployees(employeesFromReducer);
  }, [employeesFromReducer]);
  
  return (
    <EmployeesRender 
      username={user? user.username: "teste"}
      employees={employees}
      breadcrumbs={breadcrumbsEmployees}/>
  );
}