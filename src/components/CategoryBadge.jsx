
import React from 'react';
import { Badge } from '@/components/ui/badge';

const categoryColors = {
  'Quantum Computing': 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  'Quantum Physics': 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
  'Quantum Technology': 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
  'Quantum Research': 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
};

export default function CategoryBadge({ category, className = '' }) {
  const colorClass = categoryColors[category] || 'bg-muted text-muted-foreground';

  return (
    <Badge variant="outline" className={`${colorClass} ${className}`}>
      {category}
    </Badge>
  );
}
