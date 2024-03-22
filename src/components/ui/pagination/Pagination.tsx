import s from './pagination.module.scss'

export const Pagination = () => {
  return (
    <div>
      <div className={`${s.arrow} ${s.gray} ${s.left}`}></div>
      <div className={`${s.arrow} ${s.light}`}></div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
    </div>
  )
}
