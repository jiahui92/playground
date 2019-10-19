# https://colab.research.google.com/notebooks/mlcc/intro_to_pandas.ipynb?utm_source=mlcc&utm_campaign=colab-external&utm_medium=referral&utm_content=pandas-colab&hl=zh-cn#scrollTo=DFZ42Uq7UFDj
from __future__ import print_function

import matplotlib.pyplot as plot
import pandas as pd
import numpy as np

print('pandas version: ' + pd.__version__)


print('\n------Series测试------')
city_name = pd.Series(['Shenzhen', 'Guangzhou', 'Hangzhou'])
population = pd.Series([21312, 32423, 56756])
print(city_name)
print(population)


print('\n------DataFrame测试------')
print(pd.DataFrame({ 'CityName': city_name, 'Population': population }))


print('\n------读取文件------')
## 从csv文件读取california住房数据 
california_housing_dataframe = pd.read_csv('./data/california_housing_train.csv', sep=',')
# print(california_housing_dataframe.describe())
print(california_housing_dataframe.head())
california_housing_dataframe.hist('housing_median_age')
plot.show() # 展示结果图


print('\n------索引操作------')
cities = pd.DataFrame({ 'City Name': city_name, 'Population': population })
print(type(cities['City Name']))
print(cities['City Name'])
print(type(cities['City Name'][1]))
print(cities['City Name'][1])
print(type(cities[1:3]))
print(cities[1:3])


print('\n------数据操作------')
print(population / 100)
print(population.apply(lambda val: val % 2))
print((population + 1) * population)

