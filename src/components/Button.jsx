import Styles from './Button.module.css'
const Button = (props) => {
  return (
    <div className={Styles.button}>
      {props.text}
    </div>
  )
}

export default Button
