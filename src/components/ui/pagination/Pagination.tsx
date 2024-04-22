import s from './pagination.module.scss'

import { SelectItem, SelectNew } from "@/components/ui/select";

export const Pagination = () => {

  const currentPage: number = 0;
  const itemsPerPage: number = 0;
  const totalPages: number = 44;

  const pagesArray: Array<any> = []

  if (totalPages < 8) {
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i)
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      pagesArray.push(i)
    }
    pagesArray.push('...', totalPages)
  }
  console.log(pagesArray)
  const onChangeHandler = (value: string) => {
    console.log(value)
  }

  return (
    <div>
      <div style={{ padding: '50px 0px' }}>
        {pagesArray.map((p, index) => (
          <div className={s.digit} key={index}>
            {p}
          </div>
        ))}
      </div>

      <div className={`${s.arrow} ${s.disabled} ${s.left}`}></div>
      

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
        <SelectNew onChange={onChangeHandler} defaultValue={'10'}>
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
