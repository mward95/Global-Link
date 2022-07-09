# # Part 1: Imports
# #################################################
# import pandas as pd
# import numpy as np
# import matplotlib.pyplot as plt
# from scipy.stats import linregress
# import seaborn as sns
# from sqlalchemy import create_engine

# # Extract CSV into DataFrames
# #################################################
# # read csv file Worldwide
# worldwide_csv = "static/Data/worldwide.csv"
# africa_csv = "static/Data/africa.csv"
# asia_csv = "static/Data/asia.csv"
# oceania_csv = "static/Data/oceania.csv"
# southamerica_csv = "static/Data/south america.csv"
# europe_csv = "static/Data/europe.csv"
# northamerica_csv = "static/Data/north america.csv"
# # Create dataframe
# worldwide_df = pd.read_csv(worldwide_csv)
# africa_df = pd.read_csv(africa_csv)
# asia_df = pd.read_csv(asia_csv)
# oceania_df = pd.read_csv(oceania_csv)
# southamerica_df = pd.read_csv(southamerica_csv)
# europe_df = pd.read_csv(africa_csv)
# northamerica_df = pd.read_csv(northamerica_csv)

# # Part 2: MonogoDB
# #################################################
# import pymongo
# # connect to mongodb
# conn = 'mongodb://localhost:27017'
# client = pymongo.MongoClient(conn)
# db = client.phonebrand

# #Insert the scraped_data in the database
# worldwide_dict = worldwide_df.to_dict("records")
# africa_dict = africa_df.to_dict("records")
# asia_dict = asia_df.to_dict("records")
# oceania_dict = oceania_df.to_dict("records")
# southamerica_dict = southamerica_df.to_dict("records")
# europe_dict = europe_df.to_dict("records")
# northamerica_dict = northamerica_df.to_dict("records")

# #Insert data
# db.worldwide.insert_many(worldwide_dict)
# db.africa.insert_many(africa_dict)
# db.asia.insert_many(asia_dict)
# db.oceania.insert_many(oceania_dict)
# db.southamerica.insert_many(southamerica_dict)
# db.europe.insert_many(europe_dict)
# db.northamerica.insert_many(northamerica_dict)

