FROM node:6.9.3-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN touch /usr/bin/entrypoint
RUN chmod +x /usr/bin/entrypoint
ENTRYPOINT "/usr/bin/entrypoint"
