const stockData = [
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        marketCap: 2800000000000,
        peRatio: 28.5,
        dividendYield: 0.5,
        price: 175.25,
        sector: 'Technology'
    },
    {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        marketCap: 2400000000000,
        peRatio: 32.1,
        dividendYield: 0.72,
        price: 325.80,
        sector: 'Technology'
    },
    {
        symbol: 'JNJ',
        name: 'Johnson & Johnson',
        marketCap: 450000000000,
        peRatio: 15.8,
        dividendYield: 2.63,
        price: 170.15,
        sector: 'Healthcare'
    },
    {
        symbol: 'KO',
        name: 'The Coca-Cola Company',
        marketCap: 260000000000,
        peRatio: 26.7,
        dividendYield: 3.12,
        price: 60.45,
        sector: 'Consumer Staples'
    },
    {
        symbol: 'PG',
        name: 'Procter & Gamble Co.',
        marketCap: 350000000000,
        peRatio: 24.3,
        dividendYield: 2.41,
        price: 145.90,
        sector: 'Consumer Staples'
    },
    {
        symbol: 'NVDA',
        name: 'NVIDIA Corporation',
        marketCap: 1800000000000,
        peRatio: 65.2,
        dividendYield: 0.14,
        price: 720.35,
        sector: 'Technology'
    },
    {
        symbol: 'JPM',
        name: 'JPMorgan Chase & Co.',
        marketCap: 480000000000,
        peRatio: 12.8,
        dividendYield: 2.16,
        price: 165.50,
        sector: 'Financial Services'
    },
    {
        symbol: 'V',
        name: 'Visa Inc.',
        marketCap: 520000000000,
        peRatio: 33.4,
        dividendYield: 0.78,
        price: 240.15,
        sector: 'Financial Services'
    }
];

function formatNumber(num) {
    if (num >= 1000000000000) {
        return (num / 1000000000000).toFixed(1) + 'T';
    } else if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toString();
}

function screenStocks() {
    const marketCapFilter = parseInt(document.getElementById('marketCap').value) || 0;
    const peRatioFilter = parseFloat(document.getElementById('peRatio').value) || Infinity;
    const dividendYieldFilter = parseFloat(document.getElementById('dividendYield').value) || 0;
    const sectorFilter = document.getElementById('sector').value;

    const filteredStocks = stockData.filter(stock => {
        const meetsMarketCap = stock.marketCap >= marketCapFilter;
        const meetsPeRatio = stock.peRatio <= peRatioFilter;
        const meetsDividend = stock.dividendYield >= dividendYieldFilter;
        const meetsSector = !sectorFilter || stock.sector === sectorFilter;

        return meetsMarketCap && meetsPeRatio && meetsDividend && meetsSector;
    });

    displayResults(filteredStocks);
    updateResultsCount(filteredStocks.length, stockData.length);
}

function updateResultsCount(filtered, total) {
    const countElement = document.getElementById('resultsCount');
    if (countElement) {
        countElement.textContent = `Showing ${filtered} of ${total} stocks`;
    }
}

function clearFilters() {
    document.getElementById('marketCap').value = '0';
    document.getElementById('peRatio').value = '';
    document.getElementById('dividendYield').value = '';
    document.getElementById('sector').value = '';
    displayResults(stockData);
    updateResultsCount(stockData.length, stockData.length);
}

function sortStocks(stocks) {
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;

    const sortedStocks = [...stocks].sort((a, b) => {
        let valueA = a[sortBy];
        let valueB = b[sortBy];

        if (typeof valueA === 'string') {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }

        if (sortOrder === 'asc') {
            return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
            return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
    });

    return sortedStocks;
}

function displayResults(stocks) {
    const resultsContainer = document.getElementById('stockResults');
    const sortedStocks = sortStocks(stocks);

    if (sortedStocks.length === 0) {
        resultsContainer.innerHTML = '<p>No stocks match your criteria. Try adjusting your filters.</p>';
        return;
    }

    const stocksHTML = sortedStocks.map(stock => `
        <div class="stock-card">
            <div class="stock-symbol">${stock.symbol}</div>
            <div class="stock-name">${stock.name}</div>
            <div class="stock-metrics">
                <div class="metric">
                    <div class="metric-label">Price</div>
                    <div class="metric-value">$${stock.price.toFixed(2)}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Market Cap</div>
                    <div class="metric-value">$${formatNumber(stock.marketCap)}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">P/E Ratio</div>
                    <div class="metric-value">${stock.peRatio}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Dividend Yield</div>
                    <div class="metric-value">${stock.dividendYield}%</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Sector</div>
                    <div class="metric-value">${stock.sector}</div>
                </div>
            </div>
        </div>
    `).join('');

    resultsContainer.innerHTML = stocksHTML;
}

document.getElementById('screenButton').addEventListener('click', screenStocks);
document.getElementById('clearButton').addEventListener('click', clearFilters);
document.getElementById('sortBy').addEventListener('change', () => {
    if (document.getElementById('stockResults').children.length > 0) {
        screenStocks();
    }
});
document.getElementById('sortOrder').addEventListener('change', () => {
    if (document.getElementById('stockResults').children.length > 0) {
        screenStocks();
    }
});

displayResults(stockData);
updateResultsCount(stockData.length, stockData.length);