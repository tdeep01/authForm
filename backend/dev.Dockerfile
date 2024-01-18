FROM node:alpine
WORKDIR /var/app/
COPY ./backend/package*.json ./

# ENV NODE_ENV=development
RUN npm config set strict-ssl false
RUN npm install

COPY . .
#RUN npm config set unsafe-perm true

# For debugger
# EXPOSE 9227
ENV __ENV development

CMD ["npm", "run", "dev"]
