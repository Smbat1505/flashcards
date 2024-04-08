import s from './pagination.module.scss'


export const Pagination = () => {
  return (
    <div>
      <div className={`${s.arrow} ${s.disabled} ${s.left}`}></div>
      <div className={s.digit}>1</div>
      <div className={`${s.digit} ${s.active}`} tabIndex={0}>2</div>
      <div className={s.digit} tabIndex={0}>
        3
      </div>
      <div className={s.digit} tabIndex={0}>4</div>
      <div className={s.digit} tabIndex={0}>5</div>
      <div className={s.threeDots}>...</div>
      <div className={s.digit} tabIndex={0}>44</div>
      <div className={`${s.arrow} ${s.active}`}></div>
      <span className={s.showTxt}>Показать</span>
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
    </div>
  )
}
