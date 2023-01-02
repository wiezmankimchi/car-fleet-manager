import { useTranslation } from 'react-i18next'
import type { EditCarModelById, UpdateCarModelInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCarModel = NonNullable<EditCarModelById['carModel']>

interface CarModelFormProps {
  carModel?: EditCarModelById['carModel']
  onSave: (data: UpdateCarModelInput, id?: FormCarModel['id']) => void
  error: RWGqlError
  loading: boolean
}

const CarModelForm = (props: CarModelFormProps) => {
  const { t, i18n } = useTranslation()
  const { currentUser } = useAuth()
  const onSubmit = (data: FormCarModel) => {
    props.onSave(data, props?.carModel?.id)
  }
  document.body.dir = i18n.dir()

  return (
    <div className="rw-form-wrapper">
      <Form<FormCarModel> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        {/* <Label name="CurrentUser" className="rw-label">
          Current Logged In User ID - {currentUser.id}
        </Label> */}
        <Label
          name="name"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Name')}
        </Label>

        <TextField
          name="name"
          defaultValue={props.carModel?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CarModelForm
