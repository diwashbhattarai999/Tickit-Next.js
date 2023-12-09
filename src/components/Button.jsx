const Button = ({ onclick, buttonText }) => {
  return (
    <button
      className="bg-red-primary py-4 w-full mx-auto rounded-md"
      onClick={onclick}
      type="submit"
    >
      {buttonText}
    </button>
  );
};

export default Button;
