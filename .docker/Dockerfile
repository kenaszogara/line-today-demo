FROM node:12

WORKDIR /app

COPY ./ /app

# install next
# RUN yarn install -g next

# install dependencies
RUN yarn install 

EXPOSE 3000

# build static
# RUN yarn run build

# entrypoint
# ENTRYPOINT ["/app/node_modules/.bin/next"]

# serve web
CMD yarn run build && yarn run start


