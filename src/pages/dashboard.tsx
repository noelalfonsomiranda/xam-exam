import React, { useEffect } from "react";
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';

import { useAppSelector } from "@/store";
import { setSessionState, setUsersState } from "@/store/authSlice";
import { useAppDispatch } from "@/store";

import Button from "@/components/Button";
import AddUserForm from "@/components/AddUserForm";
import UsersTable from "@/components/UsersTable";

export type DashBoardProps = {};

const DashBoard: React.FC<DashBoardProps> = () => {
  const {usersState, sessionState} = useAppSelector((state) => state.auth)
  
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  useEffect(() => {
    if (!sessionState?.userName)
      // redirect('/')
      router.push('/')
  }, [sessionState])

  const onRemoveUser = (user: string) => {
    const newUsers = usersState.filter((item: any) => {
      return item.userName !== user;
    })
    dispatch(setUsersState(newUsers))
  }

  return (
    <main className="container mx-auto p-14">
      <div className="flex justify-between items-center mb-14">
        <div><p className="text-xl font-medium">{sessionState?.userName}</p></div>
        <div><Button onClick={() => dispatch(setSessionState({}))} label="LOGOUT" /></div>
      </div>
      <div className="gap-4 grid grid-cols-3">
        <AddUserForm />
        <div className="col-span-2"><UsersTable onRemoveUser={onRemoveUser} usersState={usersState} /></div>
      </div>
    </main>
  );
};
export default DashBoard;