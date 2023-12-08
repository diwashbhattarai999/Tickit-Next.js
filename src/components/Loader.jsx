import { DotLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div
      className={`fixed inset-0 ${
        loading && "bg-bg-secondary/50"
      } z-50 grid place-items-center
  `}
    >
      <DotLoader loading={loading} color="#8a2be2" />
    </div>
  );
};

export default Loader;
