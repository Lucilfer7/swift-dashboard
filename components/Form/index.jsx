const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="p-4 w-full m-auto"
      encType="multipart/form-data"
    >
      {children}
    </form>
  );
};

export default Form;
