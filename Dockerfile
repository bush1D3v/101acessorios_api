FROM oven/bun:1 as builder

WORKDIR /app

COPY package.json bun.lockb  ./
COPY . .

RUN bun install

FROM builder AS final

COPY --from=builder /app /app

RUN bun run build

EXPOSE 3001

CMD ["bun", "start"]
