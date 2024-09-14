'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import Container from '@/layouts/home/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/buttons/button';
import { Textarea } from '@/components/ui/textarea';
import PageHeading from '@/components/PageHeading';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FaGgCircle } from 'react-icons/fa';
const contactUs = async (prevState: any, formData: FormData) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Here you would typically send the data to your API
  const data = Object.fromEntries(formData);
  if (Math.random() > 0.5) {
    return { success: true, message: 'Message sent successfully!' };
  } else {
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <FaGgCircle className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(contactUs, null);

  return (
    <Container className="py-16 px-6 md:px-10 lg:px-12">
      <PageHeading>Get in touch</PageHeading>
      <div className="w-full">
        <Card className="max-w-screen-lg mx-auto pt-8">
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="First Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Last Name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
              </div>
              <SubmitButton />
            </form>
            {state && (
              <Alert className={`mt-4 ${state.success ? 'bg-green-600' : 'bg-red-600'}`}>
                <AlertTitle>{state.success ? 'Success!' : 'Error'}</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}