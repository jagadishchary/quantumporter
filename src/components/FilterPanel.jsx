
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const categories = [
  'Quantum Computing',
  'Quantum Physics',
  'Quantum Technology',
  'Quantum Research'
];

export default function FilterPanel({ 
  selectedCategory, 
  onCategoryChange, 
  startDate, 
  onStartDateChange, 
  endDate, 
  onEndDateChange,
  onClearFilters 
}) {
  const hasActiveFilters = selectedCategory || startDate || endDate;

  return (
    <div className="bg-card border rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Filters</h3>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            className="h-8 px-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="category" className="text-sm font-medium mb-2 block">
            Category
          </Label>
          <Select value={selectedCategory || ''} onValueChange={onCategoryChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="start-date" className="text-sm font-medium mb-2 block">
            Start date
          </Label>
          <Input
            id="start-date"
            type="date"
            value={startDate || ''}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="end-date" className="text-sm font-medium mb-2 block">
            End date
          </Label>
          <Input
            id="end-date"
            type="date"
            value={endDate || ''}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
