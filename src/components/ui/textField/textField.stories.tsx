import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, FocusEvent, useState } from 'react'

import { TextField, TextFieldProps } from '@/components/ui/textField/textField'
import { action } from '@storybook/addon-actions'
import { withActions } from '@storybook/addon-actions/decorator'
import { userEvent, within } from '@storybook/test'

const meta: Meta<typeof TextField> = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    labelText: {
      control: { type: 'multi-select' },
      options: ['Default', 'password', 'search'],
    },
    onChange: { action: 'changed' },
    onClearClick: { action: 'cleared' },
    placeholder: {
      control: { type: 'radio' },
      options: ['...type your text', '...type your password', '...type your search'],
    },

    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'search'],
    },
    value: { control: { type: 'radio' } },
  },
  component: TextField,
  decorators: [withActions],
  parameters: {
    action: {
      handles: ['changed', 'cleared', 'mouseover', 'click .btn', 'focusin', 'focusout'],
    },
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Updates the value and clears the error state based on the input value.
 *
 * @return {void} This function does not return anything.
 * @param args
 */
export const ShowClearIcon: Story = (args: TextFieldProps) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleValueChange = (inputValue: ChangeEvent<HTMLInputElement>) => {
    setValue(inputValue.currentTarget.value)
    setError('')
  }

  const handleClearClick = () => {
    setValue('')
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setError('Input field is empty')
    }
  }

  return (
    <TextField
      {...args}
      labelText={'search'}
      onBlur={handleBlur}
      onChange={handleValueChange}
      onClearClick={handleClearClick}
      placeholder={'search'}
      type={'search'}
      validationError={error}
      value={value}
    />
  )
}

ShowClearIcon.args = {
  labelText: 'search',
  onBlur: action('onBlur'),
  onChange: action('onChange'),
  onClearClick: action('onClearClick'),
  placeholder: 'search',
  type: 'search',
  validationError: '',
  value: '',
}
ShowClearIcon.argTypes = {
  labelText: { control: 'text' },
  placeholder: { control: 'text' },
  type: { control: 'text' },
  validationError: { control: 'text' },
  value: { control: 'text' },
}

ShowClearIcon.parameters = {
  backgrounds: {
    default: 'dark',
  },
  docs: {
    storyDescription: 'Show clear icon',
  },
  layout: 'fullscreen',
}

export const Default: Story = {
  args: {
    labelText: 'Default',
    placeholder: 'Enter text...',
    type: 'text',
  },
  /**
   * Asynchronously types "Default text" into the default input field of the canvas element.
   *
   * @param {Object} options - The options object.
   * @param {HTMLElement} options.canvasElement - The canvas element to type into.
   * @return {Promise<void>} A promise that resolves when the typing is complete.
   */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const defaultInput = canvas.getByLabelText('Default', {
      selector: 'input',
    })

    await userEvent.type(defaultInput, 'Default text', {
      delay: 100,
    })
  },
}
export const Password: Story = {
  args: {
    'aria-label': 'password',
    'aria-labelledby': 'password',
    labelText: 'password',
    placeholder: 'enter password...',
    role: 'button',
    type: 'password',
  },
  /**
   * Asynchronously types a password into the password input field of the canvas element.
   *
   * @param {HTMLElement} canvasElement - The canvas element to interact with.
   * @return {Promise<void>} A promise that resolves when the password typing is complete.
   */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    })

    await userEvent.clear(passwordInput)

    await userEvent.type(passwordInput, 'examplePassword_459876373833.', {
      delay: 100,
    })
    await userEvent.click(passwordInput)

    // Corrected usage
    // Assuming the button has visible text or aria-label that describes its purpose, for example, "password"
    const eyeIcon = canvas.getByRole('button', { name: 'password' })

    await userEvent.click(eyeIcon, { delay: 100 })
  },
}

export const SearchField: Story = {
  args: {
    'aria-label': 'Search',
    labelText: 'Search',
    placeholder: 'Search...',
    type: 'search',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const searchInput = canvas.getByLabelText('Search', {
      selector: 'input',
    })

    await userEvent.type(searchInput, 'example-search', {
      delay: 100,
    })
    await userEvent.click(searchInput)
  },
}

export const WithError: Story = {
  args: {
    labelText: 'Text with error',
    placeholder: 'Enter text...',
    type: 'text',
    validationError: 'validation error',
  },

  /**
   * Asynchronously types an error message into the email input field of the canvas element.
   *
   * @param {HTMLElement} canvasElement - The canvas element to interact with.
   * @return {Promise<void>} A promise that resolves when the error message typing is complete.
   */
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByLabelText('Text with error', {
      selector: 'input',
    })

    await userEvent.type(emailInput, 'Error message', {
      delay: 100,
    })
  },
}
