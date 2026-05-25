
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import ArticleModal from '@/components/ArticleModal.jsx';
import SearchBar from '@/components/SearchBar.jsx';
import FilterPanel from '@/components/FilterPanel.jsx';
import SEO from '@/components/SEO.jsx';
import { useArticles } from '@/hooks/useArticles.js';
import { Skeleton } from '@/components/ui/skeleton';

export default function ArchivesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const { articles, loading } = useArticles({
    searchQuery,
    category: selectedCategory === 'all' ? null : selectedCategory,
    startDate: startDate || null,
    endDate: endDate || null,
    sortBy: '-publish_date'
  });

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setStartDate('');
    setEndDate('');
    setSearchQuery('');
  };

  return (
    <>
      <SEO 
        title="Archives"
        description="Browse and search through our archive of quantum science and technology articles."
      />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Archives</h1>
                <p className="text-muted-foreground">
                  Search and filter through our collection of articles
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <aside className="lg:col-span-1">
                  <div className="sticky top-20 space-y-6">
                    <SearchBar
                      value={searchQuery}
                      onChange={setSearchQuery}
                      placeholder="Search articles..."
                    />

                    <FilterPanel
                      selectedCategory={selectedCategory}
                      onCategoryChange={(value) => setSelectedCategory(value === 'all' ? null : value)}
                      startDate={startDate}
                      onStartDateChange={setStartDate}
                      endDate={endDate}
                      onEndDateChange={setEndDate}
                      onClearFilters={handleClearFilters}
                    />
                  </div>
                </aside>

                <div className="lg:col-span-3">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">
                      {loading ? 'Searching...' : `${articles.length} article${articles.length !== 1 ? 's' : ''} found`}
                    </p>
                  </div>

                  {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-4">
                          <Skeleton className="h-48 w-full rounded-xl" />
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      ))}
                    </div>
                  ) : articles.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {articles.map((article, index) => (
                        <motion.div
                          key={article.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <ArticleCard
                            article={article}
                            onClick={() => setSelectedArticle(article)}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="text-center py-20 bg-muted/30 rounded-xl">
                      <p className="text-muted-foreground text-lg mb-2">No articles found</p>
                      <p className="text-sm text-muted-foreground">
                        Try adjusting your search or filters
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ArticleModal
        article={selectedArticle}
        open={!!selectedArticle}
        onOpenChange={(open) => !open && setSelectedArticle(null)}
      />
    </>
  );
}
