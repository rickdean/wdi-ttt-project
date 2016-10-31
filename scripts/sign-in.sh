#!/bin/bash

#curl "http://localhost:3000/sign-in" \
#curl "http://httpbin.org/post" \
#  --include \
##  --data-urlencode ""

  API="http://localhost:4741"
  URL_PATH="/sign-in"
  curl "${API}${URL_PATH}" \
    --include \
    --request POST \
    --data-urlencode "credentials[email]=${EMAIL}" \
    --data-urlencode "credentials[password]=${PASSWORD}"

echo


# run the code this way  - $ EMAIL=abc@123.com PASSWORD=abc123 ./scripts/sign-in.sh
