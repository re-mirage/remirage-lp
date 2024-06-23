import { Button } from '@/components/buttons/button';
import SectionContainer from '@/components/containers/SectionContainer';
import Stack from '@/components/containers/Stack';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function ML() {
  return (
    <SectionContainer>
      <Button>AI Features</Button>
      <h2 className="text-3xl font-sm text-center py-8">Integrating Machine Learning into Apps</h2>

      <Stack direction="row" spacing={8} className="px-10" justifyContent="space-around">
        <Card className="w-1/2 bg-gradient-to-br from-purple-700 to-violet-900">
          <CardHeader>
            <CardTitle>Create your own app</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              Transform your vision into reality with our bespoke app development service, where
              versatility meets innovation to cater to all your needs.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="w-1/2 bg-gradient-to-br from-purple-700 to-violet-900">
          <CardHeader>
            <CardTitle>Turn your mind into reality</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              With just a few words in your head, you can create your dreams.
            </CardDescription>
          </CardContent>
        </Card>
      </Stack>
    </SectionContainer>
  );
}
