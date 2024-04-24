import { useState } from 'react'

import { SelectItem, SelectNew } from '@/components/ui/select'

import s from './pagination.module.scss'

export const Pagination = () => {
  const [currentPage, setCurentPage] = useState<number>(1)
  const itemsPerPage: number = 0
  const totalPages: number = 21

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
  console.log(pagesArray)
  const onChangeHandler = (value: string) => {
    console.log(value)
  }

  return (
    <div>
      <div style={{ padding: '50px 0px' }}>
        <div
          className={s.arrow + ' ' + (currentPage == 1 ? s.disabled : s.active) + ' ' + s.left}
          onClick={() => setCurentPage(prevState => prevState - 1)}
        ></div>
        {pagesArray.map((p, index) => (
          <div
            className={
              p === '...' ? s.threeDots : s.digit + ' ' + (p === currentPage ? s.active : '')
            }
            key={index}
            onClick={() => setCurentPage(p)}
          >
            {p}
          </div>
        ))}
        <div
          className={s.arrow + ' ' + (currentPage == totalPages ? s.disabled : s.active)}
          onClick={() => setCurentPage(prevState => prevState + 1)}
        ></div>
      </div>
      <div className={`${s.arrow} ${s.active} `}></div>

      <div className={s.digit}>1</div>
      <div className={`${s.digit} ${s.active}`} tabIndex={0}>
        2
      </div>
      <div className={s.digit} tabIndex={0}>
        3
      </div>
      <div className={s.digit} tabIndex={0}>
        4
      </div>
      <div className={s.digit} tabIndex={0}>
        5
      </div>
      <div className={s.threeDots}>...</div>
      <div className={s.digit} tabIndex={0}>
        44
      </div>
      <div className={`${s.arrow} ${s.active}`}></div>
      <span className={s.showTxt}>Показать</span>
      <div className={s.select}>
        <SelectNew defaultValue={'10'} onChange={onChangeHandler}>
          <SelectItem value={'10'}>10</SelectItem>
          <SelectItem value={'20'}>20</SelectItem>
          <SelectItem value={'30'}>30</SelectItem>
          <SelectItem value={'50'}>50</SelectItem>
          <SelectItem value={'100'}>100</SelectItem>
        </SelectNew>
      </div>
      <span className={s.showTxt}>на странице</span>
    </div>
  )
}
