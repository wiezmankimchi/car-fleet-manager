import { useTranslation } from 'react-i18next'
import type { EditCompanyById, UpdateCompanyInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  HiddenField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormCompany = NonNullable<EditCompanyById['company']>

interface CompanyFormProps {
  company?: EditCompanyById['company']
  onSave: (data: UpdateCompanyInput, id?: FormCompany['id']) => void
  error: RWGqlError
  loading: boolean
}

const CompanyForm = (props: CompanyFormProps) => {
  const { t, i18n } = useTranslation()
  const { currentUser } = useAuth()

  const onSubmit = (data: FormCompany) => {
    data.updateAt = new Date().toISOString()
    data.updatedBy = currentUser?.id
    data.createdBy = props?.company?.createdBy || currentUser?.id
    props.onSave(data, props?.company?.id)
  }

  document.body.dir = i18n.dir()

  return (
    <div className="rw-form-wrapper">
      <Form<FormCompany> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.company?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="address1"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Address')} 1
        </Label>

        <TextField
          name="address1"
          defaultValue={props.company?.address1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="address1" className="rw-field-error" />

        <Label
          name="address2"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Address')} 2
        </Label>

        <TextField
          name="address2"
          defaultValue={props.company?.address2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="address2" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('City')}
        </Label>

        <TextField
          name="city"
          defaultValue={props.company?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="zipcode"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Zipcode')}
        </Label>

        <TextField
          name="zipcode"
          defaultValue={props.company?.zipcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="zipcode" className="rw-field-error" />

        <Label
          name="country"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          {t('Country')}
        </Label>

        <TextField
          name="country"
          defaultValue={props.company?.country}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="country" className="rw-field-error" />

        {/*
        <Label
          name="updateAt"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          Update at
        </Label>
        */}

        {/*
        <FieldError name="updateAt" className="rw-field-error" /> */}

        {/* <Label
          name="createdBy"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          Created by
        </Label>

        <NumberField
          name="createdBy"
          defaultValue={currentUser?.id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="createdBy" className="rw-field-error" /> */}

        {/*
        <Label
          name="updatedBy"
          className="rw-label rtl:text-right"
          errorClassName="rw-label rw-label-error"
        >
          Updated by
        </Label>

        <NumberField
          name="updatedBy"
          defaultValue={props.company?.updatedBy}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="updatedBy" className="rw-field-error" /> */}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {t('Save')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CompanyForm
