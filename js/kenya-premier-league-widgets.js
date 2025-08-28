// Kenya Premier League Widgets Integration
class KenyaPremierLeagueWidgets {
    constructor(containerId = 'kenya-premier-league-widgets-container', dataHeight = '600px') {
        this.containerId = containerId;
        this.dataHeight = dataHeight;
        this.widgetScriptLoaded = false;
    }

    init() {
        this.loadWidgetScript();
        this.renderWidgets();
    }

    loadWidgetScript() {
        if (this.widgetScriptLoaded) return;

        const script = document.createElement('script');
        script.src = 'https://ls.soccersapi.com/widget/res/w_custom/widget.js';
        script.async = true;
        script.onload = () => {
            this.widgetScriptLoaded = true;
            console.log('SoccersAPI widget script loaded');
        };
        script.onerror = () => {
            console.error('Failed to load SoccersAPI widget script');
        };
        document.body.appendChild(script);
    }

    renderWidgets() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        // Clear existing content
        container.innerHTML = '';

        const widgets = [
            {
                title: 'Live Scores',
                url: 'https://ls.soccersapi.com/widget/live?c=2677',
                icon: 'fas fa-futbol'
            },
            {
                title: 'Fixtures',
                url: 'https://ls.soccersapi.com/widget/fixtures?c=2677',
                icon: 'fas fa-calendar-alt'
            },
            {
                title: 'Standings',
                url: 'https://ls.soccersapi.com/widget/standings?c=2677',
                icon: 'fas fa-trophy'
            }
        ];

        const widgetsGrid = document.createElement('div');
        widgetsGrid.className = 'widgets-grid';

        widgets.forEach(widget => {
            const widgetCard = document.createElement('div');
            widgetCard.className = 'widget-card';

            const header = document.createElement('div');
            header.className = 'widget-header';

            const icon = document.createElement('i');
            icon.className = widget.icon;

            const title = document.createElement('h3');
            title.textContent = widget.title;

            header.appendChild(icon);
            header.appendChild(title);

            const widgetContainer = document.createElement('div');
            widgetContainer.className = 'widget-iframe-container';
            widgetContainer.setAttribute('data-url', widget.url);
            widgetContainer.style.height = this.dataHeight;

            widgetCard.appendChild(header);
            widgetCard.appendChild(widgetContainer);
            widgetsGrid.appendChild(widgetCard);
        });

        container.appendChild(widgetsGrid);
    }

    // Method to update widget height for responsiveness
    updateWidgetHeight(height) {
        this.dataHeight = height;
        const containers = document.querySelectorAll('.widget-iframe-container');
        containers.forEach(container => {
            container.style.height = height;
        });
    }
}

// Initialize the widgets when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const widgets = new KenyaPremierLeagueWidgets();
    widgets.init();

    // Adjust widget height on window resize for better responsiveness
    window.addEventListener('resize', () => {
        const height = window.innerWidth < 768 ? '400px' : '600px';
        widgets.updateWidgetHeight(height);
    });
});
