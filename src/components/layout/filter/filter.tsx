import { TrashOutline } from '@/assets/icons/components'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './filter.module.scss'

export type FilterPropsType = {
  inputValue: string | undefined
  onClearFilter: () => void
  onInputSearchChange: (value: string) => void
  onSliderChange: (values: number[]) => void
  onTabSwitcherChange: (value: string) => void
  sliderValues: number[]
  tabSwitcherValue: string
}

export const Filter = (props: FilterPropsType) => {
  return (
    <div className={s.filterWrapper}>
      <div>
        <TextField
          handleValueChange={props.onInputSearchChange}
          onClear={props.onClearFilter}
          placeholder={'Input search'}
          type={'search'}
          value={props.inputValue}
        />
      </div>
      <div>
        <TabSwitcher
          changeHandler={props.onTabSwitcherChange}
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
          value={props.tabSwitcherValue}
        />
      </div>
      <div>
        <Typography className={s.title} variant={'body2'}>
          Number of cards
        </Typography>
        <Slider
          maxValue={15}
          minValue={0}
          onChange={props.onSliderChange}
          sliderValues={props.sliderValues}
        />
      </div>
      <div>
        <Button onClick={props.onClearFilter} variant={'secondary'}>
          <TrashOutline width={'1rem'} />
          Clear filter
        </Button>
      </div>
    </div>
  )
}
