FROM nikolaik/python-nodejs

WORKDIR /src
COPY . /src
RUN npm install
RUN npm run build
RUN npm run rezip
RUN pip install -r requirements.txt


EXPOSE 3001 3000

CMD ["npm", "run", "start"]
