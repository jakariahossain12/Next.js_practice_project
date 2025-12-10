import { signUPSchema } from '@/app/schemas/auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function SignUp() {
    const form = useForm({
        resolver:zodResolver(signUPSchema),
        defaultValues:{
            email:"",
            name:"",
            password:"",

        },
    });
  return (
    <Card>
        <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Carate an account to get started</CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <FieldGroup>
                    <Controller name='name' control={form.control} render={({field,fieldState})=>{
                        <Field>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input placeholder='jon bon' {...field}/>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]}/>
                            )}
                        </Field>
                    }}

                    />
                </FieldGroup>

            </form>
        </CardContent>
    </Card>
  )
}
