
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import CategoryBadge from '@/components/CategoryBadge.jsx';
import { format } from 'date-fns';

export default function ArticleCard({ article, onClick }) {
  const formattedDate = format(new Date(article.publish_date), 'MMM dd, yyyy');

  return (
    <Card 
      className="h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {article.image_url && (
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <CategoryBadge category={article.category} />
          {article.featured && (
            <span className="text-xs font-medium text-primary">Featured.</span>
          )}
        </div>
        <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
        <div className="flex items-center gap-1">
          <User className="h-4 w-4" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
