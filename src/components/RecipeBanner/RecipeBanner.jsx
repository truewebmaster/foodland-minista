import './RecipeBanner.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title, site, imgSrc } = props

  return (
    <a
      className={clsx('recipe-banner', className)}
      href="/"
      style={{'--recipeBannerImg': `url('${imgSrc}')` }}
    >
      <h3 className="recipe-banner__title h4">{title}</h3>
      <span className="recipe-banner__site">{site}</span>
    </a>
  )
}