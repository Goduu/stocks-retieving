import pandas as pd
from bs4 import BeautifulSoup
from urllib.request import urlopen, Request
from flask import jsonify

#https://towardsdatascience.com/stock-news-sentiment-analysis-with-python-193d4b4378d4
def fetch_news_finviz(ticker):
    n = 10 #the # of article headlines displayed per ticker

    finwiz_url = 'https://finviz.com/quote.ashx?t='
    url = finwiz_url + ticker
    req = Request(url=url,headers={'user-agent': 'my-app/0.0.1'}) 
    resp = urlopen(req)    
    html = BeautifulSoup(resp, features="lxml")
    news_table = html.find(id='news-table')
    df_tr = news_table.findAll('tr')
    res = []
    refDate = ''
    for i, table_row in enumerate(df_tr):
        # print(table_row)
        source = table_row.span.text
        link =  table_row.a.attrs['href']
        text = table_row.a.text
        date = table_row.td.text.strip()
        
        if (len(date.split(' ')) > 1):
          refDate = date.split(' ')[0]
        else:
          date = refDate +" "+ date
        res.append(
            {
                'source': source,
                'link': link,
                'date': date,
                'text': text,
            }
        )
        if i == n-1:
          break
    return jsonify({'data': res})


#https://web.archive.org/web/20150204025359/http://blog.slashpoundbang.com/post/12975232033/google-news-search-parameters-the-missing-manual
def fetch_news_gnews(ticker):
    n=10
    url = 'http://news.google.com/news?q=' + ticker+ '&output=rss' #&hl=pt'
    req = Request(url=url,headers={'user-agent': 'my-app/0.0.1'}) 
    resp = urlopen(req)    
    html = BeautifulSoup(resp, features="xml")
    # print(html)
    texts = html.find_all('title') #+1
    dates = html.find_all('pubDate')
    sources = html.find_all('source')
    links = html.find_all('link') #+1
    print('-------------------------',len(texts), len(dates), len(sources),len(links))
    res = []
    for id,s in enumerate(sources):
        res.append(
            {
                'source': s.text,
                'link': links[id+1].text,
                'date': dates[id].text,
                'text': texts[id+1].text,
            }
        )
        if id == n-1:
          break
    return jsonify({'data': res})
