import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';

import { setUsersState, setSessionState } from "@/store/authSlice";
import { useAppDispatch, useAppSelector } from "@/store";

import Input from "@/components/Input";
import Button from "@/components/Button";
import ErrorAlert from "@/components/ErrorAlert";

export type LoginFormProps = {};

interface LoginData {
  branchId: string;
  userName: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [loginData, setLoginData] = useState<LoginData>({ branchId: '', userName: '', password: '' });
  const [isError, setError] = useState(false)

  const {usersState, sessionState} = useAppSelector((state) => state.auth)

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!usersState.length)
		  handleFetch()
	}, [usersState])
  
  useEffect(() => {
    if (sessionState?.userName) {
      router.push('/dashboard')
    }
  }, [sessionState])

	const handleFetch = async () => {
		// const response = await fetch('/api/users_data', {method: 'GET'})

    const response = await axios.get('/api/users_data', {method: 'GET'})
    const data = response.data
		dispatch(setUsersState(data.users || []))
	}

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    if (isError)
      setError(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // avoid any function
    if (isError)
      return true

    const session = usersState.find(user => user.userName === loginData.userName)

    // request
    usersState.find(user => {
      if (loginData.userName === user.userName &&
        loginData.password === user.password &&
        +loginData.branchId === user.branchId
        ) {
        // response
        dispatch(setSessionState(session))
	      router.push('/dashboard')
      } else {
        setError(true)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Branch id"
        type="text"
        name="branchId"
        value={loginData.branchId}
        onChange={handleInputChange}
        className="mb-3"
        required
      />
      <Input
        placeholder="User name"
        type="text"
        name="userName"
        value={loginData.userName}
        onChange={handleInputChange}
        className="mb-3"
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleInputChange}
        className="mb-3"
      />
      <Button type="submit" label="LOGIN" className="w-full" />
      {isError ? <ErrorAlert className="mt-3" /> : null}
    </form>
  );
};
export default LoginForm;