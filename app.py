# MongoDB and Flask Application
#################################################

# Dependencies and Setup
from distutils.log import debug
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_phone


# Flask Setup
#################################################
app = Flask(__name__)

# PyMongo Connection Setup
#################################################
app.config["MONGO_URI"] = "mongodb://localhost:27017/mars_app"
mongo = PyMongo(app)

# Flask Routes
#################################################
#Route to renter index.html template using data from Mongo
@app.route("/")
def index():
    scraped_data = mongo.db.scraped_data.find_one()
    return render_template("index.html", mission_to_mars=scraped_data)

@app.route("/scrape")
def scrape():
    scraped_data = mongo.db.scraped_data
    mars_data = scrape_mars.scrape()
    scraped_data.update({}, mars_data, upsert=True)
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)