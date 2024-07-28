import React from 'react';
import Container from '@/layout/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/buttons/button';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <Container>
      <div className="py-12 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <Card className="max-w-screen-lg mx-auto">
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input type="email" placeholder="Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message" rows={5} />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
