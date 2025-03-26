FROM nginx:alpine
EXPOSE 80
COPY site /usr/share/nginx/html
