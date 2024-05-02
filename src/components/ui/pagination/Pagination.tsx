import { useState } from 'react'

import { SelectItem, SelectNew } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from './pagination.module.scss'

import arrow from './arrow_r.svg'

type PaginationPropsType = {
  onPageChange: (page: number | string) => void
  onPerPageChange: (value: string) => void
  perPageOptions: Array<string>
  totalPages: number
}

export const Pagination = ({ perPageOptions, totalPages, ...props }: PaginationPropsType) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  // const itemsPerPage: number = 0
  // const totalPages: number = 21

  const pagesArray: Array<any> = []

  if (totalPages < 8) {
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i)
    }
  } else {
    if (currentPage < 5) {
      for (let i = 1; i <= 5; i++) {
        pagesArray.push(i)
      }
      pagesArray.push('...', totalPages)
    } else if (currentPage >= 5 && totalPages - currentPage > 3) {
      pagesArray.push(1, '...')
      pagesArray.push(currentPage - 1, currentPage, currentPage + 1)
      pagesArray.push('...', totalPages)
    } else if (currentPage >= 5 && totalPages - currentPage <= 3) {
      pagesArray.push(1, '...')
      pagesArray.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    }
  }

  const onPerPageChangeHandler = (value: string) => {
    props.onPerPageChange(value)
  }

  return (
    <Typography variant={'body2'}>
      <div className={s.container}>
        <button
          className={s.arrow + ' ' + (currentPage == 1 ? s.disabled : s.active) + ' ' + s.left}
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage(prevState => prevState - 1)
            }
          }}
        >
          <img className={s.arrowImg} src={arrow} />
        </button>
        {pagesArray.map((p, index) => (
          <button
            className={
              p === '...' ? s.threeDots : s.digit + ' ' + (p === currentPage ? s.active : '')
            }
            key={index}
            onClick={() => {
              if (p !== '...') {
                setCurrentPage(p)
                props.onPageChange(p)
              }
            }}
          >
            {p}
          </button>
        ))}
        <div
          className={s.arrow + ' ' + (currentPage == totalPages ? s.disabled : s.active)}
          onClick={() => {
            if (currentPage + 1 <= totalPages) {
              setCurrentPage(prevState => prevState + 1)
              props.onPageChange(currentPage + 1)
            }
          }}
        ></div>
        <span className={s.showTxt}>Показать</span>
        <div className={s.select}>
          <SelectNew defaultValue={'10'} onChange={onPerPageChangeHandler} pagination>
            {perPageOptions.map((opt, index) => (
              <SelectItem key={index} pagination value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectNew>
        </div>
        <span className={s.showTxt}>на странице</span>
      </div>
    </Typography>
  )
}
