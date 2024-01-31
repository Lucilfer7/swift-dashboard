export const CancelButton = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}
    className="bg-red-600 p-2 w-full"
    >
      {children}
    </button>
  );
};

export const SubmitButton = ({ children, onClick, isDisabled }) => {
  return (
    <button
      type="submit"
      className={`w-full p-2 bg-lochinvar-600 ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Button = ({children, onClick}) => {
  return (
    <button type="button"
    className={`w-full p-2 bg-dark-blue-600`}
    onClick={onClick}>
      {children}
    </button>
  )
}