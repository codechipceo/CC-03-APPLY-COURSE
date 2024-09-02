import DynamicForm from "./DynamicForm";
import { memo } from "react";

const FormContainer = ({
  formPayload,
  formDefinition,
  onCancel,
  handleChange,
  children,
  ...props
}) => {
  return (
    <div>
      <DynamicForm
        formData={formPayload}
        formDefinition={formDefinition}
        handleChange={handleChange}
        {...props}
      />
      {children}
    </div>
  );
};

export default FormContainer;
