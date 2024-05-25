from flask import Flask, request, jsonify
from pymongo import MongoClient
import os
import csv

app = Flask(__name__)

# MongoDB connection setup
client = MongoClient('mongodb+srv://rayanbou867:rayan@cluster0.v7wx5ns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client.user_database
user_collection = db.users
@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    if not name or not email or not password:
        return jsonify({"error": "Name, email, and password are required"}), 400

    user = {
        "name": name,
        "email": email,
        "password": password,
    }

    user_collection.insert_one(user)
    return jsonify({"message": "User added successfully"}), 201


@app.route('/get_users', methods=['GET'])
def get_users():
    users = user_collection.find({}, {"_id": 0})
    print(users)
    user_list = list(users)
    return jsonify(user_list), 200

@app.route('/csv_to_json', methods=['GET'])
def csv_to_json():
    csv_file_path = 'DRUGS.csv'  # Change this path to your CSV file location

    data = []
    try:
        with open(csv_file_path, mode='r') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for row in csv_reader:
                data.append(row)
    except FileNotFoundError:
        return jsonify({"error": "CSV file not found"}), 404
    
    return jsonify(data), 200


if __name__ == '__main__':
    app.run(debug=True)
