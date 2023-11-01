import Link from "next/link";
import Button from "../../src/components/button/button";
import LoginCard from "../../src/components/card/loginCard";
import Input from "../../src/components/input/input";
import styles from "../../styles/Login.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.background}>
        <LoginCard title="Crie a sua conta!">
          <form className={styles.form}>
            <Input type='email' placeholder='Seu e-mail'/>
            <Input type='password' placeholder='Senha'/>
            <Button>Entrar</Button>
            <Link href="/register">Ainda não tem conta?</Link>
          </form>
        </LoginCard>
      </div>
    </>
  )
}