import RegisterCard from '../../src/components/card/registercard'
import styles from '../../styles/Register.module.css'

export default function Register() {
  return (
    <>
      <div className={styles.background}>
        <RegisterCard title="Registre-se agora!">
          teste
        </RegisterCard>
      </div>
    </>
  )
}