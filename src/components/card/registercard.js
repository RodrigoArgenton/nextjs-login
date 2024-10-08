import styles from './registerCard.module.css'
export default function RegisterCard({title, children}){
  return(
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </>
  )
}