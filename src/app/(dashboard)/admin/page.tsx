'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Bar, BarChart } from 'recharts';
import StatCard from '@/components/cards/StatCard';
import { ChartContainer, ChartConfig } from '@/components/ui/chart';

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          trend="from last month"
          trendValue="20.1%"
          trendDirection="up"
        />
        <StatCard
          title="Clients"
          value="323"
          icon={Users}
          trend="from last month"
          trendValue="5.1%"
          trendDirection="down"
        />
        <StatCard
          title="Projects"
          value="42"
          icon={BarChart}
          trend="from last month"
          trendValue="10.3%"
          trendDirection="up"
        />
        <StatCard
          title="Active Developers"
          value="13"
          icon={Users}
          trend="from last month"
          trendValue="12.5%"
          trendDirection="up"
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-">
            <BarChart accessibilityLayer data={chartData}>
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
