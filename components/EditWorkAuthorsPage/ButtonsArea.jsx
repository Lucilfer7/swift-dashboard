import { CancelButton, SubmitButton } from "../Button";

const ButtonsArea = ({ setEditAuthors, handleSubmit, formChanged }) => {
  return (
    <div>
      <CancelButton onClick={setEditAuthors}>Cancel</CancelButton>
      <SubmitButton onClick={handleSubmit} isDisabled={!formChanged}>
        Save
      </SubmitButton>
    </div>
  );
};

export default ButtonsArea;
