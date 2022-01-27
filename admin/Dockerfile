FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm ci --production
COPY . .
RUN npm run build

FROM nginx:alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]