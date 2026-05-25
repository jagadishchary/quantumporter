
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import ArticleModal from '@/components/ArticleModal.jsx';
import NewArticleForm from '@/components/NewArticleForm.jsx';
import { useArticles } from '@/hooks/useArticles.js';
import { Skeleton } from '@/components/ui/skeleton';
import pb from '@/lib/pocketbaseClient.js';

export default function NewsFeedPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { articles, loading } = useArticles({ sortBy: '-publish_date' });
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showNewArticleForm, setShowNewArticleForm] = useState(false);
  const isAuthenticated = pb.authStore.isValid;

  const handleArticleCreated = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <>
      <Helmet>
        <title>News Feed - Quantumporter</title>
        <meta name="description" content="Browse the latest quantum science and technology news articles on Quantumporter." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">News feed</h1>
                  <p className="text-muted-foreground">
                    Latest articles from the quantum world
                  </p>
                </div>

                {isAuthenticated && (
                  <Button
                    onClick={() => setShowNewArticleForm(true)}
                    className="transition-all duration-200 active:scale-[0.98]"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Post new article
                  </Button>
                )}
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
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
                  key={refreshKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg mb-4">No articles published yet.</p>
                  {isAuthenticated && (
                    <Button
                      onClick={() => setShowNewArticleForm(true)}
                      className="transition-all duration-200 active:scale-[0.98]"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Publish the first article
                    </Button>
                  )}
                </div>
              )}
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

      <NewArticleForm
        open={showNewArticleForm}
        onOpenChange={setShowNewArticleForm}
        onSuccess={handleArticleCreated}
      />
    </>
  );
}
