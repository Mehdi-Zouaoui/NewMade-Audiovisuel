import { create } from "zustand";

export const useCartProduct = create((set) => ({
  cartQuantity: 10,
  cartProducts: {},
  incrementCartQuantity: () => {
    set((state) => ({ cartQuantity: state.cartQuantity + 1 }));
  },
  decrementCartQuantity: () => {
    set((state) => ({ cartQuantity: state.cartQuantity - 1 }));
  },
  //   addToCart: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeFromCart: () => set({ bears: 0 }),
  //   updateCart: (newProducts) => set({ bears: newBears }),
}));
