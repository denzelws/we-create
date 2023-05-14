import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

import { PlusLg } from '@styled-icons/bootstrap/PlusLg'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: { table: { disable: true } }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Comece aqui'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  children: 'nos contate',
  backgroundColor: 'transparent',
  color: 'black',
  icon: <PlusLg />
}
