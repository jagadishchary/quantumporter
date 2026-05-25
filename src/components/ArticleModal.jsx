
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, User } from 'lucide-react';
import CategoryBadge from '@/components/CategoryBadge.jsx';
import { format } from 'date-fns';

export default function ArticleModal({ article, open, onOpenChange }) {
  if (!article) return null;

  const formattedDate = format(new Date(article.publish_date), 'MMMM dd, yyyy');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold leading-tight pr-8">
            {article.title}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-8rem)]">
          <div className="space-y-6 pr-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <CategoryBadge category={article.category} />
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            </div>

            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full rounded-xl object-cover max-h-96"
              />
            )}

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-6 whitespace-pre-wrap text-foreground leading-relaxed">
                {article.content}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
