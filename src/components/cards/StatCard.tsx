import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface StatCardProps {
  title: string;
  value: string;
  icon: any;
  trend: string;
  trendValue: string;
  trendDirection: 'up' | 'down';
}
export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  trendDirection,
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center">
          {trendDirection === 'up' ? (
            <ArrowUpRight className="inline mr-1 text-green-500" />
          ) : (
            <ArrowDownRight className="inline mr-1 text-red-500" />
          )}
          <span className={trendDirection === 'up' ? 'text-green-500' : 'text-red-500'}>
            {trendValue}
          </span>
          <span className="ml-1">{trend}</span>
        </p>
      </CardContent>
    </Card>
  );
}
