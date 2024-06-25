import { useNavigate, useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../stores/usersApi";
import CustomLoader from '../components/CustomLoader';
import ErrorComponet from '../components/ErrorComponet';

function UserPage() {
	const navigate = useNavigate()
  const { userId } = useParams();
  const { data, isLoading, isError } = useGetUserByIdQuery(userId);
  return (
    <main className="wrapper">
      {data && !isLoading && !isError && (
        <div className="user-wrapper">
          <h1 className="user-wrapper__name">{data.name}</h1>
          <div className="user-wrapper__data-container">
            <p className="data-container__text">
              <span className="underline">Username:</span> {data.username}
            </p>
            <p className="data-container__text">
              <span className="underline">Phone:</span> {data.phone}
            </p>
            <p className="data-container__text">
              <span className="underline">Email:</span> {data.email}
            </p>
            <p className="data-container__text">
              <span className="underline">Website:</span> {data.website}
            </p>
          </div>
          <div className="user-wrapper__data-container">
            <h4 className="data-container__title">Address:</h4>
            <p className="data-container__text">
              <span className="underline">City:</span> {data.address.city}
            </p>
            <p className="data-container__text">
              <span className="underline">Street:</span> {data.address.street}
            </p>
            <p className="data-container__text">
              <span className="underline">Suite:</span> {data.address.suite}
            </p>
            <p className="data-container__text">
              <span className="underline">Zipcode:</span> {data.address.zipcode}
            </p>
          </div>
          <div className="user-wrapper__data-container">
            <h4 className="data-container__title">Company:</h4>
            <p className="data-container__text">
              <span className="underline">Name:</span> {data.company.name}
            </p>
            <p className="data-container__text">
              <span className="underline">Bs:</span> {data.company.bs}
            </p>
            <p className="data-container__text">
              <span className="underline">Catch phrase:</span> {data.company.catchPhrase}
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="user-wrapper__button"
          >
            Go to user list
          </button>
        </div>
      )}
      {isLoading && <CustomLoader />}
      {isError && <ErrorComponet />}
    </main>
  );
}

export default UserPage;
