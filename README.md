# Global Link

## Table of Contents

- [Installation](#installation)
- [Background](#background)
- [Getting Started](#getting)
- [Extract, Transform, Load](#extract,transform,load)
- [Features](#features)
- [Credits](#credits)
- [Badges](#badges)

## Installation:

To be able to run the jupyter notebook and VS Code you will need the following imports

- BeautifulSoup
- Matplotlib
- Numpy
- Pandas
- Scipy.stats
- Seaborn
- Splinter
- Sqlachemy
- Plotly

## Background:
 In a modern society, there is a consensus that smartphones play a predominant role in daily life. In order to reduce their transaction cost, getting as many users as possible across the world is an important business issue for companies.
In this project, our objective is to visualize and analyze the most used phone brands by continent

## Getting Started
You will need to run dashboard on your local server

1. Download the repo in your preferred manner.

2. In the folder app.py you will open the Inigrated terminal and use the following commands one at a time:

```
$ conda activate PythonData
```
```
$ python app.py
```
3. Click on the local server to bring up the website

![image](https://i.gyazo.com/89590bfeae5c897b31adf6fa82c82b16.png)


## Resources, Libraries, & Tools

Sources:

https://www.kaggle.com/datasets/alanjo/smartphone-processors-ranking

https://www.pocket-lint.com/phones/news

https://www.geeksforgeeks.org/how-to-make-a-pagination-using-html-and-css/

https://gs.statcounter.com/vendor-market-share/mobile/worldwide/#monthly-202106-202106-map

https://www.w3schools.com/w3css/default.asp

Tools & languages: JavaScript, HTML, Python Flask, Jupyter Notebook, MongoDB


## Extract, Transform, Load:
1 – Extraction:
 The data was saved as csv files for sections 1 and 2 in a folder then stored the files into dataframes using pandas. For section 3, we used beautifulsoup to scrape the website to pull data out of the HTML and parse it from the page source code which allowed the data extraction.

2 – Transformation:
In sections 1 and 2, the transformation process involved using the dataframes created from pandas to create both bar and line graphs. Once the dataframes were created for each continent, not all the columns were visible due the number of columns in the dataset. This issue was fixed by applying the 
```
following code: pd.set_option(‘max_columns’, None) 
```
and this allowed us to scroll through the table and see all the columns. Next we did a .count to inspect the data and make sure that we have nothing missing within the set.

a-   Line graphs were created in section 1 for each continent to look at the top 7 mobile phones utilized the most in each region within a year period (between May 2021 and May 2022).

b-   A bar graph was created in section 2 to show the number of SoCs produced by companies among top performing devices. In the graph you can see that qualcomm has created more SoCs than all other companies, and that is because other companies use QUALCOMM’s SoCs.
Section 3, in this case the transformation was completed with the use of beautiful soup to parse the HTML file then extract the data. Our vision was to create a carousel which will display phone related information whenever we scrolled through. To achieve this goal, we first created a list of dictionaries which would hold the data scraped from the URL page including news_title, news_paragraph, url_link and some news_pic then used a for loop to print the information.

3- Load:
We loaded our data in MongoDB using PyMongo. First, we connected to the local database using conn = ‘mongodb://localhost:27017’, then we created a database named phonebrand. Next, we added tables within that database where we loaded all our data including the csv confirmed dataframes and scraped data. Once we confirmed that the data was in the database, we moved to the next steps which involved creating flask routes.

First, we created the app.py file where we defined all the routes and functions to perform for each action. Then, we connected routes to all the data in the database and created html files for each as well as the original index.html file. Using the routes, we would call from the html to pull data from the database then render the next html file with data.



 mongodb import and export data
 
 ![image](https://i.gyazo.com/7487ff455798707abdd42c8b9f478765.png)
    
 Flask routes
 
 ![image](https://i.gyazo.com/8115031294cc757b617c8939448ebc9b.png)
 

## Features
carsousel

![image](https://i.gyazo.com/2dd11b2cafaf46493b66bc1a4e9a6037.png)

scrape

![image](https://i.gyazo.com/f8d7166b73594548a6985195e9746907.png)

plotly graph

![image](https://i.gyazo.com/af7ca6d3b3db3899a4895d6dcbc0df90.png)

## Future Considerations

In the future, we would implement a heat map to display the data for phone usage for each continent. It would be a cool interactive way to display how different phone brands are used globally. Another thing we would like to do in the future is also compare different computer brands people use. Do people with an Apple phone have a Mac or Windows? That would be an interesting data set to visualize if phone brands and computer brands are correlated.

## Credits
Team members:

Mariama Diallo https://github.com/diallomt193

Matthew Ward https://github.com/mward95

Christian Tourteau https://github.com/Christ1129

Herman Tucker https://github.com/hermantucker12



## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mward95/Team_project_2/blob/main/MIT%20License/MIT%20License.txt)
