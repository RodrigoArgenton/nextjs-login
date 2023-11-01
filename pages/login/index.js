import LoginCard from "../../src/components/card/loginCard";
import styles from "../../styles/Login.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.background}>
        <LoginCard title="Crie a sua conta!">
          testando
        </LoginCard>
      </div>
    </>
  )
}