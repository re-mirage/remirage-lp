'use client';

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
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
  UploadIcon,
  XIcon,
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
import { uploadAvatar } from '@/auth/actions/uploadAvatar';

export default function CreateMember() {
  const [isOpen, setOpen] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [skillInput, setSkillInput] = useState('');

  const methods = useForm<MemberFormData>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: Role.DEVELOPER,
      skills: [],
      bio: '',
      rate: '0',
      avatar_url: '',
      position: '',
    },
  });

  const { control, setValue, watch } = methods;

  const onSubmit = async (data: MemberFormData) => {
    console.log('Submitting data:', data);
    try {
      let avatarUrl = '';
      if (avatarFile) {
        avatarUrl = await uploadAvatar(avatarFile);
      }
      await Register({ ...data, avatar_url: avatarUrl });
      setOpen(false);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const skills = watch('skills');

  const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  const handleSkillInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addSkill();
    }
  };

  const addSkill = () => {
    const trimmedSkill = skillInput.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setValue('skills', [...skills, trimmedSkill]);
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setValue(
      'skills',
      skills.filter((skill) => skill !== skillToRemove)
    );
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
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Input
                    id="avatar"
                    type="file"
                    onChange={handleAvatarChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <Label
                    htmlFor="avatar"
                    className="cursor-pointer flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {avatarFile ? (
                      <Image
                        width={96}
                        height={96}
                        src={URL.createObjectURL(avatarFile)}
                        alt="Avatar preview"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <UploadIcon className="h-8 w-8 text-gray-400" />
                    )}
                  </Label>
                  <span className="text-sm text-gray-500">
                    {avatarFile ? avatarFile.name : 'Upload an avatar'}
                  </span>
                </div>
              </div>

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
                  label="Username"
                  leftIcon={
                    <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  id="username"
                  type="text"
                  className="pl-10"
                  placeholder="johndoe"
                  name="username"
                />
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

              <div className="grid grid-cols-2 gap-4">
                <RHFTextField
                  label="Position"
                  leftIcon={
                    <BriefcaseIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  }
                  id="position"
                  type="text"
                  className="pl-10"
                  placeholder="Senior Developer"
                  name="position"
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

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <div className="relative">
                  <TagIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="skills"
                    value={skillInput}
                    onChange={handleSkillInputChange}
                    onKeyDown={handleSkillInputKeyDown}
                    className="pl-10"
                    placeholder="Add skills (press Enter or comma to add)"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        <XIcon className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
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
                  <DollarSignIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
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
                <Button type="submit" onClick={methods.handleSubmit(onSubmit)}>
                  Save Member
                </Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
}
