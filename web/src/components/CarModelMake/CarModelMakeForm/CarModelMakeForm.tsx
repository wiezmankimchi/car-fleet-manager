import { useTranslation } from 'react-i18next'
import type {
  EditCarModelMakeById,
  UpdateCarModelMakeInput,
} from 'types/graphql'

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

import CarModelsLOVCell from 'src/components/CarModel/CarModelsLOVCell'

type FormCarModelMake = NonNullable<EditCarModelMakeById['carModelMake']>

interface CarModelMakeFormProps {
  carModelMake?: EditCarModelMakeById['carModelMake']
  onSave: (data: UpdateCarModelMakeInput, id?: FormCarModelMake['id']) => void
  error: RWGqlError
  loading: boolean
}

const CarModelMakeForm = (props: CarModelMakeFormProps) => {
  const { t, i18n } = useTranslation()
  const { currentUser } = useAuth()
  const onSubmit = (data: FormCarModelMake) => {
    data.createdBy = currentUser.id
    data.carMakeId = parseInt(data.carMakeId)
    props.onSave(data, props?.carModelMake?.id)
  }

  document.body.dir = i18n.dir()
  return (
    <div className="rw-form-wrapper">
      <Form<FormCarModelMake> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="brand"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Car Brand')}
        </Label>

        <CarModelsLOVCell selected={props.carModelMake?.carMakeId} />

        <Label
          name="name"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Name')}
        </Label>

        <TextField
          name="name"
          defaultValue={props.carModelMake?.name}
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

export default CarModelMakeForm
