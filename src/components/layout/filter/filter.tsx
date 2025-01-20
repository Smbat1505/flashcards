import { useState } from 'react'

import { TrashOutline } from '@/assets/icons/components'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './filter.module.scss'

export type FilterPropsType = {
  defaultSliderValue: number[]
  onClearFilter: () => void
  onInputSearchChange: (value: string) => void
  onSliderChange: (values: number[]) => void
  onTabSwitcherChange: (value: string) => void
}

export const Filter = (props: FilterPropsType) => {
  const [inputValue, setInputValue] = useState<string>()

  const onClearFilterHandler = () => {
    props.onClearFilter()
    setInputValue('')
  }

  console.log(inputValue)

  const onInputSearchChangeHandler = (value: string) => {
    props.onInputSearchChange(value)
    setInputValue(value)
  }

  return (
    <div className={s.filterWrapper}>
      <div>
        <TextField
          handleValueChange={onInputSearchChangeHandler}
          onClear={onClearFilterHandler}
          placeholder={'Input search'}
          type={'search'}
          value={inputValue}
        />
      </div>
      <div>
        <div>
          <TabSwitcher
            changeHandler={props.onTabSwitcherChange}
            defaultValue={'allCards'}
            tabs={[
              {
                disabled: false,
                name: 'My Cards',
                value: 'myCards',
              },
              {
                disabled: false,
                name: 'All Cards',
                value: 'allCards',
              },
            ]}
            title={'Show decks cards'}
          />
        </div>
        <div>
          <Typography variant={'body2'}>Number of cards</Typography>
          <Slider
            defaultValue={props.defaultSliderValue}
            maxValue={15}
            minValue={0}
            onChange={props.onSliderChange}
          />
        </div>
        <div>
          <Button onClick={onClearFilterHandler} variant={'secondary'}>
            <TrashOutline width={'1rem'} />
            Clear filter
          </Button>
        </div>
      </div>
    </div>
  )
}
