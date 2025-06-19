import Container from "@/components/container"
import RegisterForm from "@/components/register-form"
import { SITE_NAME } from "@/lib/constants"

export default function RegisterPage() {
  return (
    <Container>
      <h1 className="font-bold text-4xl">Register</h1>
      <p>Welcome new player to {SITE_NAME}</p>
      <RegisterForm />
    </Container>
  )
}
