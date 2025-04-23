import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CalendarIcon, Clock } from 'lucide-react';
import type { Writing } from '@/types';
import Link from 'next/link';

interface WritingCardProps {
  writing: Writing;
}

export function WritingCard({ writing }: WritingCardProps) {
  return (
    <Link href={writing.documentUrl} target="_blank">
      <Card className="group h-full cursor-pointer transition-all hover:border-primary">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="capitalize">
              {writing.category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>{writing.date}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{writing.readTime}</span>
            </div>
          </div>
          <CardTitle className="group-hover:text-primary">{writing.title}</CardTitle>
          <CardDescription>{writing.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {writing.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 