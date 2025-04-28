# Stock Screener

A comprehensive web-based stock screening tool that helps investors filter and analyze stocks based on key financial metrics.

## Features

- **Multi-criteria Filtering**: Filter stocks by market capitalization, P/E ratio, dividend yield, and sector
- **Smart Sorting**: Sort results by any metric in ascending or descending order
- **Sector Analysis**: Filter stocks by specific sectors (Technology, Healthcare, Financial Services, Consumer Staples)
- **CSV Export**: Export filtered results to CSV for further analysis
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Instant filtering and sorting without page refresh

## Usage

1. Open `index.html` in your web browser
2. Set your desired filters:
   - **Market Cap**: Choose minimum market capitalization (Small, Mid, Large cap)
   - **P/E Ratio**: Set maximum price-to-earnings ratio
   - **Dividend Yield**: Set minimum dividend yield percentage
   - **Sector**: Filter by specific industry sector
3. Click "Screen Stocks" to see filtered results
4. Use the sort controls to order results by any metric
5. Export results to CSV using the "Export CSV" button
6. Clear all filters with the "Clear Filters" button

## Running Locally

```bash
# Start a simple HTTP server
npm start
```

Then open http://localhost:8000 in your browser.

## Stock Database

The app includes comprehensive sample data for major stocks:
- **Technology**: Apple (AAPL), Microsoft (MSFT), NVIDIA (NVDA)
- **Healthcare**: Johnson & Johnson (JNJ)
- **Financial Services**: JPMorgan Chase (JPM), Visa (V)
- **Consumer Staples**: Coca-Cola (KO), Procter & Gamble (PG)

Each stock entry includes:
- Current price
- Market capitalization
- P/E ratio
- Dividend yield
- Sector classification

## Technical Details

- Pure HTML5, CSS3, and vanilla JavaScript
- No external dependencies
- Responsive CSS Grid and Flexbox layouts
- Client-side CSV generation and download
- Mobile-first responsive design

## Future Enhancements

- Integration with real-time stock data APIs
- Additional financial metrics (ROE, Debt-to-Equity, etc.)
- Historical performance charts
- Portfolio tracking features
- Advanced screening criteria