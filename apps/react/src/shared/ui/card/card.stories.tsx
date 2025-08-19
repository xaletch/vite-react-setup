import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from './card';
import { Button } from "../button";

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;
type Story = StoryObj<typeof meta>;

type CardTemplateProps = {
  children: React.ReactNode
}

const CardTemplate = (args: CardTemplateProps) => {
  return (
    <div className="py-20 container grid grid-cols-3">
      <Card>
        {args.children}
        <div className="flex items-center justify-end gap-1.5 mt-6">
          <Button variant={"amber"} size={"iconSm"} className="text-lg">❤️</Button>
          <Button variant={"amber"} size={"iconSm"} className="text-lg">🔥</Button>
          <Button variant={"amber"} size={"iconSm"} className="text-lg">👍</Button>
          <Button variant={"amber"} size={"iconSm"} className="text-lg">👎</Button>
        </div>
      </Card>
    </div>
  )
}

export const Default: Story = {
  render: () => <CardTemplate>This is a card</CardTemplate>
}