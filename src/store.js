import { create } from "zustand";
import { createClient } from "./utils/supabase/client";
const supabase = createClient();
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

export const useSpeakers = create((set) => ({
  getSpeakers: async () => {
    try {
      const { data, error } = await supabase
        .from("speaker")
        .select()
        .order("id", { ascending: false });
      if (error) throw error;
      else return data;
    } catch (e) {}
  },
}));
