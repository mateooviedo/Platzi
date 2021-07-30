import React from 'react'
import { useInputValue } from '../../hooks/UseInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleOnSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' value={email.value} onChange={email.handleOnChange} />
        <Input disabled={disabled} placeholder='Password' type='password' value={password.value} onChange={password.handleOnChange} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
