import { useTranslation } from 'react-i18next'
import type { EditDriverById, UpdateDriverInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DateField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import CompanyLOVCell from 'src/components/Company/CompanyLOVCell'
import { timeTag } from 'src/lib/formatters'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormDriver = NonNullable<EditDriverById['driver']>

interface DriverFormProps {
  driver?: EditDriverById['driver']
  onSave: (data: UpdateDriverInput, id?: FormDriver['id']) => void
  error: RWGqlError
  loading: boolean
}

const DriverForm = (props: DriverFormProps) => {
  const { t, i18n } = useTranslation()
  const { currentUser } = useAuth()
  const onSubmit = (data: FormDriver) => {
    data.createdBy = currentUser.id
    data.companyId = parseInt(data.companyId)
    props.onSave(data, props?.driver?.id)
  }

  document.body.dir = i18n.dir()

  return (
    <div className="rw-form-wrapper">
      <Form<FormDriver> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Name')}
        </Label>

        <TextField
          name="name"
          defaultValue={props.driver?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Email')}
        </Label>

        <TextField
          name="email"
          defaultValue={props.driver?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Phone')}
        </Label>

        <TextField
          name="phone"
          defaultValue={props.driver?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="dob"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('DOB')}
        </Label>

        <DateField
          name="dob"
          defaultValue={formatDatetime(props.driver?.dob)}
          pattern="\d{4}-\d{2}-\d{2}"
          min="2017-06-01T08:30"
          max="2017-06-30T16:30"
          // defaultValue={timeTag(props.driver?.dob)}
          className="rw-input rtl:text-right"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dob" className="rw-field-error" />

        <Label
          name="registrationNumber"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Reg. Number')}
        </Label>

        <TextField
          name="registrationNumber"
          defaultValue={props.driver?.registrationNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registrationNumber" className="rw-field-error" />

        <Label
          name="registrationEndDate"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Reg. End Date')}
        </Label>

        <DateField
          name="registrationEndDate"
          defaultValue={props.driver?.registrationEndDate}
          className="rw-input rtl:text-right"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registrationEndDate" className="rw-field-error" />

        <Label
          name="registrationImageURL"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Reg. Image')}
        </Label>

        <TextField
          name="registrationImageURL"
          defaultValue={props.driver?.registrationImageURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registrationImageURL" className="rw-field-error" />

        <Label
          name="companyId"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Company')}
        </Label>
        <CompanyLOVCell selected={props.driver?.companyId} />
        {/* <NumberField
          name="companyId"
          defaultValue={props.driver?.companyId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        /> */}

        <FieldError name="companyId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DriverForm
