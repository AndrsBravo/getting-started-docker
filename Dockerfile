FROM node:18
WORKDIR /app
COPY package.json .

RUN npm install

#Configuracion para instalar solo produccion
#ARG NODE_ENV

#RUN if [ "$NODE_ENV" = "dev" ]; \
#    then npm install; \
#    else npm install --only=production; \
#    fi 

COPY . ./
ENV PORT 3000
EXPOSE $PORT