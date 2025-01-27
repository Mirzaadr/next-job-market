import { PrismaClient, UserRole } from "@prisma/client";
import { placeholderJobs } from "./placeholder-data";
const prisma = new PrismaClient();

async function main() {
  // User
  const userAdmin = await prisma.user.upsert({
    where: { email: "admin1@mail.com" },
    create: {
      password: "$2a$10$1.l4xAnNalrU7Yj8fnMTGO0ZcoxuRM0P.w1ROk6YcszE6ykCGuXhW", // password123
      name: "Admin 1",
      email: "admin1@mail.com",
      emailVerified: new Date().toISOString(),
      role: UserRole.ADMIN,
    },
    update: {
      name: "Admin 1",
    },
  });
  const userRegular = await prisma.user.upsert({
    where: { email: "user1@mail.com" },
    create: {
      password: "$2a$10$1.l4xAnNalrU7Yj8fnMTGO0ZcoxuRM0P.w1ROk6YcszE6ykCGuXhW", // password123
      name: "User 1",
      email: "user1@mail.com",
      emailVerified: new Date().toISOString(),
      role: UserRole.USER,
    },
    update: {
      name: "User 1",
    },
  });

  await Promise.all(
    placeholderJobs.map(async (job) => {
      await prisma.job.upsert({
        where: {
          slug: job.slug,
        },
        update: job,
        create: job,
      });
    }),
  );

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
