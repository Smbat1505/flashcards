import React from 'react'

import { StoryContext } from '@storybook/react'
import clsx from 'clsx'

import './tcheme.scss'

const withTheme = (StoryFn: React.FC, context: StoryContext) => {
  // Get the active theme value from the story parameters
  const theme = context.parameters?.theme || context.globals?.theme
  const className = theme === 'dark' ? 'dark-mode' : 'light-mode'
  const isDocs = context.viewMode === 'docs'

  if (theme === 'side-by-side' && !isDocs) {
    return (
      <>
        <div className={clsx('themeBlock', 'dark-mode', 'left')}>
          <StoryFn />
        </div>
        <div className={clsx('themeBlock', 'light-mode')}>
          <StoryFn />
        </div>
      </>
    )
  }

  return (
    <div className={clsx('themeBlock', className, 'fill', isDocs && 'docs')}>
      <StoryFn />
    </div>
  )
}

export default withTheme