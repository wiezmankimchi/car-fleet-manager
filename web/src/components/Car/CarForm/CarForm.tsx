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

import type { EditCarById, UpdateCarInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'



const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


type FormCar = NonNullable<EditCarById['car']>

interface CarFormProps {
  car?: EditCarById['car']
  onSave: (data: UpdateCarInput, id?: FormCar['id']) => void
  error: RWGqlError
  loading: boolean
}

const CarForm = (props: CarFormProps) => {
  const onSubmit = (data: FormCar) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.car?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCar> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="registrtion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Registrtion
        </Label>
        
          <TextField
            name="registrtion"
            defaultValue={props.car?.registrtion}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="registrtion" className="rw-field-error" />

        <Label
          name="regDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reg date
        </Label>
        
          <DatetimeLocalField
            name="regDate"
            defaultValue={formatDatetime(props.car?.regDate)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="regDate" className="rw-field-error" />

        <Label
          name="makeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Make id
        </Label>
        
          <NumberField
            name="makeId"
            defaultValue={props.car?.makeId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="makeId" className="rw-field-error" />

        <Label
          name="driverId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Driver id
        </Label>
        
          <NumberField
            name="driverId"
            defaultValue={props.car?.driverId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="driverId" className="rw-field-error" />

        <Label
          name="companyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company id
        </Label>
        
          <NumberField
            name="companyId"
            defaultValue={props.car?.companyId}
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
            defaultValue={formatDatetime(props.car?.updateAt)}
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
            defaultValue={props.car?.createdBy}
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
            defaultValue={props.car?.updatedBy}
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

export default CarForm
