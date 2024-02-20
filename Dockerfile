FROM node:20-alpine AS base

WORKDIR /app

COPY package.json prisma ./
COPY . .

RUN yarn install

FROM base AS builder

COPY --from=base /app /app

RUN yarn run build

FROM builder AS final

EXPOSE 3001

CMD ["yarn", "start"]
