import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ArrowBackOutline from '@/assets/icons/components/ArrowBackOutline'
import { SvgWrapper } from '@/assets/icons/wrapper'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/ui/header'
import { RadioGroupDemo } from '@/components/ui/radiogroup'
import { Typography } from '@/components/ui/typography'
import { useAuthMeQuery } from '@/services/auth/auth.service'
import { useGetDeckByIdQuery, useRetrieveRandomCardQuery } from '@/services/base-api'

import s from './learnDeckPage.module.scss'

export const LearnDeckPage = () => {
  const { deckId, previousCardId } = useParams()

  const { data } = useRetrieveRandomCardQuery({ deckId, previousCardId })
  const meResponse = useAuthMeQuery()
  const { currentData } = useGetDeckByIdQuery(deckId)

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
    <>
      <Header isAuthenticated={!meResponse.isUninitialized} userInfo={meResponse.data} />
      <div className={s.container}>
        <div className={s.backLinkTxtWrapper}>
          <SvgWrapper
            SvgComponent={ArrowBackOutline}
            color={'white'}
            size={'16'}
            wrapperClassName={s.arrowSpan}
          />
          <div>
            <Typography as={'a'} className={s.backLinkTxt} href={'../../../'} variant={'body2'}>
              Back to Decks List
            </Typography>
          </div>
        </div>
        <Card>
          <Typography as={'h1'} className={s.title} variant={'h1'}>
            Learn &quot;{currentData?.name}&quot;
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
                <Link to={`../cards/learn/${deckId}/${data?.id}`}>
                  <Button onClick={() => setShowAnswer(false)}>Next Question</Button>
                </Link>
              </div>
            </div>
          )}
        </Card>
      </div>
    </>
  )
}
