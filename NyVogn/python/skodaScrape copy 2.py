from geopy.geocoders import Nominatim
import pandas as pd

# Initialize the Nominatim geocoder (Nominatim is a free and open-source geocoding service)
geolocator = Nominatim(user_agent="geoapiExercises")

# List of addresses to geocode
addresses = [
    "Langebro 15, 6200 Aabenraa",
    "Ny Kærvej 47, 9000 Aalborg",
    "Vallensbaekvej 5-11, 2605 Broendby",
    "Noerregade 144, 5592 Ejby",
    "Skagerrakvej 4, 6715 Esbjerg N",
    "Vesterballevej 9 B, 7000 Fredericia",
    "Soendergade 250, 9900 Frederikshavn",
    "Korshoej 1, 3600 Frederikssund",
    "Klintevej 1, 6100 Haderslev",
    "Klostermosevej 121, 3000 Helsingoer",
    "Hvidkildevej 5, 7400 Herning",
    "Egespurs Alle 1, 3400 Hilleroed",
    "Frederikshavnsvej 255, 9800 Hjoerring",
    "Erhvervsparken 6, 9500 Hobro",
    "Bilbyen 1, 4300 Holbaek",
    "Nybovej 25, 7500 Holstebro",
    "Vejlevej 151, 8700 Horsens",
    "Oester Parkvej 12-16, 8270 Hoejbjerg",
    "Slagelsevej 162, 4400 Kalundborg",
    "Englandsvej 437, 2770 Kastrup",
    "Egtved Alle 1, 6000 Kolding",
    "Banevingen 9, 2200 Koebenhavn N",
    "Tangmosevej 110, 4600 Koege",
    "Herningvej 24, 4800 Nykoebing Falster",
    "Bassinbuen 24, 4700 Naestved",
    "Hjoerringvej 142, 9400 Noerresundby",
    "Middelfartvej 50, 5200 Odense V",
    "Grenaavej 36, 8960 Randers Soe",
    "Industrivej 5A, 6760 Ribe",
    "Bragesvej 1, 4100 Ringsted",
    "Ravnsoevej 5, 8240 Risskov",
    "Koebenhavnsvej 190, 4000 Roskilde",
    "Lillehoejvej 44, 8600 Silkeborg",
    "Dronning Sophies Alle 110, 8660 Skanderborg",
    "Katkjaervej 10, 7800 Skive",
    "Teknikvej 2C, 4200 Slagelse",
    "Englandsvej 1, 5700 Svendborg",
    "Dynamovej 5, 2860 Søborg",
    "Alsgade 60-62, 6400 Sønderborg",
    "Uglevej 1, 7700 Thisted",
    "Ribelandevej 55, 6270 Tønder",
    "Bugattivej 4, 7100 Vejle",
    "Lundborgvej 12, 8800 Viborg",
    "Grønnevej 134-138, 2830 Virum",
    "Englandsvej 437, 2770 Kastrup",
    "Turbinevej 1, 2860 Søborg",
    "Kokkedal industripark 6, 2980 Kokkedal",
    "Bilbyen 1, 4300 Holbæk",
    "Roesskovsvej 2, 5200 Odense",
    "Kongens kvarter 32, 7000 Fredericia",
    "Grenåvej 347, 8240 Risskov",
    "Ny Kærvej 47, 9000 Aalborg",
    # Add more addresses here
]
# Initialize lists to store latitude and longitude
latitudes = []
longitudes = []

# Geocode each address
for address in addresses:
    address = address.replace("oe", "ø").replace("ae", "æ")
    location = geolocator.geocode(address)
    
    if location:
        latitudes.append(location.latitude)
        longitudes.append(location.longitude)
    else:
        latitudes.append(None)
        longitudes.append(None)

# Create a DataFrame to store the geocoded data
data = {
    'Address': addresses,
    'Latitude': latitudes,
    'Longitude': longitudes
}

df = pd.DataFrame(data)

# Specify the Excel file path where you want to save the data
excel_file = "geocoded_addresses.xlsx"

# Save the data to the Excel file
df.to_excel(excel_file, index=False)

print(f"Data has been saved to {excel_file}")
