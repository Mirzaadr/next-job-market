import { db } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        accounts: true,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};
