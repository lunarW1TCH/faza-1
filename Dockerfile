FROM oven/bun:latest

WORKDIR /usr/src/faza-1

COPY . .

RUN bun install

EXPOSE 3000

CMD [ "bun", "start" ]