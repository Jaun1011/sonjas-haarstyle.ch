# nginx als Basis Image verwenden
# nginx wiederum verwendet das debian Betriebssystem!
FROM nginx

COPY conf /etc/nginx

VOLUME ./src /usr/share/nginx/html
VOLUME ./conf /etc/nginx

EXPOSE 80:80
