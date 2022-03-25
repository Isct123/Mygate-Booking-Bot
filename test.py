import webbrowser
import datetime

running = True

while running:
    current_time = datetime.datetime.now()
    if current_time.strftime("%H:%M:%S") == "21:00:00":
        webbrowser.open("https://vaishnaviterrace.ul.mygate.com/dashboard/amenity/select/day/1343?house_id=82919")
        running = False