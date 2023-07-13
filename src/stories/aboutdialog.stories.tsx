import { type Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import AboutDialog from "@/components/wasmgba/AboutDialog";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof AboutDialog> = {
  component: AboutDialog,
  args: {
    open: false,
    upstreamRepo: "https://example.com",
    repo: "https://example.com",
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
      type: "boolean",
    },
    upstreamRepo: {
      type: "string",
    },
    repo: {
      type: "string",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = ({ ...args }) => {
  const [{ open, upstreamRepo, repo }, updateArgs] = useArgs();

  return (
    <>
      <Button
        onClick={() => {
          updateArgs({ open: true });
        }}
      >
        Show About Dialog
      </Button>
      <AboutDialog
        {...args}
        open={open as boolean}
        setIsOpen={(isOpen) => {
          updateArgs({ open: isOpen });
        }}
        upstreamRepo={upstreamRepo as string}
        repo={repo as string}
      />
    </>
  );
};
