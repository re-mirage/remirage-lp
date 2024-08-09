'use client';
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/buttons/button';
import { RHFTextField } from '@/components/RHF/RHFTextField';
import login from '@/auth/actions/login';
import FormProvider from '@/components/RHF/FormProvider';

const loginSchema = z.object({
  email: z.string().min(1, 'email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
});

type FormData = z.infer<typeof loginSchema>;

export default function LoginView() {
  const methods = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'demo@demo.com',
      password: 'demo',
    },
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      const result = await login({
        email: data.email,
        password: data.password,
      });
      if (result && 'error' in result) {
        setError('root.serverError', {
          type: 'server',
          message: result.error,
        });
      }
    } catch (error: any) {
      setError('root.serverError', {
        type: 'server',
        message: error.message,
      });
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <div className="space-y-6">
        <RHFTextField name="email" label="Email" type="email" />
        <RHFTextField name="password" label="Password" type="password" />
        <Button type="submit" className="w-full" disabled={methods.formState.isSubmitting}>
          {methods.formState.isSubmitting ? 'Logging in...' : 'Log In'}
        </Button>
        {methods.formState.errors.root?.serverError && (
          <p className="text-red-500 text-sm">
            {methods.formState.errors.root.serverError.message}
          </p>
        )}
      </div>
    </FormProvider>
  );
}
