'use server';

import { clerkClient, currentUser } from '@clerk/nextjs';

export const addProductToFavorites = async (productId: string) => {
  const user = await currentUser();
  const userArr: any = user?.privateMetadata.favorites;

  user && await clerkClient.users.updateUserMetadata(user.id, {
    privateMetadata: {
      favorites: !userArr ? [productId] : userArr.concat(productId),
    },
  });
};
