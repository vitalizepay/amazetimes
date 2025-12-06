# AmazeTimes - அமேஸு டைம்ஸ்

## Tamil News Website

AmazeTimes is a modern, responsive Tamil news website dedicated to delivering authentic, timely news to Tamil-speaking audiences. The website covers multiple news categories including Tamil Nadu news, cinema, national news, politics, and sports.

### 🌐 Website: [amazetimes.in](https://amazetimes.in)

## Features

### 📰 News Categories
- **தமிழ்நாடு (Tamil Nadu)** - Local Tamil Nadu news and updates
- **சினிமா (Cinema)** - Tamil cinema and entertainment news
- **இந்தியா (India)** - National news from across India
- **அரசியல் (Politics)** - Political news and analysis
- **விளையாட்டு (Sports)** - Sports updates and coverage

### 🎯 Key Features
- **Breaking News Ticker** - Continuous scrolling breaking news at the top
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Tamil Language Support** - Full Tamil interface using Mukta Malar font
- **Search Functionality** - Search for news by keywords
- **Date/Time Display** - Real-time date and time in Tamil
- **News Categories** - Filter news by different categories
- **Interactive UI** - Smooth scrolling, hover effects, and animations
- **Mobile Friendly** - Touch-optimized interface for mobile users

### 🛠️ Technology Stack

**Frontend:**
- HTML5 - Semantic markup
- Tailwind CSS - Utility-first CSS framework
- Vanilla JavaScript - No dependencies
- Responsive Grid System

**Fonts:**
- [Mukta Malar](https://fonts.google.com/specimen/Mukta+Malar) - Tamil typography

**Icons & UI:**
- Lucide Icons - Modern icon library
- Placeholder.com - Placeholder images

### 📁 File Structure

```
amazetimes/
├── index.html          # Main HTML file with complete page structure
├── styles.css          # CSS styling (optional, complementary to Tailwind)
├── script.js           # JavaScript functionality and interactivity
├── CNAME               # Domain configuration for GitHub Pages
└── README.md           # This file
```

### 🚀 Getting Started

#### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vitalizepay/amazetimes.git
   cd amazetimes
   ```

2. **Open in a local server:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. **Open in browser:**
   - Navigate to `http://localhost:8000`

### 📱 Responsive Breakpoints

- **Desktop** - Full width with 3-column grid (1200px+)
- **Tablet** - 2-column grid (768px - 1199px)
- **Mobile** - Single column (below 768px)
- **Extra Small** - Optimized for phones (below 480px)

### 🎨 Color Scheme

| Section | Color | Hex Code |
|---------|-------|----------|
| Primary Brand | Red | #dc2626 |
| Dark | Dark Gray | #111827 |
| Text | Dark Gray | #333333 |
| Background | Light Gray | #f3f4f6 |
| Tamil Nadu Badge | Light Red | #fee2e2 |
| Cinema Badge | Light Pink | #fce7f3 |
| India Badge | Light Yellow | #fef3c7 |
| Politics Badge | Light Blue | #dbeafe |
| Sports Badge | Light Green | #dcfce7 |

### 🔧 JavaScript Functions

#### Core Functions

- `updateDateTime()` - Updates and displays current date/time in Tamil
- `searchNews(query)` - Searches for news articles
- `filterByCategory(category)` - Filters news by category
- `openNewsModal(news)` - Opens detailed news view in modal
- `createNewsCard(news)` - Creates a news card element
- `initializePage()` - Initializes all page functionality

### 📊 News Data Structure

```javascript
{
    id: 1,
    title: 'News Title in Tamil',
    category: 'tn|cinema|india|politics|sports',
    image: 'image_url',
    excerpt: 'Short summary',
    content: 'Full article content',
    time: 'Time posted'
}
```

### 🌟 Usage Examples

#### Search News
```javascript
// Triggered by search button or Enter key
searchNews();
```

#### Filter by Category
```javascript
// Filter to show only Tamil Nadu news
filterByCategory('tn');

// Filter to show only cinema news
filterByCategory('cinema');
```

#### Open News Detail
```javascript
// Open full article in modal
openNewsModal(newsObject);
```

### ♿ Accessibility Features

- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- Tamil language semantics

### 📈 SEO Optimization

- Meta description for better search results
- Open Graph tags for social sharing
- Semantic HTML elements
- Proper heading structure
- Mobile-friendly responsive design
- Fast loading with CDN resources

### 🔐 PRGI Registration

**PRGI NO: TNBIL/2023/88659**

This website is registered with the Press Registration Department (PRGI) of Tamil Nadu.

### 📝 Content Guidelines

- All news articles should be factual and verified
- Maintain neutral tone in reporting
- Proper attribution of sources
- Update timestamps regularly
- Avoid sensationalism
- Respect copyright and intellectual property

### 🚀 Deployment

#### GitHub Pages Deployment

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select main branch as source
4. Configure custom domain: amazetimes.in
5. Add CNAME file with domain name

#### Custom Server Deployment

1. Upload all files to web server
2. Configure SSL/HTTPS
3. Set proper file permissions
4. Configure server headers
5. Set up CDN for images (optional)

### 🐛 Bug Reports & Features

For bug reports and feature requests, please open an issue on GitHub:
[https://github.com/vitalizepay/amazetimes/issues](https://github.com/vitalizepay/amazetimes/issues)

### 📧 Contact

- **Email:** info@amazetimes.in
- **Twitter:** [@amazetimes](https://twitter.com/amazetimes)
- **Facebook:** [amazetimes](https://facebook.com/amazetimes)
- **Instagram:** [@amazetimes](https://instagram.com/amazetimes)

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

### 👥 Contributors

- **Lead Developer:** VitalizePay Team
- **Design:** UI/UX Team
- **Tamil Content:** Editorial Team

### 🙏 Acknowledgments

- Mukta Malar Font by EkType
- Tailwind CSS framework
- Lucide Icons
- The Tamil community for inspiration and support

### 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Tamil Unicode Standards](https://www.unicode.org/charts/PDF/U0B80.pdf)
- [Google Fonts](https://fonts.google.com)

---

**Last Updated:** December 6, 2025

**Version:** 1.0.0

**Status:** Production Ready ✅
