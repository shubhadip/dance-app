import noResult from "./../../assets/images/no-result.svg";

const NotFound = () => {

  return (
    <div className="px-10 py-5 flex flex-col items-center">
      <img
          src={noResult}
          alt="yoga"
          className="w-40 mb-6"
      />
      <span className="font-bold opacity-50">
          No Result Found
      </span>
  </div>
  );
}

export default NotFound;
