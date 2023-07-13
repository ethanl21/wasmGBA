import type { Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import UsageDialog from "@/components/wasmgba/UsageDialog";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof UsageDialog> = {
  component: UsageDialog,
  args: {
    open: false,
  },
  tags: ["autodocs"],
  argTypes: {
    setIsOpen: {
      action: "setIsOpen",
      table: {
        disable: true,
      },
    },
    open: {
      defaultValue: false,
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = ({ ...args }) => {
  const [{ open }, updateArgs] = useArgs();

  return (
    <>
      <Button
        onClick={() => {
          updateArgs({ open: true });
        }}
      >
        Show Usage Dialog
      </Button>
      <UsageDialog
        {...args}
        open={open as boolean}
        setIsOpen={(isOpen) => {
          updateArgs({ open: isOpen });
        }}
      />
    </>
  );
};
