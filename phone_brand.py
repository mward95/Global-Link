import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress
import seaborn as sns
from sqlalchemy import create_engine
import pymongo


def scrape():
    # read csv file Africa
    africa_csv = "static/Data/europe.csv"
    # Create dataframe
    europe_df = pd.read_csv(africa_csv)
    europe_df.head()

    # Preforming a .count to make sure that the data is complete
    print(europe_df.count())   
    # read csv file Asia
    northamerica_csv = "static/Data/north america.csv" 
    # Create dataframe
    northamerica_df = pd.read_csv(northamerica_csv)
    northamerica_df.head()
    # Preforming a .count to make sure that the data is complete
    print(northamerica_df.count())

    # The default port used by MongoDB is 27017
    # https://docs.mongodb.com/manual/reference/default-mongodb-port/
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)
    # Declare the database for Africa
    db = client.phonebrand
    #Insert the scraped_data in the database
    europe_dict = europe_df.to_dict("records")
    #Insert data
    db.europe.insert_many(europe_dict)
    #Insert the scraped_data in the database
    northamerica_dict = northamerica_df.to_dict("records") 
    #Insert data
    db.northamerica.insert_many(northamerica_dict)
    return europe_dict
    return northamerica_dict
    