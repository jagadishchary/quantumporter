
import Parser from 'rss-parser';
import PocketBase from 'pocketbase';

const parser = new Parser();
const PB_URL = process.env.PB_URL || 'http://127.0.0.1:8090';
const PB_EMAIL = process.env.PB_ADMIN_EMAIL;
const PB_PASSWORD = process.env.PB_ADMIN_PASSWORD;

async function updateNews() {
  const pb = new PocketBase(PB_URL);

  if (PB_EMAIL && PB_PASSWORD) {
    try {
      await pb.admins.authWithPassword(PB_EMAIL, PB_PASSWORD);
      console.log('Authenticated as admin');
    } catch (e) {
      console.warn('Authentication failed, proceeding as guest:', e.message);
    }
  } else {
    console.log('No admin credentials provided, proceeding as guest');
  }

  console.log('Fetching news from Phys.org...');
  try {
    const feed = await parser.parseURL('https://phys.org/rss-feed/physics-news/quantum-physics/');

    console.log(`Found ${feed.items.length} items in feed.`);

    for (const item of feed.items) {
      const { title, contentSnippet, pubDate, creator } = item;
      
      try {
        // Simple check for existence
        const existing = await pb.collection('news_articles').getList(1, 1, {
          filter: `title = "${title.replace(/"/g, '\\"')}"`
        });

        if (existing.totalItems > 0) {
          console.log(`Skipping existing article: ${title}`);
          continue;
        }

        const imageKeywords = ['quantum', 'physics', 'science', 'technology', 'microscope', 'abstract'];
        const randomKeyword = imageKeywords[Math.floor(Math.random() * imageKeywords.length)];
        
        const data = {
          title,
          excerpt: contentSnippet ? contentSnippet.substring(0, 250) + '...' : 'Latest update from the quantum frontier.',
          content: contentSnippet || title,
          category: 'Quantum Physics',
          author: creator || 'Phys.org',
          publish_date: new Date(pubDate).toISOString().split('T')[0],
          featured: false,
          image_url: `https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&sig=${Math.random()}`
        };

        await pb.collection('news_articles').create(data);
        console.log(`✅ Added: ${title}`);
      } catch (e) {
        console.error(`❌ Error processing article "${title}":`, e);
      }
    }
  } catch (error) {
    console.error('Error fetching RSS feed:', error.message);
  }
}

updateNews().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
