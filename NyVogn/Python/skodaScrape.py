import requests
from bs4 import BeautifulSoup
import pandas as pd

# Send a GET request to the URL
url = "https://ww3.skoda.dk/priser/"
response = requests.get(url)

if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all the card items
    card_items = soup.find_all('div', class_='card-item')

    # Initialize an empty DataFrame to store the data
    df = pd.DataFrame(columns=['Model', 'Gear', 'Ydelse', 'Forbrug', 'CO2', 'Halvårlig CO2-ejerafgift', 'Pris', 'Car URL', 'Model Name', 'Car Type', 'Car Image'])

    for card in card_items:
        # Find the URL
        url_element = card.find('a', class_='full-link')
        car_url = url_element['href'] if url_element else "URL not found"
        car_model = card.find('h2', class_='card-item-body-title-model').text

        response = requests.get(car_url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')

            # Find the car image element on the price URL
            car_image_element = soup.find('img', src=True)
            car_image_url = car_image_element['src'] if car_image_element else "Image not found"

            # Combine the car image URL with the base URL
            if car_image_url != "Image not found":
                car_image_url = "https://ww3.skoda.dk" + car_image_url

            # Find all the tables with the car details
            tables = soup.find_all('table')
            
            # Find all h2 elements within the price URL
            h2_elements = soup.find_all('h2', class_='headline-3')

            for table, car_type in zip(tables, h2_elements):
                # Check if any ancestor of the table has id="standardEquipment"
                if not table.find_parents(id="standardEquipment"):
                    rows = table.find_all('tr')

                    for row in rows[1:]:  # Skip the header row
                        cols = row.find_all('td')
                        data = [col.text.strip() for col in cols]

                        # Check if data is not empty
                        if len(data) >= 7:
                            df = df._append({
                                'Model': data[0],
                                'Gear': data[1],
                                'Ydelse': data[2],
                                'Forbrug': data[3],
                                'CO2': data[4],
                                'Halvårlig CO2-ejerafgift': data[5],
                                'Pris': data[6],
                                'Car URL': car_url,
                                'Model Name': car_model,
                                'Car Type': car_type.text,  # Add the text from the h2 element as "Car Type"
                                'Car Image': car_image_url  # Add the car image URL
                            }, ignore_index=True)

    # Save the data to an Excel file
    df.to_excel('car_prices.xlsx', index=False, header=True)

    print("Data has been scraped and saved to 'car_prices.xlsx'.")

else:
    print("Failed to retrieve the web page. Status code:", response.status_code)







