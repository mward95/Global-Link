# MongoDB and Flask Application
#################################################

# Dependencies and Setup
from distutils.log import debug
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from flask import jsonify
from bson.json_util import dumps
from bson.json_util import loads


# import scrape_phone

# Flask Setup
#################################################
app = Flask(__name__)

# PyMongo Connection Setup
#################################################
app.config["MONGO_URI"] = "mongodb://localhost:27017/phonebrand"
mongo = PyMongo(app)

# PyMongo Connection Setup
#################################################
app.config["MONGO_URI"] = "mongodb://localhost:27017/phonebrand"
mongo = PyMongo(app)
# Route to renter projectindex2.html template using data from Mongo
# note to ***self*** the goal is to take each route and pass the backend data to the front end where the user selects the continent they want to explore
# home route
@app.route("/")
def index():
    # ww_data = mongo.db.worldwide.find()
    # print(ww_data)

    # return render_template("projectindex2.html")
    default_data = mongo.db.phone.find()
    print(default_data)

    return render_template("projectindex2.html", articles=default_data)
# worlwide
#################################################
# I call the route from the HTML, and then the route pulls from the database, then renders the next html with the data  
@app.route("/worldwide")
def world():
    ww_data = mongo.db.worldwide.find()
    print(ww_data)
# ***the new html page that we make for the continent***
    return render_template("worldwide.html", phone_link=ww_data)
# africa
#################################################
@app.route("/africa")
def africa():
    africa_data = mongo.db.africa.find()
    print(africa_data)

    return render_template("africa.html")

@app.route("/api/africa")
def africa_api():
    africa_data = mongo.db.africa.find()
    print(africa_data)
    return dumps(africa_data)

    # return render_template("africa.html", phone_link=africa_data)

# asia
#################################################
@app.route("/asia")
def asia():
    asia_data = mongo.db.asia.find()
    print(asia_data)

    return render_template("asia.html", phone_link=asia_data)
# oceania
#################################################
@app.route("/oceania")
def oceania():
    oceania_data = mongo.db.oceania.find()
    print(oceania_data)

    return render_template("oceania.html", phone_link=oceania_data)
# southamerica
#################################################
@app.route("/southamerica")
def southamerica():
    southamerica_data = mongo.db.southamerica.find()
    print(southamerica_data)

    return render_template("southamerica.html", phone_link=southamerica_data)
# europe
#################################################
@app.route("/europe")
def europe():
    europe_data = mongo.db.europe.find()
    print(europe_data)

    return render_template("europe.html")

@app.route("/api/europe")
def europe_api():
    europe_data = mongo.db.europe.find()
    print(europe_data)
    return dumps(europe_data)

    # return render_template("europe.html", phone_link=europe_data)
# northamerica
#################################################
@app.route("/northamerica")
def northamerica():
    northamerica_data = mongo.db.northamerica.find()
    print(northamerica_data)

    return render_template("northamerica.html", phone_link=northamerica_data)
  
if __name__ == "__main__":
    app.run(debug=True)

# Part 1: Imports
#################################################
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress
import seaborn as sns
from sqlalchemy import create_engine

# Extract CSV into DataFrames
#################################################
# read csv file Worldwide
worldwide_csv = "static/Data/worldwide.csv"
africa_csv = "static/Data/africa.csv"
asia_csv = "static/Data/asia.csv"
oceania_csv = "static/Data/oceania.csv"
southamerica_csv = "static/Data/south america.csv"
europe_csv = "static/Data/europe.csv"
northamerica_csv = "static/Data/north america.csv"
# Create dataframe
worldwide_df = pd.read_csv(worldwide_csv)
africa_df = pd.read_csv(africa_csv)
asia_df = pd.read_csv(asia_csv)
oceania_df = pd.read_csv(oceania_csv)
southamerica_df = pd.read_csv(southamerica_csv)
europe_df = pd.read_csv(africa_csv)
northamerica_df = pd.read_csv(northamerica_csv)

# Part 2: MonogoDB
#################################################
import pymongo
# connect to mongodb
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.phonebrand

#Insert the scraped_data in the database
worldwide_dict = worldwide_df.to_dict("records")
africa_dict = africa_df.to_dict("records")
asia_dict = asia_df.to_dict("records")
oceania_dict = oceania_df.to_dict("records")
southamerica_dict = southamerica_df.to_dict("records")
europe_dict = europe_df.to_dict("records")
northamerica_dict = northamerica_df.to_dict("records")

#Insert data
db.worldwide.insert_many(worldwide_dict)
db.africa.insert_many(africa_dict)
db.asia.insert_many(asia_dict)
db.oceania.insert_many(oceania_dict)
db.southamerica.insert_many(southamerica_dict)
db.europe.insert_many(europe_dict)
db.northamerica.insert_many(northamerica_dict)
