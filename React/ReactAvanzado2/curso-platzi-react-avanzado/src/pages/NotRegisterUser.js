import React, { useContext } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const context = useContext(Context)

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(({ data }) => {
                        const { signup } = data
                        activateAuth(signup)
                      })
                    }

                    const errorMsg = error && 'El usuario ya existe o hay algun problema'

                    return <UserForm disabled={loading} onSubmit={onSubmit} title='Registrarse' error={errorMsg} />
                  }
                }
              </RegisterMutation>

              <LoginMutation>
                {
                  (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables }).then(({ data }) => {
                        const { login } = data
                        activateAuth(login)
                      })
                    }

                    const errorMsg = error && 'El correo o el password estan incorrectos'

                    return <UserForm onSubmit={onSubmit} title='Iniciar Sesion' error={errorMsg} disabled={loading} />
                  }
                }
              </LoginMutation>
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
