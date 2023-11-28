import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Q = 15;

async function run() {
  const tablesEmpty = await checkTablesEmpty();

  if (!tablesEmpty) {
    return;
  }

  const games = Array(Q)
    .fill(null)
    .map(() => {
      return {
        author: faker.person.lastName(),
        max_players: faker.number.int(32),
        name: faker.location.street(),
      };
    });

  const createGames = games.map((game, _i) =>
    prisma.game.create({
      data: {
        ...game,
      },
    })
  );

  const _g = await prisma.$transaction(createGames);
}

async function checkTablesEmpty() {
  const gameCount = await prisma.game.count();

  return gameCount <= 0;
}

void run();
