import mysql.connector
from flask import Flask, request, render_template, redirect, url_for

db = mysql.connector.connect(host="localhost", user="root", password="indhuja@23", database="details")
app = Flask(__name__)
cursor = db.cursor()

if db:
    print('connected')
else:
    print('connection error')

@app.route('/', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        username = data['username']
        password = data['password']

        # Insert the user data into the database
        insert_query = "INSERT INTO users (username, password) VALUES (%s, %s)"
        cursor.execute(insert_query, (username, password))
        db.commit()

        return "Registration successful."

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        username = data['username']
        password = data['password']

        # Check if the provided credentials exist in the database
        select_query = "SELECT * FROM users WHERE username = %s AND password = %s"
        cursor.execute(select_query, (username, password))
        user = cursor.fetchone()

        if user:
            return "Login successfully."
        else:
            return "Login failed. Invalid credentials."

if __name__ == '__main__':
    app.run(debug=True)
