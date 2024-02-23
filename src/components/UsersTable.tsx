import Button from "@/components/Button";

export type UsersTableProps = {
  usersState: any;
  onRemoveUser: (user: string) => void;
};

const UsersTable: React.FC<UsersTableProps> = ({usersState, onRemoveUser}) => {
  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th>#</th>
          <th>Branch ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            usersState.map((user: any, key: number) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{user.branchId}</td>
                <td>{user.userName}</td>
                <td>{user.firstName} {user.middleName} {user.lastName}</td>
                <td>{user.position}</td>
                <td>
                  <Button
                    onClick={() => onRemoveUser(user?.userName)}
                    label="REMOVE"
                    className="py-0 px-2 rounded-md bg-slate-200 border-solid border-2 border-black"
                  />
                </td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};
export default UsersTable;