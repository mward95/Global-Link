# MongoDB and Flask Application
#################################################

# Dependencies and Setup
from distutils.log import debug
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
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
# Route to renter index.html template using data from Mongo
# note to ***self*** the goal is to take each route and pass the backend data to the front end where the user selects the continent they want to explore
# home route
@app.route("/")
def index():
    # ww_data = mongo.db.worldwide.find_one()
    # print(ww_data)

    return render_template("index.html")
# worlwide
#################################################
@app.route("/worldwide")
def world():
    ww_data = mongo.db.worldwide.find_one()
    print(ww_data)

    return render_template("index.html", mission_to_mars=ww_data)
# africa
#################################################
@app.route("/africa")
def africa():
    africa_data = mongo.db.africa.find_one()
    print(africa_data)

    return render_template("index.html", mission_to_mars=africa_data)
# asia
#################################################
@app.route("/asia")
def asia():
    asia_data = mongo.db.asia.find_one()
    print(asia_data)

    return render_template("index.html", mission_to_mars=asia_data)
# oceania
#################################################
@app.route("/oceania")
def oceania():
    oceania_data = mongo.db.oceania.find_one()
    print(oceania_data)

    return render_template("index.html", mission_to_mars=oceania_data)
# southamerica
#################################################
@app.route("/southamerica")
def southamerica():
    southamerica_data = mongo.db.southamerica.find_one()
    print(southamerica_data)

    return render_template("index.html", mission_to_mars=southamerica_data)
# europe
#################################################
@app.route("/europe")
def europe():
    europe_data = mongo.db.europe.find_one()
    print(europe_data)

    return render_template("index.html", mission_to_mars=europe_data)
# northamerica
#################################################
@app.route("/northamerica")
def northamerica():
    northamerica_data = mongo.db.northamerica.find_one()
    print(northamerica_data)

    return render_template("index.html", mission_to_mars=northamerica_data)
  
# @app.route("/scrape")
# def scrape():
#     scraped_data = mongo.db.scraped_data
#     mars_data = scrape_mars.scrape()
#     scraped_data.update({}, mars_data, upsert=True)
#     return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)

