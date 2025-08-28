// Type definitions for Nairobi United FC data
interface PlayerStats {
    goals?: number;
    assists?: number;
    appearances?: number;
    yellow?: number;
    red?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    clean_sheets?: number;
    saves?: number;
    tackles?: number;
    interceptions?: number;
}

interface Player {
    id: number;
    name: string;
    position: string;
    squad: string;
    image: string;
    bio: string;
    stats: PlayerStats;
    jersey: number | null;
}

interface Fixture {
    id: number;
    date: string;
    time: string;
    opponent: string;
    venue: string;
    competition: string;
    score: string | null;
    status: 'completed' | 'upcoming';
    scorers: string[];
    attendance?: number; // Make attendance optional
}

interface NewsArticle {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
}

interface Achievement {
    title: string;
    description: string;
    year: number;
    image: string;
    significance: string;
}

// Comprehensive data for Nairobi United FC
const players: Player[] = [
    {
        id: 1,
        name: "Isaac Ouma",
        position: "Forward",
        squad: "forwards",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgilaB5reJyYIO2yZp2fOLr5ykmXtFSQ6kug&s",
        bio: "Team captain and top scorer. Known for his incredible speed and finishing ability.",
        stats: { goals: 15, assists: 8, appearances: 25, yellow: 2, red: 0 },
        jersey: 9
    },
    {
        id: 2,
        name: "Nicholas Muyoti",
        position: "Head Coach",
        squad: "coaching",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TNF2kCbJO6rbYFwGRmyy_uJeXuloi3HEwQ&s",
        bio: "Experienced coach with a proven track record of developing young talent.",
        stats: { wins: 18, draws: 5, losses: 2 },
        jersey: null
    },
    {
        id: 3,
        name: "Ernest Mohamed",
        position: "Goalkeeper",
        squad: "goalkeepers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq6fiXeSn0Pz8bnLF0Wgl_aKqbqqIIsEyQQ&s",
        bio: "Reliable goalkeeper with excellent reflexes and leadership skills.",
        stats: { clean_sheets: 12, saves: 78, appearances: 25 },
        jersey: 1
    },
    {
        id: 4,
        name: "James Mwangi",
        position: "Defender",
        squad: "defenders",
        image: "https://www.instagram.com/p/DN0RAsF0NJZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        bio: "Strong central defender with excellent aerial ability.",
        stats: { tackles: 45, interceptions: 32, appearances: 23 },
        jersey: 4
    },
    {
        id: 5,
        name: "Michael Kamau",
        position: "Midfielder",
        squad: "midfielders",
        image: "https://peopledaily.digital/wp-content/uploads/2025/06/504339073_1157875323021063_99879292821063128_n-Cropped-768x528.jpg",
        bio: "Creative playmaker with excellent vision and passing range.",
        stats: { goals: 5, assists: 12, appearances: 24 },
        jersey: 10
    },
    {
        id: 6,
        name: "Samuel Otieno",
        position: "Forward",
        squad: "forwards",
        image: "assets/players/samuel-otieno.jpg",
        bio: "Young talented striker with great potential.",
        stats: { goals: 8, assists: 4, appearances: 20 },
        jersey: 11
    }
];

const fixtures: Fixture[] = [
    {
        id: 1,
        date: "2024-03-15",
        time: "16:00",
        opponent: "Gor Mahia",
        venue: "Nairobi Stadium",
        competition: "FKF Premier League",
        score: "2-1",
        status: "completed",
        scorers: ["I. Ouma (25')", "S. Otieno (67')"],
        attendance: 15000
    },
    {
        id: 2,
        date: "2024-03-22",
        time: "15:00",
        opponent: "AFC Leopards",
        venue: "Nairobi Stadium",
        competition: "FKF Premier League",
        score: "1-1",
        status: "completed",
        scorers: ["M. Kamau (52')"],
        attendance: 18000
    },
    {
        id: 3,
        date: "2024-03-30",
        time: "16:30",
        opponent: "Tusker FC",
        venue: "Nyayo Stadium",
        competition: "FKF Premier League",
        score: null,
        status: "upcoming",
        scorers: []
    },
    {
        id: 4,
        date: "2024-04-06",
        time: "15:00",
        opponent: "KCB FC",
        venue: "Nairobi Stadium",
        competition: "FKF Cup",
        score: null,
        status: "upcoming",
        scorers: []
    }
];

const newsArticles: NewsArticle[] = [
    {
        id: 1,
        title: "Nairobi United FC Crowned 2024/25 NSL Champions!",
        date: "2024-03-10",
        excerpt: "Nairobi United FC has clinched the NSL Championship title after a thrilling season, securing promotion to the FKF Premier League.",
        image: "https://pbs.twimg.com/media/Gt-jq5oWMAAAzfI?format=jpg&name=4096x4096",
        category: "Achievement",
        readTime: "3 min read"
    },
    {
        id: 2,
        title: "Historic FKF Cup Victory Against Gor Mahia",
        date: "2024-03-08",
        excerpt: "Nairobi United FC defeats Gor Mahia 2-1 in a thrilling FKF Cup final to secure their first major trophy.",
        image: "https://publish.eastleighvoice.co.ke/mugera_lock/uploads/2025/02/fadcfc77-0253-4733-b290-36b456942ab8.jpg",
        category: "Match Report",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "CAF Confederation Cup 2025 Qualification Secured",
        date: "2024-03-05",
        excerpt: "The club has officially qualified for the 2025 CAF Confederation Cup, marking a historic achievement for Nairobi United FC.",
        image: "https://cms.ghanasoccernet.com/wp-content/uploads/2023/07/Caf-Confederation-Cup-2021-2022-Draw-650x450-1.jpg",
        category: "African Football",
        readTime: "5 min read"
    },
    {
        id: 4,
        title: "Sakaja Foundation Takes Over Club Management",
        date: "2024-02-28",
        excerpt: "The Sakaja Foundation has officially taken over the management of Nairobi United FC, promising significant investment in youth development.",
        image: "https://lens.usercontent.google.com/image?vsrid=CN6IrZOlqMnlGRACGAEiJGMyZGIwZGRkLTk5NDQtNGE4NS1hNDQwLTJjNGMwMTMyZjg2OTIGIgJ3ZSgIOLWGqpOzqY8D&gsessionid=6ubScMoWcBwI8moqZS8ll8Gmhlp3dkh_Mt_v4C79aMG-ZFbemYevWw",
        category: "Club News",
        readTime: "3 min read"
    }
];

const achievements: Achievement[] = [
    {
        title: "2024/25 NSL Champions",
        description: "National Super League Winners",
        year: 2025,
        image: "https://pbs.twimg.com/media/Gt-jq5oWMAAAzfI?format=jpg&name=4096x4096",
        significance: "Promotion to FKF Premier League"
    },
    {
        title: "FKF Cup 2025",
        description: "Defeated Gor Mahia 2-1 in the final",
        year: 2025,
        image: "https://publish.eastleighvoice.co.ke/mugera_lock/uploads/2025/02/fadcfc77-0253-4733-b290-36b456942ab8.jpg",
        significance: "First major trophy win"
    },
    {
        title: "CAF Confederation Cup",
        description: "2025 Qualifiers",
        year: 2025,
        image: "https://cms.ghanasoccernet.com/wp-content/uploads/2023/07/Caf-Confederation-Cup-2021-2022-Draw-650x450-1.jpg",
        significance: "First African competition qualification"
    }
];

// Hero Slider Functionality
function initHeroSlider(): void {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(index: number): void {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide(): void {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}

// Add fade-in effect for hero title and subtitle
function initHeroTextAnimation(): void {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) {
        heroTitle.classList.add('fade-in');
    }
    
    if (heroSubtitle) {
        heroSubtitle.classList.add('fade-in');
    }
}

// Quick Links Animation
function initQuickLinksAnimation(): void {
    const quickLinkCards = document.querySelectorAll('.quick-link-card');
    
    quickLinkCards.forEach(card => {
        const htmlCard = card as HTMLElement;
        card.addEventListener('mouseover', () => {
            htmlCard.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            htmlCard.style.transform = 'scale(1)';
        });
    });
}

// Function to populate player profiles with filtering
function populatePlayers(): void {
    const playersGrid = document.querySelector('.players-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!playersGrid) return;
    
    // Filter players based on squad
    function filterPlayers(squad: string): void {
        if (!playersGrid) return;
        playersGrid.innerHTML = '';
        const filteredPlayers = squad === 'all' 
            ? players 
            : players.filter(player => player.squad === squad);
        
        filteredPlayers.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card', 'fade-in');
            playerCard.setAttribute('data-squad', player.squad);
            
            const statsHtml = player.jersey ? `
                <div class="player-stats">
                    <div class="stat">
                        <span class="stat-number">${player.stats.goals || player.stats.wins || player.stats.clean_sheets || player.stats.tackles}</span>
                        <span class="stat-label">${player.position === 'Goalkeeper' ? 'Clean Sheets' : player.position === 'Coach' ? 'Wins' : player.position === 'Defender' ? 'Tackles' : 'Goals'}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${player.stats.assists || player.stats.draws || player.stats.saves || player.stats.interceptions}</span>
                        <span class="stat-label">${player.position === 'Goalkeeper' ? 'Saves' : player.position === 'Coach' ? 'Draws' : player.position === 'Defender' ? 'Interceptions' : 'Assists'}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${player.stats.appearances || player.stats.losses}</span>
                        <span class="stat-label">${player.position === 'Coach' ? 'Losses' : 'Appearances'}</span>
                    </div>
                </div>
            ` : '';
            
            playerCard.innerHTML = `
                <div class="player-image-container">
                    <div class="player-image" style="background-image: url('${player.image}');">
                        ${player.jersey ? `<div class="jersey-number">${player.jersey}</div>` : ''}
                    </div>
                    <div class="player-links">
                        <a href="#" class="player-link" onclick="viewPlayerProfile(${player.id})">
                            <i class="fas fa-user"></i>
                        </a>
                        <a href="#" class="player-link" onclick="sharePlayer(${player.id})">
                            <i class="fas fa-share-alt"></i>
                        </a>
                    </div>
                </div>
                <div class="player-info">
                    <h4 class="player-name">${player.name}</h4>
                    <p class="player-position">${player.position}</p>
                    ${statsHtml}
                    <button class="btn-view-profile" onclick="showPlayerModal(${player.id})">View Full Profile</button>
                </div>
            `;
            playersGrid.appendChild(playerCard);
        });
    }
    
    // Initial population
    filterPlayers('all');
    
    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            if (filter) {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterPlayers(filter);
            }
        });
    });
}

// Function to populate fixtures with tabs
function populateFixtures(): void {
    const upcomingGrid = document.querySelector('#upcoming-content .matches-grid');
    const resultsGrid = document.querySelector('#results-content .matches-grid');
    const standingsTable = document.querySelector('.standings-table');
    
    if (!upcomingGrid || !resultsGrid || !standingsTable) return;
    
    // Clear existing content
    upcomingGrid.innerHTML = '';
    resultsGrid.innerHTML = '';
    
    // Populate upcoming matches
    fixtures.filter(f => f.status === 'upcoming').forEach(fixture => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card', 'fade-in');
        matchCard.innerHTML = `
            <div class="match-date">
                <div>${new Date(fixture.date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                <div class="match-day">${new Date(fixture.date).getDate()}</div>
                <div>${new Date(fixture.date).toLocaleDateString('en-US', { month: 'short' })}</div>
            </div>
            <div class="match-teams">
                <div class="team-logo home-logo"></div>
                <span class="team-name">Nairobi United</span>
            </div>
            <div class="match-vs">VS</div>
            <div class="match-teams">
                <div class="team-logo away-logo"></div>
                <span class="team-name">${fixture.opponent}</span>
            </div>
            <div class="match-info">
                <div class="match-time">${fixture.time}</div>
                <div class="match-venue">${fixture.venue}</div>
                <div class="match-competition">${fixture.competition}</div>
            </div>
            <div class="match-actions">
                <button class="btn btn-primary">Buy Tickets</button>
                <button class="btn btn-secondary">Remind Me</button>
            </div>
        `;
        upcomingGrid.appendChild(matchCard);
    });
    
    // Populate past results
    fixtures.filter(f => f.status === 'completed').forEach(fixture => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card', 'fade-in');
        const attendanceHtml = fixture.attendance ? 
            `<div class="attendance">Attendance: ${fixture.attendance.toLocaleString()}</div>` : '';
        
        matchCard.innerHTML = `
            <div class="match-date">
                ${new Date(fixture.date).toLocaleDateString()}
            </div>
            <div class="match-teams">
                <div class="team-logo home-logo"></div>
                <span class="team-name">Nairobi United</span>
            </div>
            <div class="match-score">${fixture.score}</div>
            <div class="match-teams">
                <div class="team-logo away-logo"></div>
                <span class="team-name">${fixture.opponent}</span>
            </div>
            <div class="match-details">
                <div class="scorers">${fixture.scorers.join(', ')}</div>
                ${attendanceHtml}
                <div class="match-competition">${fixture.competition}</div>
            </div>
            <div class="match-actions">
                <button class="btn btn-secondary">Highlights</button>
            </div>
        `;
        resultsGrid.appendChild(matchCard);
    });
    
    // Populate standings (placeholder)
    standingsTable.innerHTML = `
        <thead>
            <tr>
                <th>Pos</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Nairobi United FC</td>
                <td>25</td>
                <td>18</td>
                <td>5</td>
                <td>2</td>
                <td>45</td>
                <td>18</td>
                <td>+27</td>
                <td>59</td>
            </tr>
            <!-- Additional teams would go here -->
        </tbody>
    `;
}

// Function to populate news articles
function populateNews(): void {
    const newsGrid = document.querySelector('.news-grid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = '';
    
    newsArticles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card', 'fade-in');
        newsCard.innerHTML = `
            <div class="news-image" style="background-image: url('${article.image}');">
                <span class="news-category">${article.category}</span>
            </div>
            <div class="news-content">
                <p class="news-meta">
                    <span class="news-date">${article.date}</span>
                    <span class="news-read-time">${article.readTime}</span>
                </p>
                <h4 class="news-title">${article.title}</h4>
                <p class="news-excerpt">${article.excerpt}</p>
                <div class="news-actions">
                    <a href="#" class="news-link">Read Full Story</a>
                    <div class="news-social">
                        <button class="social-share" onclick="shareArticle(${article.id})">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

// Tab functionality for fixtures
function initTabs(): void {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            if (!tabId) return;
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Smooth scrolling for navigation
function initSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (!href) return;
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu(): void {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initHeroTextAnimation();
    initQuickLinksAnimation();
    populatePlayers();
    populateFixtures();
    populateNews();
    initTabs();
    initSmoothScroll();
    initMobileMenu();
    
    // Add intersection observer for animations
    const observerOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-title, .player-card, .match-card, .news-card').forEach(el => {
        observer.observe(el);
    });
});

// Utility functions for player interactions
function showPlayerModal(playerId: number): void {
    console.log('Show player modal for ID:', playerId);
    // Implement player modal functionality
    const player = players.find(p => p.id === playerId);
    if (player) {
        alert(`Player Profile: ${player.name}\nPosition: ${player.position}\nBio: ${player.bio}`);
    }
}

function viewPlayerProfile(playerId: number): void {
    console.log('View player profile for ID:', playerId);
    const player = players.find(p => p.id === playerId);
    if (player) {
        // This would typically navigate to a player profile page
        alert(`Redirecting to ${player.name}'s profile page`);
    }
}

function sharePlayer(playerId: number): void {
    console.log('Share player ID:', playerId);
    const player = players.find(p => p.id === playerId);
    if (player && navigator.share) {
        navigator.share({
            title: `${player.name} - Nairobi United FC`,
            text: `Check out ${player.name}, ${player.position} for Nairobi United FC`,
            url: window.location.href
        }).catch(console.error);
    } else {
        alert(`Share ${player?.name}'s profile`);
    }
}

function shareArticle(articleId: number): void {
    console.log('Share article ID:', articleId);
    const article = newsArticles.find(a => a.id === articleId);
    if (article && navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: window.location.href
        }).catch(console.error);
    } else {
        alert(`Share article: ${article?.title}`);
    }
}

// Make functions available globally for HTML onclick attributes
// Use type assertion to add to window object
(window as any).showPlayerModal = showPlayerModal;
(window as any).shareArticle = shareArticle;
