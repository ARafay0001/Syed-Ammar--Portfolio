import Styles from './Button.module.css'
const Button = (props) => {
  return (
    <a className={Styles.button}  href={props.href} download={props.download ? true : false}>
      {props.text}
     
    </a>
  )
}

export default Button
