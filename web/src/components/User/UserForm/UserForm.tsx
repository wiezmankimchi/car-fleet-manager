import { useTranslation } from 'react-i18next'
import type { EditUserById, UpdateUserInput } from 'types/graphql'

// import { hashPassword } from '@redwoodjs/api'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const { t } = useTranslation()

  props?.user?.id
    ? console.log(`<><><> Edit User <><><> ${props.user.hashedPassword}`)
    : console.log(`<><><> New User <><><> `)

  const onSubmit = (data: FormUser) => {
    props?.user?.id
      ? console.log(`<><><> Edit User <><><> ${data.hashedPassword}`)
      : console.log(`<><><> New User <><><>`)
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Email')}
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="firstName"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('First Name')}
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.user?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Last Name')}
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.user?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="lastName" className="rw-field-error" />

        {/* <Label
          name="hashedPassword"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Password')}
        </Label>

        <PasswordField
          name="hashedPassword"
          defaultValue={props.user?.hashedPassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>

        <TextField
          name="salt"
          defaultValue={props.user?.salt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>

        <TextField
          name="resetToken"
          defaultValue={props.user?.resetToken}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>

        <DatetimeLocalField
          name="resetTokenExpiresAt"
          defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

        <Label
          name="webAuthnChallenge"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Web authn challenge
        </Label>

        <TextField
          name="webAuthnChallenge"
          defaultValue={props.user?.webAuthnChallenge}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="webAuthnChallenge" className="rw-field-error" />*/}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
