// AmazeTimes Tamil News Website - JavaScript

// Sample news data
const newsData = {
    all: [
        {
            id: 1,
            title: 'சென்னை, காஞ்சி, திருவள்ளூர் – பள்ளிகள் மூடப்பட்டது',
            category: 'tn',
            image: 'https://via.placeholder.com/400x250?text=Chennai+Rain',
            excerpt: 'கனமழை எச்சரிக்கை காரணமாக மாவட்ட நிர்வாகம் விடுமுறை அறிவித்தது.',
            content: 'சென்னை, காஞ்சி, திருவள்ளூர் மாவட்டங்களில் கனமழை எச்சரிக்கை இருப்பதைக் கொண்டு மாவட்ட நிர்வாகம் பள்ளிகளுக்கு விடுமுறை அறிவித்துள்ளது. மக்களிடம் வீட்டில் இருக்குமாறு அறிவுறுத்தப்பட்டுள்ளது.',
            time: '2 மணி நேரம் முன்'
        },
        {
            id: 2,
            title: 'அஜித் AK64 – Pongal Release Confirmed',
            category: 'cinema',
            image: 'https://via.placeholder.com/400x250?text=Ajith+Movie',
            excerpt: 'படப்பிடிப்பு இறுதி கட்டத்தில் — Pongal 2026 release almost confirmed.',
            content: 'அஜித் நடிக்கும் AK64 பட்டத்தின் படப்பிடிப்பு இறுதி கட்டத்தை நெருங்கி வருகிறது. தயாரிப்பாளர்கள் Pongal 2026-ல் திரையிறக்குவதற்கான திட்டங்களை தீவிரமாக நிறைவேற்றிக் கொண்டிருக்கின்றனர்.',
            time: '1 மணி நேரம் முன்'
        },
        {
            id: 3,
            title: 'வடக்கு இந்தியாவில் மழை தீவிரம்',
            category: 'india',
            image: 'https://via.placeholder.com/400x250?text=India+Weather',
            excerpt: 'டெல்லி, இউபி, பஞ்சாப் பகுதிகளில் கனமழையுடன் ஆவேசம் எச்சரிக்கை',
            content: 'வடக்கு இந்தியாவின் பல பகுதிகளில் கனமழை எச்சரிக்கை வெளியிடப்பட்டுள்ளது. டெல்லி, இউபி, பஞ்சாப் பகுதிகளில் மழை மற்றும் ஆவேசத்தின் அபாயம் உள்ளது.',
            time: '30 நிமிடங்கள் முன்'
        }
    ],
    tn: [],
    cinema: [],
    india: [],
    politics: [],
    sports: []
};

// Initialize news data by category
function initializeNewsByCategory() {
    newsData.tn = newsData.all.filter(news => news.category === 'tn');
    newsData.cinema = newsData.all.filter(news => news.category === 'cinema');
    newsData.india = newsData.all.filter(news => news.category === 'india');
    newsData.politics = newsData.all.filter(news => news.category === 'politics');
    newsData.sports = newsData.all.filter(news => news.category === 'sports');
}

// Update current date and time
function updateDateTime() {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
    };
    const now = new Date();
    const dateStr = now.toLocaleDateString('ta-IN', options);
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = dateStr;
    }
}

// Search functionality
function searchNews() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (query.trim() === '') {
        alert('தயவுசெய்து ஒரு சொல் தேடுக');
        return;
    }

    const results = newsData.all.filter(news =>
        news.title.toLowerCase().includes(query) ||
        news.excerpt.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        alert('உங்கள் தேடலுக்குப் பொருத்தமான செய்திகள் இல்லை');
    } else {
        alert(`${results.length} செய்திகள் கண்டறியப்பட்டன`);
        // Future: Display results in a modal or dedicated page
    }
}

// Handle Enter key in search
function setupSearchHandlers() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchNews();
            }
        });
    }

    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', searchNews);
    }
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#home') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Category filter functionality
function filterByCategory(category) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });

    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        newsGrid.innerHTML = '';
        const categoryNews = category === 'all' ? newsData.all : newsData[category];
        
        categoryNews.forEach(news => {
            const newsCard = createNewsCard(news);
            newsGrid.appendChild(newsCard);
        });
    }
}

// Create news card element
function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card p-4';
    card.innerHTML = `
        <img src="${news.image}" class="rounded mb-3 w-full h-48 object-cover" alt="${news.title}">
        <div>
            <span class="category-badge category-${news.category}">${getCategoryName(news.category)}</span>
            <h3 class="text-lg font-bold">${news.title}</h3>
            <p class="text-gray-600 text-sm mt-2">${news.excerpt}</p>
            <p class="text-gray-400 text-xs mt-2">${news.time}</p>
        </div>
    `;
    
    card.addEventListener('click', () => openNewsModal(news));
    return card;
}

// Get category name in Tamil
function getCategoryName(category) {
    const categoryNames = {
        'tn': 'தமிழ்நாடு',
        'cinema': 'சினிமா',
        'india': 'இந்தியா',
        'politics': 'அரசியல்',
        'sports': 'விளையாட்டு'
    };
    return categoryNames[category] || category;
}

// Open news in modal
function openNewsModal(news) {
    const modal = document.getElementById('news-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <h2 class="text-3xl font-bold mb-4">${news.title}</h2>
            <p class="text-gray-500 mb-4">
                <span class="category-badge category-${news.category}">${getCategoryName(news.category)}</span>
                <span class="ml-4 text-sm">${news.time}</span>
            </p>
            <img src="${news.image}" class="w-full rounded mb-6" alt="${news.title}">
            <p class="text-lg text-gray-700 leading-relaxed">${news.content}</p>
        `;
        modal.style.display = 'block';
    }
}

// Close modal
function closeNewsModal() {
    const modal = document.getElementById('news-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Setup modal close handlers
function setupModalHandlers() {
    const modal = document.getElementById('news-modal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeNewsModal);
    }

    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Setup category filter handlers
function setupCategoryFilters() {
    const categoryLinks = document.querySelectorAll('.nav-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
}

// Share functionality
function shareNews(title, category) {
    const text = `${title} - அமேசு டைம்ஸிலிருந்து. #amazetimes #${category}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'அமேசு டைம்ஸ்',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('தகவல் நকலெடுக்கப்பட்டது');
        });
    }
}

// Lazy load images (if needed)
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize page on load
function initializePage() {
    updateDateTime();
    initializeNewsByCategory();
    setupSearchHandlers();
    setupSmoothScroll();
    setupModalHandlers();
    setupCategoryFilters();
    setupLazyLoading();

    // Update date/time every minute
    setInterval(updateDateTime, 60000);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Expose functions to global scope for inline handlers
window.searchNews = searchNews;
window.shareNews = shareNews;
window.openNewsModal = openNewsModal;
window.closeNewsModal = closeNewsModal;
window.filterByCategory = filterByCategory;
