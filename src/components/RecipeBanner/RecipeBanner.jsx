import './RecipeBanner.scss'
import clsx from 'clsx'

export default (props) => {
  const {className} = props

  return (
    <div
      className={clsx('recipe-banner', className)}
    >
      RecipeBanner
    </div>
  )
}