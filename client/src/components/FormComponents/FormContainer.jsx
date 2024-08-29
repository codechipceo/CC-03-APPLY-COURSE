import { DynamicForm } from "./DynamicForm";

export const FormContainer = ({
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
