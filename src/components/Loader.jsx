import { DotLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div
      className={`fixed inset-0 ${
        loading ? "bg-white/[0.5] " : "bg-white"
      } z-50 grid place-items-center
  `}
    >
      <DotLoader loading={loading} color="#E14658" />
    </div>
  );
};

export default Loader;
