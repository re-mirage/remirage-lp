import React from 'react';
import Container from '@/layouts/home/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/buttons/button';
import { Textarea } from '@/components/ui/textarea';
import PageHeading from '@/components/PageHeading';

export default function Contact() {
  return (
    <Container className="py-16 px-6 md:px:10 lg:px-12">
      <PageHeading>Contact Us</PageHeading>
      <div className=" w-full">
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
