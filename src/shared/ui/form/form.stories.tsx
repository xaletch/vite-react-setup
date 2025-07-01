import * as yup from "yup";
import { Form } from "./form";
import { Input } from "./input";
import { Button } from "../button";
import type { Meta, StoryObj } from "@storybook/react-vite";

type FormInputVariant = "default" | "white" | "error" | "success";

const FormPreview = ({ inputVariant = "default" }: { inputVariant?: FormInputVariant }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        className={"max-w-md w-full"}
        onSubmit={async (data) => alert(JSON.stringify(data))}
        schema={yup.object({
          name: yup.string().required(),
        })}
      >
        {({ register, formState }) => (
          <>
            <Input 
              id={"name"}
              name={"name"}
              type={"text"}
              label={"Name"}
              variant={inputVariant}
              register={register('name')}
              error={formState.errors['name']}
              required
            />
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

const meta: Meta = {
  component: FormPreview,
};
export default meta;
type Story = StoryObj<typeof FormPreview>;

export const Default: Story = {
  render: () => <FormPreview />,
};

export const Error: Story = {
  render: () => <FormPreview inputVariant="error" />,
};

export const Success: Story = {
  render: () => <FormPreview inputVariant="success" />,
};