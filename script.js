// Pure Tamil news data and client-side rendering
const newsData = [
  { id: 1, category: 'tamil-nadu', time: '2025-12-07 08:00', title: 'சென்னை நகரில் புதிய பஸ் மார்க்கெட் திறக்கப்பட்டது', excerpt: 'சென்னையில் புதிய பஸ் மார்க்கெட் திறக்கப்பட்டு பொதுமக்களுக்கு போக்குவரத்து வசதி மேம்படுத்தப்பட்டது.', content: 'நகராட்சி தெரிவித்தது: புதிய பஸ் மார்க்கெட் நகரப் பயணிகளை துரிதமாகச் சேவை செய்யும்; பயண செலவுகள் குறையும்.' },
  { id: 2, category: 'tamil-nadu', time: '2025-12-06 18:20', title: 'தமிழ்நாடு பள்ளிகள் பாதுகாப்புடன் திறக்கப்படுகின்றன', excerpt: 'அரசு அனைத்து பள்ளிகளையும் பாதுகாப்பு நடைமுறைகளுடன் திறக்க திட்டமிட்டுள்ளது.', content: 'அரசு அமைச்சு கூறியது: மாணவர்களின் கல்வியை மேலோங்கச் செய்ய புதிய ஏற்பாடுகள் மேற்கொள்ளப்படுகின்றன.' },
  { id: 3, category: 'tamil-nadu', time: '2025-12-05 12:10', title: 'வானொலி நிலையங்களில் நவீன சாதனங்கள் நிறுவப்படுகின்றன', excerpt: 'மாநில வானொலி நிலையங்களில் நவீன உபகரணங்கள் நிறுவப்பட்டு செய்தி பரப்பல் மேம்படுத்தப்படுகிறது.', content: 'அதிகாரிகள் கூறினர்: தகவல் பரப்பல் வேகம் மற்றும் தரம் உயர்வதால் மக்களுக்கு நன்மை ஏற்படும்.' },
  { id: 4, category: 'cinema', time: '2025-12-07 09:30', title: 'புதிய தமிழ் திரைப்படம் திரையரங்குகளை நிரப்புகிறது', excerpt: 'சமீபத்தில் வெளியான தமிழ் திரைப்படம் பெரும் வரவேற்பைப் பெற்றுள்ளது.', content: 'விமர்சகர்கள் கூறினர்: கதாநாயகனின் நடிப்பு மற்றும் இசை பாராட்டுக்குரியது.' },
  { id: 5, category: 'cinema', time: '2025-12-06 14:00', title: 'தமிழ் இசை ஆல்பம் ரசிகர்களில் பிரபலமாகிறது', excerpt: 'ஒரு புதிய தமிழ் இசை ஆல்பம் பலரின் மனதை கவர்ந்து உள்ளது.', content: 'இசையமைப்பாளர் தெரிவித்தார்: பாரம்பரியமும் நவீனமும் கலந்து மலரும் இசை உருவானது.' },
  { id: 6, category: 'cinema', time: '2025-12-05 11:25', title: 'திரை விழாவில் சிறந்த படங்களுக்கு விருதுகள் வழங்கப்பட்டன', excerpt: 'சமீப திரை விழாவில் பல சிறந்த படங்களுக்கு விருதுகள் வழங்கப்பட்டன.', content: 'நிறுவனங்கள் தெரிவித்தது: புதிய இயக்குனர்கள் சிறந்த படைப்புகளை இணைத்து உள்ளனர்.' },
  { id: 7, category: 'india', time: '2025-12-07 07:00', title: 'தேசிய பொருளாதாரம் மெதுவாக வளரும்', excerpt: 'சமீப பொருளாதார அறிக்கைகள் வளர்ச்சியை சுட்டுகின்றன.', content: 'ஆய்வு அறிக்கை: உள்நாட்டு உற்பத்தி மற்றும் ஏற்றுமதி முக்கிய காரணிகளாக இருப்பதாக தெரிவிக்கப்படுகிறது.' },
  { id: 8, category: 'india', time: '2025-12-06 16:45', title: 'புதிய ரயில் திட்டம் பல நகரங்களை இணைக்கும்', excerpt: 'மத்திய அரசு பல நகரங்களை இணைக்கும் புதிய ரயில் திட்டத்தை அறிவித்துள்ளது.', content: 'இந்த திட்டம் பொருளாதார இணைப்பையும் வர்த்தக வளர்ச்சியையும் ஊக்குவிக்கும்.' },
  { id: 9, category: 'india', time: '2025-12-05 10:10', title: 'மருத்துவ ஆராய்ச்சி மையம் விரிவடைகிறது', excerpt: 'தேசிய மருத்துவ ஆராய்ச்சி மையத்தில் புதிய பிரிவுகள் உருவாக்கப்படுகின்றன.', content: 'இந்த மையம் நோய் தடுப்பு மற்றும் பரிசோதனைத் திறன்களை மேம்படுத்தும்.' },
  { id: 10, category: 'politics', time: '2025-12-07 08:15', title: 'புதிய கொள்கைகள் சமூக நலனை மேம்படுத்தும்', excerpt: 'மத்திய அரசின் புதிய கொள்கைகள் சமூக நலத்தை உயர்த்தும் நோக்கில் உள்ளன.', content: 'அமைச்சர் கூறினார்: வேலைவாய்ப்பு மற்றும் கல்விக்கு அதிக நிதி ஒதுக்கப்படும்.' },
  { id: 11, category: 'politics', time: '2025-12-06 13:05', title: 'மாநில பட்ஜெட்டில் கல்விக்கு வாய்ப்பு', excerpt: 'தமிழக பட்ஜெட்டில் கல்விக்கு கூடுதல் நிதி ஒதுக்கப்பட்டுள்ளது.', content: 'பள்ளிகள் மற்றும் கல்லூரிகளை மேம்படுத்த பல திட்டங்கள் இங்கே அமல்படுத்தப்பட உள்ளன.' },
  { id: 12, category: 'politics', time: '2025-12-05 09:40', title: 'தேர்தல் திட்டங்கள் அதிகாரப்பூர்வமாக அறிவிக்கப்பட்டன', excerpt: 'மாநிலத்திற்கான தேர்தல் திட்டங்கள் அறிவிக்கப்பட்டன.', content: 'தேர்தல் ஆணையம் வாக்குப்பதிவுக்கான தேவையான ஏற்பாடுகளை செய்து வருகிறது.' },
  { id: 13, category: 'sports', time: '2025-12-07 06:50', title: 'கிரிக்கெட் பயிற்சி முகாம் தொடங்கியது', excerpt: 'ஜில்லா கிரிக்கெட் அணிக்கு பயிற்சி முகாம் தொடங்கியது.', content: 'வீரர்கள் கடுமையாக பயிற்சி செய்து போட்டிக்கு முழு தயார் நிலையில் உள்ளார்கள்.' },
  { id: 14, category: 'sports', time: '2025-12-06 15:30', title: 'சர்வதேச போட்டியில் வெற்றி', excerpt: 'சமீப சர்வதேச போட்டியில் இந்திய வீரர்கள் சாதனை படைத்தனர்.', content: 'அணி நிர்வாகம் வீரர்களை பாராட்டியுள்ளது மற்றும் வெற்றியை கொண்டாடுகிறது.' },
  { id: 15, category: 'sports', time: '2025-12-05 11:55', title: 'மாநில விளையாட்டு மையம் திறக்கப்பட்டது', excerpt: 'மாநில ஆணையம் புதிய விளையாட்டு மையத்தை திறந்துள்ளது.', content: 'இந்த மையத்தில் பயிற்சி மற்றும் போட்டி வசதிகள் வழங்கப்படும்.' },
  { id: 16, category: 'tamil-nadu', time: '2025-12-04 10:20', title: 'நகர்ப்புற நீர் மறு பயன்பாடு திட்டம் செயல்படுகிறது', excerpt: 'நகர்ப்புற நீரை மறு பயன்பாட்டிற்கு மாற்றும் திட்டம் செயல்படுத்தப்பட்டுள்ளது.', content: 'இது நீர் பாதுகாப்புக்கு உதவும் மற்றும் விவசாயத்திற்கு நீர் வழங்கும்.' },
  { id: 17, category: 'cinema', time: '2025-12-03 14:45', title: 'இசை போட்டியில் தமிழ் பாடல் முதலிடம்', excerpt: 'ஒரு தமிழ் பாடல் இசை போட்டியில் முதன்மை பெற்றது.', content: 'பாடகர் மற்றும் இசையமைப்பாளர் இணைந்து அர்த்தமான பாடலை உருவாக்கியுள்ளனர்.' },
  { id: 18, category: 'india', time: '2025-12-02 09:10', title: 'மருத்துவ சேவைகள் கிராமங்களில் விரிவடைகின்றன', excerpt: 'தொலைமருத்துவ சேவைகள் கிராமப்புறங்களுக்கு மருத்துவ உதவிகளை வழங்குகின்றன.', content: 'தொலைமருத்துவ மூலம் கிராமங்களில் சிறந்த சிகிச்சை கிடைக்கும்.' },
  { id: 19, category: 'politics', time: '2025-12-01 12:00', title: 'சுற்றுச்சூழல் கலந்தாய்வு நடைபெறுகிறது', excerpt: 'சுற்றுச்சூழை பாதுகாப்பு தொடர்பாக கலந்தாய்வுகள் நடத்தப்படுகின்றன.', content: 'மக்கள் மற்றும் மாணவர்கள் மரங்கள் நடும் மற்றும் பராமரிப்பு பணிகளில் ஈடுபடுகின்றனர்.' },
  { id: 20, category: 'sports', time: '2025-11-30 17:20', title: 'சக்கர சவாரி போட்டி நடைபெற்றது', excerpt: 'மாநில சக்கர சவாரி போட்டி வெற்றிகரமாக முடிந்தது.', content: 'பங்கேற்ற வீரர்கள் சிறந்த திறமைகளை வெளிப்படுத்தினர்கள்.' },
  { id: 21, category: 'tamil-nadu', time: '2025-11-29 08:40', title: 'விவசாய உற்பத்தி உயர்வு அறிவிப்பு', excerpt: 'விவசாய உற்பத்தியில் சமீப வளர்ச்சி பதிவு செய்யப்பட்டுள்ளது.', content: 'புதிய விதைகள் மற்றும் நீர் மேலாண்மை பயிர் உற்பத்தியை அதிகரித்துள்ளன.' },
  { id: 22, category: 'cinema', time: '2025-11-28 13:50', title: 'சின்னதிரையில் தமிழ் இசை பெருமை', excerpt: 'சின்னதிரை நிகழ்ச்சிகளில் தமிழ் இசை சிறப்பாக அறிமுகமானது.', content: 'இசையமைப்பாளர்கள் புதிய பாடல்களால் பாராட்டுகளை பெற்றுள்ளனர்.' },
  { id: 23, category: 'india', time: '2025-11-27 10:05', title: 'கல்வித்திட்டத்தில் புதிய முன்னோக்குகள்', excerpt: 'கல்வி திட்டங்களில் மாணவர்களின் திறனை மேம்படுத்த நடவடிக்கைகள் அறிவிக்கப்பட்டன.', content: 'புதிய பாடப்புத்தகங்கள் மற்றும் பயிற்சி மையங்கள் மாணவர்களின் திறனை வளர்க்கும்.' },
  { id: 24, category: 'politics', time: '2025-11-26 16:15', title: 'நகராட்சி தேர்தல் அறிவிப்பு வெளியிடப்பட்டது', excerpt: 'அடுத்த மாதங்களில் நகராட்சி தேர்தலுக்கு தொடர்பான அறிவிப்புகள் வெளியாகின.', content: 'தேர்தல் மையங்கள் மற்றும் வாக்குப்பதிவு ஏற்பாடுகள் தயாராக உள்ளன.' },
  { id: 25, category: 'sports', time: '2025-11-25 09:30', title: 'தேசிய கால்பந்து போட்டி தொடங்கியது', excerpt: 'பல மாநில அணி இப்போட்டி மற்றும் சிறப்பு போட்டிகளில் ஈடுபட்டிருக்கின்றன.', content: 'போட்டி நிர்வாகம் போட்டி வெற்றிகளை மற்றும் நல்ல நடத்தை பாராட்டியுள்ளது.' },
  { id: 26, category: 'tamil-nadu', time: '2025-11-24 11:00', title: 'தொழிலாளர் மையம் திறக்கப்பட்டது', excerpt: 'கோயம்புத்தூர் தொழிலாளர் மையம் திறக்கப்பட்டுள்ளது.', content: 'மையம் தொழிலாளர்களுக்கு பயிற்சி மற்றும் வழிகாட்டல்களை வழங்கும்.' },
  { id: 27, category: 'cinema', time: '2025-11-23 14:40', title: 'தமிழ் இசையமைப்பாளர் உலக விருதிற்கு தேர்ந்தெடுக்கப்பட்டார்', excerpt: 'தமிழ் இசையமைப்பாளர் ஒரு முக்கிய உலக விருதிற்கு தேர்ந்தெடுக்கபட்டார்.', content: 'இது தமிழ் இசைக்கு பெருமை; இசையமைப்பாளர் நடுவில் பெரும் அங்கீகாரம் கிடைத்துள்ளது.' },
  { id: 28, category: 'india', time: '2025-11-22 08:20', title: 'புதிய வர்த்தக ஒப்பந்தங்கள் வர்த்தக வாய்ப்புகளை உருவாக்குகின்றன', excerpt: 'கடந்த ஆண்டில் புதிய வர்த்தக ஒப்பந்தங்கள் தற்போது பயனுள்ளதாகியுள்ளன.', content: 'ஒப்பந்தங்கள் ஏற்றுமதியை மேம்படுத்தி தொழிற்சாலைகளுக்கு ஆதரவு வழங்கும்.' },
  { id: 29, category: 'politics', time: '2025-11-21 12:50', title: 'சுற்றுச்சூழல் பாதுகாப்பு சட்டத்தில் திருத்தங்கள்', excerpt: 'சுற்றுச்சூழை சட்டங்களில் புதிய திருத்தங்கள் அறிவிக்கப்பட்டன.', content: 'இந்த திருத்தங்கள் நீர் மற்றும் காடுகளை பாதுகாக்க உதவும்.' },
  { id: 30, category: 'sports', time: '2025-11-20 15:10', title: 'மாநில சுற்றுச்சூழல் விளையாட்டு போட்டி முடிவடைந்தது', excerpt: 'மாநில சுற்றுச்சூழல் விளையாட்டு போட்டிகள் முடிந்தன.', content: 'போட்டிகள் நல்ல முறையில் முடிந்தன; எதிர்கால போட்டிகள் திட்டமிடப்படுகின்றன.' }
];

const months = ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'];

function formatTamilDate(dateStr) {
  const d = new Date(dateStr.replace(' ', 'T'));
  if (isNaN(d)) return dateStr;
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const mins = String(d.getMinutes()).padStart(2, '0');
  return `${day} ${month} ${year} · ${hours}:${mins}`;
}

function renderNews(list = newsData) {
  const container = document.getElementById('news-list');
  if (!container) return;
  container.innerHTML = '';
  list.forEach(item => {
    const el = document.createElement('article');
    el.className = 'news-item border-b py-4';
    el.innerHTML = `
      <div class="flex justify-between">
        <h3 class="text-lg font-semibold">${item.title}</h3>
        <time class="text-sm text-gray-500">${formatTamilDate(item.time)}</time>
      </div>
      <p class="text-sm text-gray-700 mt-2">${item.excerpt}</p>
      <div class="mt-2">
        <button class="open-btn text-indigo-600 text-sm">மேலும்</button>
      </div>
    `;
    el.querySelector('.open-btn').addEventListener('click', () => openNewsModal(item));
    container.appendChild(el);
  });
}

function openNewsModal(item) {
  const modal = document.getElementById('news-modal');
  if (!modal) return;
  modal.querySelector('.modal-title').textContent = item.title;
  modal.querySelector('.modal-time').textContent = formatTamilDate(item.time);
  modal.querySelector('.modal-body').textContent = item.content;
  modal.classList.remove('hidden');
}

function closeNewsModal() {
  const modal = document.getElementById('news-modal');
  if (!modal) return;
  modal.classList.add('hidden');
}

function filterByCategory(cat) {
  if (cat === 'all') return renderNews(newsData);
  renderNews(newsData.filter(n => n.category === cat));
}

function searchNews(q) {
  const ql = q.trim();
  if (!ql) return renderNews(newsData);
  const results = newsData.filter(n => (n.title + ' ' + n.excerpt + ' ' + n.content).includes(ql));
  renderNews(results);
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews();
  const searchEl = document.getElementById('search-input');
  if (searchEl) searchEl.addEventListener('input', e => searchNews(e.target.value));
  document.querySelectorAll('[data-cat]').forEach(btn => btn.addEventListener('click', () => filterByCategory(btn.dataset.cat)));
  const modalClose = document.querySelectorAll('.modal-close');
  modalClose.forEach(b => b.addEventListener('click', closeNewsModal));
});
