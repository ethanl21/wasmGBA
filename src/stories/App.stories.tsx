import type { Meta } from "@storybook/react";

import App from "@/App";

const meta: Meta<typeof App> = {
  component: App,
  argTypes: {},
};

export default meta;

export const Default = () => {
  return <App />;
};
