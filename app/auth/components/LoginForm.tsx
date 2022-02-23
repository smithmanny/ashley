import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"

import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

import Layout from "app/core/layouts/Layout"
import Typography from "app/core/components/shared/Typography"
import Form, { FORM_ERROR, TextField } from "app/core/components/form"
import Container from "app/core/components/shared/Container"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  return (
    <Layout title="Log in">
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <Form
          submitText="Login"
          schema={Login}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              const user = await loginMutation(values)
              props.onSuccess?.(user)
            } catch (error: any) {
              if (error instanceof AuthenticationError) {
                return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
              } else {
                return {
                  [FORM_ERROR]:
                    "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                }
              }
            }
          }}
        >
          <TextField name="email" label="Email" placeholder="Email" />
          <TextField name="password" label="Password" placeholder="Password" type="password" />
          <div>
            <Link href={Routes.ForgotPasswordPage()}>
              <a>Forgot your password?</a>
            </Link>
          </div>
        </Form>
      </Container>
    </Layout>
  )
}

export default LoginForm
