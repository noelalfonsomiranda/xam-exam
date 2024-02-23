import React, { useState, useEffect } from "react";
import { setUsersState, setSessionState } from "@/store/authSlice";
import { useAppDispatch, useAppSelector } from "@/store";

import Input from "@/components/Input";
import Button from "@/components/Button";
import ErrorAlert from "@/components/ErrorAlert";

export type AddUserFormProps = {};

interface FormData {
  branchId: string;
  userName: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
}

const FORM_DATA_PROPS = {
  branchId: '',
  userName: '',
  password: '',
  firstName: '',
  middleName: '',
  lastName: '',
  position: ''
}

const AddUserForm: React.FC<AddUserFormProps> = () => {
  const [formData, setFormData] = useState<FormData>(FORM_DATA_PROPS);
  const [isError, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const {usersState} = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
    if (isError)
      setError(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isUserExisted = usersState.find(user => user.userName === formData.userName)

    if (isNaN(+formData?.branchId)) {
      setError(true)
      setErrorMessage('Branch ID should be numbers.')
      return false
    }

    if (isUserExisted) {
      setError(true)
      setErrorMessage('User is already registered.')
      return false
    }

    dispatch(setUsersState([...usersState, {...formData, branchId: +formData?.branchId}]))
    setFormData(FORM_DATA_PROPS)
  }

  const onReset = () => {
    setFormData(FORM_DATA_PROPS)
    setError(false)
    setErrorMessage('')
  }

  return (
    <div className="w-full border-solid border-2 bg-gray-200 p-5">
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Branch id"
          type="text"
          name="branchId"
          value={formData.branchId}
          onChange={handleInputChange}
          className="mb-3"
          required
        />
        <Input
          placeholder="Username"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
          className="mb-3"
          required
        />
        <Input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="mb-3"
        />
        <Input
          placeholder="Middle Name"
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleInputChange}
          className="mb-3"
        />
        <Input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="mb-3"
        />
        <Input
          placeholder="Position"
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          className="mb-3"
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="mb-3"
          required
        />
        <div className="flex justify-end align-center">
          <Button onClick={onReset} label="RESET" className="w-32 bg-slate-100 rounded-2xl" />
          <Button type="submit" label="ADD" className="w-32 rounded-2xl ml-3" />
        </div>
        {isError ? <ErrorAlert text={errorMessage} className="mt-3" /> : null}
      </form>
    </div>
  );
};
export default AddUserForm;