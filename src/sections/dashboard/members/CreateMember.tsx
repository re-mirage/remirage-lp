'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  PlusIcon,
  UserIcon,
  MailIcon,
  LockIcon,
  BriefcaseIcon,
  TagIcon,
  FileTextIcon,
  DollarSignIcon,
  BriefcaseBusiness,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/buttons/button';
import { Role } from '@/types/team';
import { RHFTextField } from '@/components/RHF/RHFTextField';
import { Register } from '@/auth/actions/register';
import { MemberFormData, memberSchema } from '@/validations/createMember';

export default function CreateMember() {
  const [isOpen, setOpen] = useState(false);
  const methods = useForm<MemberFormData>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      first_name: '',
      last_name: '',
      role: Role.DEVELOPER,
      skills: [],
      bio: '',
      rate: 0,
    },
  });

  const onSubmit = async (data: MemberFormData) => {
    try {
      await Register(data);
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <PlusIcon className="mr-2 h-4 w-4" /> Add Member
      </Button>

      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] px-10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Add New Member</DialogTitle>
          </DialogHeader>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <RHFTextField
                  leftIcon={
                    <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  label="First Name"
                  id="first_name"
                  type="text"
                  className="pl-10"
                  name="first_name"
                />

                <RHFTextField
                  leftIcon={
                    <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  label="Last Name"
                  id="last_name"
                  type="text"
                  className="pl-10"
                  name="last_name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <RHFTextField
                  label="Email"
                  leftIcon={
                    <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  id="email"
                  type="email"
                  className="pl-10"
                  placeholder="john.doe@example.com"
                  name="email"
                />

                <RHFTextField
                  label="Position"
                  leftIcon={
                    <BriefcaseBusiness className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  id="position"
                  type="text"
                  className="pl-10"
                  placeholder="Senior Developer"
                  name="position"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <RHFTextField
                  label="Username"
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  name="username"
                />

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select onValueChange={(value) => methods.setValue('role', value as Role)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={Role.ADMIN}>Admin</SelectItem>
                      <SelectItem value={Role.DEVELOPER}>Developer</SelectItem>
                      <SelectItem value={Role.SUPPORT}>Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <RHFTextField
                  leftIcon={
                    <LockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  label="Password"
                  id="password"
                  type="password"
                  className="pl-10"
                  name="password"
                />

                <RHFTextField
                  leftIcon={
                    <LockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  label="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  className="pl-10"
                  name="confirmPassword"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <div className="relative">
                  <TagIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Textarea
                    id="skills"
                    {...methods.register('skills')}
                    className="pl-10"
                    placeholder="React, Node.js, TypeScript"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <div className="relative">
                  <FileTextIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Textarea
                    id="bio"
                    {...methods.register('bio')}
                    className="pl-10"
                    placeholder="A brief description about the member..."
                  />
                </div>
              </div>

              <RHFTextField
                leftIcon={
                  <LockIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                }
                label="Hourly Rate ($)"
                id="rate"
                type="number"
                className="pl-10"
                name="rate"
              />

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Member</Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
}
