import { yupResolver } from '@hookform/resolvers/yup'
import React, { PropsWithChildren } from 'react'
import { FieldErrors, FieldValues, FormProvider, useForm, UseFormProps } from 'react-hook-form'
import { AnyObjectSchema } from 'yup'

import styles from './styles.module.scss'

export type FromPropsType = UseFormProps & {
  onSubmit?(values: FieldValues): void
  onError?(values: FieldErrors): void
  validationSchema?: AnyObjectSchema
  id?: string
}

const Form = ({
  defaultValues,
  validationSchema,
  children,
  onSubmit = () => {},
  onError,
  id,
}: PropsWithChildren<FromPropsType>) => {
  const methods = useForm<FieldValues>({
    resolver: validationSchema && yupResolver(validationSchema),

    defaultValues,
    mode: 'all',
  })
  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit, onError)} className={styles.form}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
