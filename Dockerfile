# BUILD
FROM node:24-alpine AS build

# ENV
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build


FROM node:24-alpine AS production

WORKDIR /app

RUN npm install -g serve
COPY --from=build /app/dist ./

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]