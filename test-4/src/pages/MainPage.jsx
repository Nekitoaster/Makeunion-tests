import CustomLoader from "../components/CustomLoader";
import ErrorComponet from '../components/ErrorComponet';
import UserItem from "../components/UserItem";
import { useGetUsersQuery } from "../stores/usersApi";

function MainPage() {
  const { data: usersData, isLoading, isError } = useGetUsersQuery();

  return (
    <main className="wrapper">
      {!isLoading && !isError && (
        <div className="users-container">
          {usersData.map((user) => {
            return <UserItem key={user.id} props={user} />;
          })}
        </div>
      )}

      {isLoading && <CustomLoader />}
      {isError && <ErrorComponet />}
    </main>
  );
}

export default MainPage;
