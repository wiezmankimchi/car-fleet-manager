import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUserCompanyById, UpdateUserCompanyInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'



const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


type FormUserCompany = NonNullable<EditUserCompanyById['userCompany']>

interface UserCompanyFormProps {
  userCompany?: EditUserCompanyById['userCompany']
  onSave: (data: UpdateUserCompanyInput, id?: FormUserCompany['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserCompanyForm = (props: UserCompanyFormProps) => {
  const onSubmit = (data: FormUserCompany) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.userCompany?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUserCompany> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="companyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company id
        </Label>
        
          <NumberField
            name="companyId"
            defaultValue={props.userCompany?.companyId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="companyId" className="rw-field-error" />

        <Label
          name="updateAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Update at
        </Label>
        
          <DatetimeLocalField
            name="updateAt"
            defaultValue={formatDatetime(props.userCompany?.updateAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="updateAt" className="rw-field-error" />

        <Label
          name="createdBy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by
        </Label>
        
          <NumberField
            name="createdBy"
            defaultValue={props.userCompany?.createdBy}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="createdBy" className="rw-field-error" />

        <Label
          name="updatedBy"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated by
        </Label>
        
          <NumberField
            name="updatedBy"
            defaultValue={props.userCompany?.updatedBy}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="updatedBy" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserCompanyForm
