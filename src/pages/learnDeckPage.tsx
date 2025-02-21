import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroupDemo } from '@/components/ui/radiogroup'
import { Typography } from '@/components/ui/typography'
import { useRetrieveRandomCardQuery } from '@/services/base-api'

import s from './learnDeckPage.module.scss'

export const LearnDeckPage = () => {
  const { data } = useRetrieveRandomCardQuery({ deckId: 'cm7cc2vnx0194nu01z32fb5ez' })

  console.log(data)

  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const radioOptions = [
    { label: 'Did Not Know', value: 'DidNotKnow' },
    { label: 'Forgot', value: 'Forgot' },
    { label: 'A lot of thought', value: 'ALotOfThought' },
    { label: 'Confused', value: 'Confused' },
    { label: 'Knew the answer', value: 'KnewTheAnswer' },
  ]

  return (
    <Card>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Learn &quot;&quot;
      </Typography>
      <div>
        <Typography as={'span'} variant={'subtitle1'}>
          Question:&nbsp;
        </Typography>
        <Typography as={'span'} variant={'body1'}>
          {data ? data.question : ''}
        </Typography>
      </div>
      <div className={s.shots}>
        <Typography as={'span'} variant={'body2'}>
          Количество попыток ответов на вопрос:&nbsp;
        </Typography>
        <Typography as={'span'} variant={'subtitle2'}>
          {data ? data.shots : ''}
        </Typography>
      </div>
      {!showAnswer && (
        <div className={s.button}>
          <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
        </div>
      )}
      {showAnswer && (
        <div>
          <div>
            <Typography as={'span'} variant={'subtitle1'}>
              Answer:&nbsp;
            </Typography>
            <Typography as={'span'} variant={'body1'}>
              {data ? data.answer : ''}
            </Typography>
          </div>
          <Typography className={s.rate} variant={'subtitle1'}>
            Rate yourself:
          </Typography>
          <Typography variant={'body2'}>
            <RadioGroupDemo name={'aasd'} options={radioOptions} />
          </Typography>
          <div className={s.button}>
            <Button onClick={() => Navigate({ to: './login' })}>Next Question</Button>
          </div>
        </div>
      )}
    </Card>
  )
}
