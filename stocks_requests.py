
import yahoo_fin.stock_info as yf
import json
from flask import jsonify
import pandas as pd
from datetime import timedelta
from datetime import datetime


def get_live_price(tick):
    result = {'price': yf.get_live_price(tick)}
    return(result)

def get_analysts_info(tick):
    analysts_info = yf.get_analysts_info(tick)
    di = []
    for i in analysts_info:
         di.append(analysts_info[i].to_json())
    return(jsonify(di))

#Get price data
def get_data(tick):
    end_date = datetime.today()
    delta = timedelta(days=120)
    start_date = (end_date-delta).strftime("%d/%m/%Y")
    end_date = end_date.strftime("%d/%m/%Y")
    print("in get data", tick)
    data = yf.get_data(tick, start_date = start_date, end_date = end_date)
    return data.to_json()

def get_dividends(tick):
    print("in get dividends", tick)
    data = yf.get_dividends(tick).iloc[-10:]
    return data.to_json()

def get_quote_data(tick):
    print("in get_quote_data", tick)
    data = yf.get_quote_data(tick)
    return data

# get_analysts_info
# get_balance_sheet
# get_cash_flow
# get_currencies
# get_data
# get_day_gainers
# get_day_losers
# get_day_most_active
# get_dividends
# get_earnings
# get_earnings_for_date
# get_earnings_in_date_range
# get_earnings_history
# get_financials
# get_futures
# get_holders
# get_income_statement
# get_live_price
# get_market_status
# get_next_earnings_date
# get_premarket_price
# get_postmarket_price
# get_quote_data
# get_quote_table
# get_top_crypto
# get_splits
# get_stats
# get_stats_valuation
# get_undervalued_large_caps
# tickers_dow
# tickers_ftse100
# tickers_ftse250
# tickers_ibovespa
# tickers_nasdaq
# tickers_nifty50
# tickers_niftybank
# tickers_other
# tickers_sp500

