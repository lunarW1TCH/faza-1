FROM oven/bun:latest

WORKDIR /usr/src/faza-1

COPY package.json .
COPY bun.lockb .
COPY src ./src
COPY tailwind.config.js .
COPY postcss.config.js .
COPY tsconfig.json .

RUN bun install

EXPOSE 3000

CMD [ "bun", "start" ]