import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Q = 10;

async function run() {
  const events = Array(Q)
    .fill(null)
    .map(() => {
      return {
        status: faker.string.sample(),
        name: faker.person.firstName(),
        host_id: faker.string.uuid(),
        start_date: faker.date.between({
          from: "2010-01-01T00:00:00.000Z",
          to: "2020-01-01T00:00:00.000Z",
        }),
        end_date: faker.date.between({
          from: "2021-01-01T00:00:00.000Z",
          to: "2030-01-01T00:00:00.000Z",
        }),
      };
    });

  const createEvents = events.map((event, i) =>
    prisma.event.create({
      data: {
        ...event,
      },
    })
  );

  const _e = await prisma.$transaction(createEvents);

  const plays = Array(Q)
    .fill(null)
    .map(() => {
      return {
        game_id: faker.string.uuid(),
        event_id: _e[Math.floor(Math.random() * events.length)].id,
      };
    });

  const createPlays = plays.map((play, _i) =>
    prisma.play.create({
      data: {
        ...play,
      },
    })
  );

  const _plays = await prisma.$transaction(createPlays);

  // const _plays = await prisma.$transaction(createPlays);
  const players = Array(Q)
    .fill(null)
    .map(() => {
      return {
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        alias: faker.internet.userName(),
        rank: faker.number.int(10_000),
        user_id: faker.string.uuid(),
        play_id: _plays[Math.floor(Math.random() * plays.length)].id,
      };
    });

  const createPlayers = players.map((player, _i) =>
    prisma.player.create({
      data: {
        ...player,
      },
    })
  );

  const _players = await prisma.$transaction(createPlayers);
}

void run();
