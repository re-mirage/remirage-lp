'use client';
import React from 'react';
import LoginView from '@/sections/auth/login-view';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <LoginView />
    </div>
  );
}
