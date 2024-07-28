import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AnimatePresence, motion } from 'framer-motion';

interface RHFTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function RHFTextField({ name, label, ...props }: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="space-y-2">
          <Label htmlFor={name}>{label}</Label>
          <Input id={name} {...field} {...props} />
          <AnimatePresence>
            {error && (
              <motion.p
                className="text-red-500 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {error.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}
    />
  );
}
