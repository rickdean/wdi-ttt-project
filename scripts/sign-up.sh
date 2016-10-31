#!/bin/bash

#API="http://httpbin.org"
#URL_PATH="/post"
API="http://localhost:4741"
URL_PATH="/sign-up"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=${EMAIL}" \
  --data-urlencode "credentials[password]=${PASSWORD}" \
  --data-urlencode "credentials[password_confirmation]=${PASSWORD}"

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo

# run the code this way  - $ EMAIL=abc@123.com PASSWORD=abc123 ./scripts/sign-up.sh
