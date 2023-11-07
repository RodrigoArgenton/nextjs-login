import RegisterCard from '../../src/components/card/registercard'
import styles from '../../styles/Register.module.css'
import Input from '../../src/components/input/input'
import Button from '../../src/components/button/button'
import Link from 'next/link'

export default function Register() {
  return (
    <>
      <div className={styles.background}>
        <RegisterCard title="Registre-se agora!">
          <form className={styles.form}>
            <Input type='name' placeholder='Seu nome'/>
            <Input type='email' placeholder='Seu e-mail'/>
            <Input type='password' placeholder='Senha'/>
            <Button>Cadastrar</Button>
            <Link href="/login">Ja possui uma conta?</Link>
          </form>
        </RegisterCard>
      </div>
    </>
  )
}