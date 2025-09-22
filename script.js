const stockData = [
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        marketCap: 2800000000000,
        peRatio: 28.5,
        dividendYield: 0.5,
        price: 175.25
    },
    {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        marketCap: 2400000000000,
        peRatio: 32.1,
        dividendYield: 0.72,
        price: 325.80
    },
    {
        symbol: 'JNJ',
        name: 'Johnson & Johnson',
        marketCap: 450000000000,
        peRatio: 15.8,
        dividendYield: 2.63,
        price: 170.15
    },
    {
        symbol: 'KO',
        name: 'The Coca-Cola Company',
        marketCap: 260000000000,
        peRatio: 26.7,
        dividendYield: 3.12,
        price: 60.45
    },
    {
        symbol: 'PG',
        name: 'Procter & Gamble Co.',
        marketCap: 350000000000,
        peRatio: 24.3,
        dividendYield: 2.41,
        price: 145.90
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

    const filteredStocks = stockData.filter(stock => {
        return stock.marketCap >= marketCapFilter &&
               stock.peRatio <= peRatioFilter &&
               stock.dividendYield >= dividendYieldFilter;
    });

    displayResults(filteredStocks);
}

function displayResults(stocks) {
    const resultsContainer = document.getElementById('stockResults');

    if (stocks.length === 0) {
        resultsContainer.innerHTML = '<p>No stocks match your criteria. Try adjusting your filters.</p>';
        return;
    }

    const stocksHTML = stocks.map(stock => `
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
            </div>
        </div>
    `).join('');

    resultsContainer.innerHTML = stocksHTML;
}

document.getElementById('screenButton').addEventListener('click', screenStocks);

displayResults(stockData);