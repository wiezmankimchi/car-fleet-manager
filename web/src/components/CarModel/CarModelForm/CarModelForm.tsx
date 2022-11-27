import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCarModelById, UpdateCarModelInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'



const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


type FormCarModel = NonNullable<EditCarModelById['carModel']>

interface CarModelFormProps {
  carModel?: EditCarModelById['carModel']
  onSave: (data: UpdateCarModelInput, id?: FormCarModel['id']) => void
  error: RWGqlError
  loading: boolean
}

const CarModelForm = (props: CarModelFormProps) => {
  const onSubmit = (data: FormCarModel) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.carModel?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCarModel> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.carModel?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="updateAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Update at
        </Label>
        
          <DatetimeLocalField
            name="updateAt"
            defaultValue={formatDatetime(props.carModel?.updateAt)}
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
            defaultValue={props.carModel?.createdBy}
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
            defaultValue={props.carModel?.updatedBy}
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

export default CarModelForm
