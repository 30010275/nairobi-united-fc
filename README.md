# Nairobi United FC - Official Website

A modern, professional football club website for Nairobi United FC built with HTML, CSS, and JavaScript.

## 🎨 Design & Branding

- **Colors**: Black, white, and green accents (football-inspired)
- **Typography**: Montserrat for headlines, Open Sans for body text
- **Layout**: Sleek, modern design with mobile-first responsive approach
- **Animations**: Smooth transitions and hover effects

## 📑 Features

### Pages & Sections
- **Home**: Hero banner with club achievements and quick links
- **About**: Club history, mission, vision, and leadership
- **Team**: Player profiles with stats and filtering by position
- **Fixtures & Results**: Upcoming matches, past results, and league standings
- **Achievements**: Trophy showcase and milestones
- **News**: Latest club news and updates
- **Tickets & Merch**: Online ticket booking and merchandise store
- **Contact**: Contact form and club information

### Technical Features
- Responsive design (mobile, tablet, desktop)
- Dark/Light mode support (system preference)
- Smooth scrolling navigation
- Interactive elements and animations
- SEO optimized
- Fast loading performance

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Local server for development (optional)

### Installation

1. Clone or download the project files
2. Navigate to the project directory:
   ```bash
   cd nairobi-united-fc
   ```

3. Open `index.html` in your web browser:
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Or simply open index.html directly in browser
   ```

### Adding Images

Place your images in the `assets/` folder:
- `logo.png` - Club logo
- `hero-*.jpg` - Hero slider images
- `about-team.jpg` - About section team photo
- `player*.jpg` - Player profile photos
- `jersey.jpg`, `scarf.jpg` - Merchandise images
- `news*.jpg` - News article images

## 🛠️ Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #000000;       /* Black */
    --secondary-color: #ffffff;     /* White */
    --accent-color: #00a859;        /* Green */
    /* ... */
}
```

### Content
- **Players**: Update `players` array in `js/script.js`
- **Fixtures**: Update `fixtures` array in `js/script.js`
- **News**: Update `newsArticles` array in `js/script.js`
- **Text content**: Edit HTML files directly

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `css/styles.css`
3. Add functionality in `js/script.js` if needed

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance Features

- Optimized CSS with minimal redundancy
- Efficient JavaScript with event delegation
- Lazy loading ready (add `loading="lazy"` to images)
- CSS Grid and Flexbox for layout
- Minimal external dependencies

## 🔧 Development

### File Structure
```
nairobi-united-fc/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── placeholder.txt # Image requirements
│   └── (image files)   # Club images
└── README.md          # This file
```

### Future Enhancements
- Backend integration for dynamic content
- Database for players, fixtures, news
- User authentication for ticket purchases
- Payment gateway integration
- Admin panel for content management
- PWA features (offline support, push notifications)

## 📞 Support

For support or questions about this website, please contact:
- Email: info@nairobiunitedfc.co.ke
- Phone: +254 700 123 456

## 📄 License

This project is for Nairobi United FC. All rights reserved.

## 🎯 Club Information

**Nairobi United FC**
- Founded: 2015
- Rebranded: 2022
- Current Management: Sakaja Foundation (2024)
- Head Coach: Nicholas Muyoti
- Captain: Isaac Ouma

**Recent Achievements:**
- 2024/25 NSL Champions
- FKF Cup Winners 2025
- CAF Confederation Cup 2025 Qualifiers
