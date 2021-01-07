FROM node:alpine
WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY --chown=node:node ./
CMD ["npm", "start"]
EXPOSE 7000
